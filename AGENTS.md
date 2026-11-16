# AGENTS.md — TechnoStudios / TechnoSupport

Bu dosya, bu depoda çalışan yapay zeka ajanları ve geliştiriciler için kısa bağlam ve kurallar içerir.
Kod tabanı **derleme adımı olmayan** statik HTML/CSS/JS + (isteğe bağlı) tek bir **Cloudflare Worker**'dan oluşur.

---

## 1. Projeye genel bakış

- **Web sitesi (statik):** `https://support.technoweb.win` — GitHub Pages üzerinden yayınlanır.
- **AI Destek Sohbeti:** Siteye yerleştirilmiş sohbet widget'ı (sağ altta yuvarlak 🤖 butonu, tıklanınca sağdan açılır).
  Gerçek AI **Kilo Gateway** üzerinden `nvidia/nemotron-3.5-super-vl:free` modeliyle çalışır.
  API anahtarı Worker secret'ında (`KILO_API`) tutulur, kullanıcı girmez.
- **Destek Talepleri:** Kullanıcılar talep açar; admin yetkilisi API üzerinden görüp yanıtlar.
- **Admin Paneli:** `admin.html` — FireEye ile aynı hesap (`TechnoStudios11` / `giradmine`).
  Kimlik doğrulaması **Worker'da** yapılır, frontend'de credential yoktur.
- **Backend:** FireEye worker'ı ile **birleştirildi** — `TechnoStudios` reposundaki
  `cloudflare-worker/src/index.js` içindeki `/api/support/*` uçları.
- **Barındırma:** GitHub Pages (Actions workflow) + `support.technoweb.win` (CNAME).

---

## 2. Dizin yapısı

```
/
├─ index.html           # Ana sayfa: destek talepleri + AI sohbet widget'ı
├─ admin.html           # Yetkili paneli: gelen talepler, yanıtla, kapat
├─ style.css            # Tema, responsive düzen
├─ app.js               # i18n, chat mantığı, ticket işlemleri, admin girişi
├─ CNAME                # GitHub Pages özel alan adı (support.technoweb.win)
├─ app.yaml             # Wasmer Edge dağıtım tanımı (canlı site bu dosyadan deploy edilir)
├─ .github/workflows/
│  └─ pages.yml         # GitHub Pages dağıtım workflow'u (push'ta otomatik)
├─ AGENTS.md            # Bu dosya
└─ .gitignore           # node_modules, .dev.vars, .wrangler, vs.
```

**Yok:** build script'i, test, linter, framework, `worker/` klasörü.
Backend, FireEye worker'ı ile birleştirildiği için bu depoda Worker kodu **yoktur**;
`TechnoStudios` reposundaki `cloudflare-worker/src/index.js` içinde `/api/support/*` uçları olarak yaşar.

---

## 3. Hızlı komutlar

```powershell
# Statik site için build yok: dosyaları düzenleyip doğrudan tarayıcıda açın
python -m http.server 8000

# Backend değişiklikleri TechnoStudios reposunda yapılır:
#   cd ..\TechnoStudios\cloudflare-worker
#   npx wrangler deploy
#   npx wrangler secret put KILO_API

# Site dağıtımı: main'e push → GitHub Actions (Pages) ve Wasmer otomatik yayınlar
git push origin main

# Wasmer'dan manuel deploy (gerekirse)
wasmer deploy --owner ereny116011-cloud --app-name technosupport
```

---

## 4. Mimari ve veri akışı

```
Kullanıcı (site) ──► index.html + app.js ──► Worker proxy ──► Kilo Gateway ──► Nemotron 3.5 Super VL

Kullanıcı ──► Destek talebi açar ──► POST /api/tickets (Worker)
Yetkili ──► admin.html ──► Giriş (Worker) ──► Talepleri görür, yanıt yazar, kapatır
```

- **Kimlik doğrulama (admin):** `POST /api/auth/login` → Worker `env.ADMIN_USER` / `env.ADMIN_PASS` ile doğrular.
  Frontend yalnızca `sessionStorage['ts_admin_auth']` (Basic header) tutar; credential frontend'de **yoktur**.
- **Tema:** `localStorage['ts-theme']` (`dark`/`light`) + `body.light`.
- **Dil:** `localStorage['ts-lang']` (`tr`/`en`).
- **Worker URL:** `app.js` içinde sabit (`WORKER_URL`). Kullanıcı tarafından değiştirilemez.
- **API anahtarı:** Yalnızca Worker secret'ında (`KILO_API`). Tarayıcıya asla çıkmaz.
- **Dosya kodlaması:** UTF-8, BOM yok. Çoğu dosya CRLF; `wrangler.toml` LF.

---

## 5. API uçları (FireEye worker'ı — `cloudflare-worker/src/index.js`)

Taban adres: `https://fireeye-api.ereny116011.workers.dev`

Herkese açık:
- `GET /api/support/tickets` — Destek talepleri listesi
- `POST /api/support/tickets` — Yeni destek talebi oluştur
- `POST /api/support/ai/chat` — AI sohbet proxy'si (Kilo Gateway + Nemotron, `KILO_API` secret ile)
- `POST /api/support/auth/login` — Admin girişi (kullanıcı adı/şifre doğrulaması)
- `GET /api/support/auth/me` — Oturum durumu

Admin (Basic auth gerekli):
- `PATCH /api/support/tickets/:id` — Yanıt ekle / durum değiştir

---

## 6. Veritabanı (D1 — `fireeye_db`)

Tiketler FireEye worker'ının D1 veritabanında `support_tickets` ve `support_ticket_replies`
tablolarında tutulur. Tablolar ilk kullanımda worker tarafından kendisi oluşturulur
(`ensureSupportTables`), migration çalıştırılmasa da sistem çalışır.

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

- **Mimari:** `index.html` + `admin.html` + `style.css` + `app.js` (build yok, framework yok).
- **API anahtarı asla repoya yazılmaz** ve tarayıcıya çıkmaz; yalnızca Worker secret'ında durur.
- **Worker proxy URL'si kullanıcı tarafından değiştirilemez** (sabit `WORKER_URL`); ayarlar arayüzünde sunulmaz.
- **Admin credential frontend'de bulunmaz.** Giriş `POST /api/support/auth/login` ile Worker'da doğrulanır.
- **i18n:** `app.js` içinde `FE_I18N.tr` ve `FE_I18N.en`; metinler `data-i18n` / `data-i18n-placeholder` /
  `data-i18n-html` öznitelikleriyle bağlanır. Yeni metin eklerken **iki dili de** ekleyin.
- **Kullanıcı kaynaklı metinleri** `escapeHtml()` ile kaçırın.
- **Tema:** `localStorage['ts-theme']`; `body.light` sınıfı ile açık tema.
- **Oturum:** `sessionStorage['ts_admin_auth']` (admin Basic header).

---

## 8. Cihaz / Destek protokolü

Destek talebi gövdesi: `{ name, email, subject, message }`.
Yanıt: `{ id, status, createdAt }`.

Admin işlemleri (`PATCH /api/tickets/:id`): `{ reply }` veya `{ status: 'open' | 'closed' }`.
Admin yanıtı ticket'ın `replies` dizisine `{ text, author, createdAt }` olarak eklenir.

---

## 9. Yapılandırma ve gizli değerler

Secret'lar **FireEye worker'ında** (`fireeye-api`) tanımlıdır:

| Secret | Zorunlu mu | Açıklama |
|--------|-----------|----------|
| `KILO_API` | Evet (gerçek AI için) | Kilo Gateway API anahtarı. `npx wrangler secret put KILO_API` ile eklenir. |
| `KILO_API_BASE` | Hayır | Kilo Gateway taban URL'si (varsayılan `https://ai-gateway.kilo.ai/api/v1`). |
| `KILO_MODEL` | Hayır | Model adı (varsayılan `nvidia/nemotron-3.5-super-vl:free`). |
| `ADMIN_USER` | Önerilir | Varsayılan: `TechnoStudios11` |
| `ADMIN_PASS` | Önerilir | Varsayılan: `giradmine` |

> Secret'ları **asla** repoya yazmayın. `wrangler secret put` ile ekleyin.

---

## 10. Doğrulama (test/lint yok)

Her değişiklikten sonra en az:

1. `index.html` ve `admin.html` dosyalarını tarayıcıda açın; konsolda hata olmaması gerekir.
2. AI sohbetini TR ve EN dil düğmesiyle test edin.
3. Admin panelini `TechnoStudios11` / `giradmine` ile açın; talep oluşturup yanıtlayın.
4. Türkçe karakterlerin bozulmadığını doğrulayın (UTF-8, BOM yok).

---

## 11. Dağıtım (GitHub Pages + Cloudflare Worker)

**Site (GitHub Pages):**

1. `main` branch'e push → `.github/workflows/pages.yml` otomatik olarak Pages'a yayınlar.
2. Repo → **Settings → Pages → Build and deployment → Source: "GitHub Actions"** seçili olmalı.
3. Özel alan adı `CNAME` dosyasındaki `support.technoweb.win` üzerinden gelir.
   DNS'te CNAME kaydı `support` → `ereny116011-cloud.github.io` olmalıdır.

**Worker (Cloudflare — FireEye worker'ı ile birleşik):**

```powershell
cd ..\TechnoStudios\cloudflare-worker
$env:CLOUDFLARE_ACCOUNT_ID="0280e2748c8ba03638896e72227c2ae9"
npx wrangler deploy
npx wrangler secret put KILO_API
npx wrangler secret put ADMIN_USER
npx wrangler secret put ADMIN_PASS
```

   `KILO_API` anahtarını https://kilo.ai adresinden alın.

---

## 12. Bilinen tuzaklar

1. Gerçek "sınırsız ve ücretsiz" AI API'si yoktur; gerçek LLM için Worker'da `KILO_API` secret'ı tanımlı olmalıdır.
2. Admin oturumu `sessionStorage` ile tutulur (Basic header). Sekmeyi kapatınca oturum biter.
3. Tiketler D1'de (`support_tickets`) saklanır; worker yeniden başlatılsa da veriler korunur.
4. API anahtarı yalnızca Worker secret'ında (`KILO_API`) tutulur; tarayıcıya asla çıkmayacağı için sızdırma riski yoktur.
5. GitHub Pages'ta `worker/` klasörü yayınlanmaz (workflow yalnızca statik dosyaları `_site` içine kopyalar).
6. Özel alan adı için DNS CNAME kaydı (`support` → `ereny116011-cloud.github.io`) eklenmelidir.

---

## 13. Katkı kuralları

- Mevcut mimariyi koruyun: framework, bundler, router veya CSS kütüphanesi eklemeyin.
- Türkçe kullanıcı metinleri ve Türkçe kod yorumları mevcut üslupla yazılır.
- Sırları, token'ları ve kişisel verileri loglamayın.
- Büyük değişikliklerde önce etkilenen dosyaları okuyun.
