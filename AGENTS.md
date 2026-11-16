# AGENTS.md — TechnoStudios / TechnoSupport

Bu dosya, bu depoda çalışan yapay zeka ajanları ve geliştiriciler için kısa bağlam ve kurallar içerir.
Kod tabanı **derleme adımı olmayan** statik HTML/CSS/JS + (isteğe bağlı) tek bir **Cloudflare Worker**'dan oluşur.

---

## 1. Projeye genel bakış

- **Web sitesi (statik):** `https://support.technoweb.win` — kök dizindeki dosyalar doğrudan sunulur.
- **AI Destek Sohbeti:** Siteye yerleştirilmiş sohbet widget'ı. İki mod destekler:
  1. **Yerleşik Akıllı Asistan** (varsayılan): Türkçe kural tabanlı, gerçekten ücretsiz ve sınırsız, API anahtarı gerektirmez.
  2. **Gerçek AI via Kilo Gateway** (isteğe bağlı): `nvidia/nemotron-3.5-super-vl:free` modeli, Kilo Gateway üzerinden. API anahtarı Worker secret'ında (`KILO_API`) tutulur, kullanıcı girmez.
- **Destek Talepleri:** Kullanıcılar talep açabilir, admin yetkilisi bu talepleri görüp yanıtlayabilir.
- **Admin Paneli:** `admin.html` — FireEye ile aynı kimlik bilgileri (`TechnoStudios11` / `giradmine`).
- **Backend (isteğe bağlı):** `worker/index.js` — AI proxy + mesaj API (Cloudflare Worker).
- **Donanım/Barındırma:** Wasmer Edge statik site (`app.yaml`) + `support.technoweb.win` domain.

---

## 2. Dizin yapısı

```
/
├─ index.html           # Ana sayfa: destek talepleri + AI sohbet widget'ı
├─ admin.html           # Yetkili paneli: gelen talepler, yanıtla, kapat
├─ style.css            # Tema, responsive düzen
├─ app.js               # i18n, chat mantığı, ticket işlemleri, admin girişi
├─ data/
│  └─ tickets.json      # Destek mesajları (JSON, başlangıçta boş dizi)
├─ worker/
│  └─ index.js          # Cloudflare Worker: AI proxy + ticket API
├─ wrangler.toml        # Worker yapılandırması
├─ app.yaml             # Wasmer Edge statik dağıtım tanımı
├─ AGENTS.md            # Bu dosya
└─ .gitignore           # node_modules, .dev.vars, .wrangler, vs.
```

**Yok:** kökte `package.json` zorunlu değil (sadece wrangler devDependency için), build script'i, test, linter, framework, `README.md`.
Bu yüzden doğrulama manueldir.

---

## 3. Hızlı komutlar

```powershell
# Wasmer static site için build yok: dosyaları düzenleyip doğrudan tarayıcıda açın
python -m http.server  # veya herhangi bir statik sunucu

# Cloudflare Worker (AI proxy) yerel test
cd worker
npm install
npx wrangler dev

# Wasmer deploy
wasmer deploy
```

---

## 4. Mimari ve veri akışı

```
Kullanıcı (site) ──► index.html + app.js ──► Yerel AI asistan (kural tabanlı)
                                    │
                                    └──► Kendi AI anahtarı girilmişse → Worker proxy → LLM API

Kullanıcı ──► Destek talebi açar ──► data/tickets.json (veya Worker API)
Yetkili ──► admin.html ──► Talepleri görür, yanıt yazar, kapatır
```

- **Kimlik doğrulama (admin):** Basit session (`sessionStorage['ts_admin']`). Şifre FireEye ile aynı.
- **Tema:** `localStorage['ts-theme']` (`dark`/`light`) + `body.light`.
- **Dil:** `localStorage['ts-lang']` (`tr`/`en`).
- **AI ayarı:** `localStorage['ts_ai_mode']` (`local` veya `api`) + `localStorage['ts_ai_worker_url']` (Worker proxy URL'si). API anahtarı istemci tarafında tutulmaz.
- **Dosya kodlaması:** UTF-8, BOM yok. Çoğu dosya CRLF; `wrangler.toml` ve `app.yaml` LF.

---

## 5. API uçları (Worker / worker/index.js)

Herkese açık:
- `GET /api/tickets` — Tüm destek talepleri (admin şifresi ile filtreleme veya herkese açık liste)
- `POST /api/tickets` — Yeni destek talebi oluştur
- `POST /api/ai/chat` — AI sohbet proxy'si (Kilo Gateway + Nemotron, `KILO_API` secret ile)

Admin (giriş gerekli):
- `PATCH /api/tickets/:id` — Yanıt ekle / durum değiştir

---

## 6. Veritabanı (JSON / D1)

İlk versiyon: `data/tickets.json` (dosya tabanlı, Wasmer volume üzerinde).
Şema (örnek):

```json
[
  {
    "id": 1,
    "name": "Ahmet Yılmaz",
    "email": "ahmet@example.com",
    "subject": "Fatura sorunu",
    "message": "Faturam geldi ama tutar yanlış.",
    "status": "open",
    "createdAt": "2026-11-15T...",
    "replies": []
  }
]
```

---

## 7. Frontend kuralları

- **Tek dosya, inline CSS/JS tercih edilir** (`fireeye/index.html` modeli). Yeni özellikleri mevcut blokların yanına ekleyin.
- **AI anahtarı asla repoya yazılmaz.** Kullanıcı tarafından girilen anahtar yalnızca `localStorage` içinde tutulur.
- **i18n:** `app.js` içinde `FE_I18N.tr` ve `FE_I18N.en`; metinler `data-i18n` özniteliğiyle bağlanır. Yeni metin eklerken **iki dili de** ekleyin.
- **Kullanıcı kaynaklı metinleri** `escapeHtml()` ile kaçırın.
- **Tema:** `localStorage['ts-theme']`; `body.light` sınıfı ile açık tema.
- **Oturum:** `localStorage['ts_user']` (isteğe bağlı kullanıcı profili); `sessionStorage['ts_admin']` (admin girişi).

---

## 8. Cihaz / Destek protokolü

Destek talebi gövdesi: `{ name, email, subject, message }`.
Yanıt: `{ id, status, createdAt }`.

Admin yanıtı: `{ reply, adminName, createdAt }` — talebin `replies` dizisine eklenir.

---

## 9. Yapılandırma ve gizli değerler

| Secret | Zorunlu mu | Açıklama |
|--------|-----------|----------|
| `KILO_API` | Evet (gerçek AI için) | Kilo Gateway API anahtarı. `npx wrangler secret put KILO_API` ile eklenir. |
| `KILO_API_BASE` | Hayır | Kilo Gateway taban URL'si (varsayılan `https://gateway.kilo.chat/v1`). |
| `KILO_MODEL` | Hayır | Model adı (varsayılan `nvidia/nemotron-3.5-super-vl:free`). |
| `ADMIN_USER` | Önerilir | Varsayılan: `TechnoStudios11` |
| `ADMIN_PASS` | Önerilir | Varsayılan: `giradmine` |

> Secret'ları **asla** repoya yazmayın. `.dev.vars` veya Wasmer ortam değişkenleri kullanın.

---

## 10. Doğrulama (test/lint yok)

Her değişiklikten sonra en az:

1. `index.html` ve `admin.html` dosyalarını tarayıcıda açın; konsolda hata olmaması gerekir.
2. AI sohbetini TR ve EN dil düğmesiyle test edin.
3. Admin panelini `TechnoStudios11` / `giradmine` ile açın; talep oluşturup yanıtlayın.
4. Türkçe karakterlerin bozulmadığını doğrulayın (UTF-8, BOM yok).

---

## 11. Dağıtım (Wasmer Edge)

1. `app.yaml` içinde domain `support.technoweb.win` olarak tanımlı.
2. `wasmer deploy` ile siteyi yayına alın.
3. **AI proxy Worker'ı (isteğe bağlı):** `worker/` dizininde `npx wrangler deploy` yapın ve `KILO_API` secret'ını ekleyin:

   ```powershell
   cd worker
   $env:CLOUDFLARE_ACCOUNT_ID="0280e2748c8ba03638896e72227c2ae9"
   npx wrangler deploy
   npx wrangler secret put KILO_API
   ```

   `KILO_API` anahtarını https://kilo.chat adresinden alın.
4. Volume (`support-data`) ticket verilerini saklar.

---

## 12. Bilinen tuzaklar

1. Gerçek "sınırsız ve ücretsiz" AI API'si yoktur. Yerleşik asistan bu kısıtı aşar; gerçek LLM için Worker'da `KILO_API` secret'ı tanımlı olmalıdır.
2. Admin girişi basit session tabanlıdır; üretimde HTTPS mutlaka kullanılmalıdır.
3. `data/tickets.json` Wasmer volume üzerindeyse volume yeniden mount edildiğinde veri kaybı riski vardır; yedek alınız.
4. API anahtarı yalnızca Worker secret'ında (`KILO_API`) tutulur; tarayıcıya asla çıkmayacağı için sızdırma riski yoktur.

---

## 13. Katkı kuralları

- Mevcut mimariyi koruyun: framework, bundler, router veya CSS kütüphanesi eklemeyin.
- Türkçe kullanıcı metinleri ve Türkçe kod yorumları mevcut üslupla yazılır.
- Sırları, token'ları ve kişisel verileri loglamayın.
- Büyük değişikliklerde önce etkilenen dosyaları okuyun.
