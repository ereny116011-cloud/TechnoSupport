// TechnoSupport — Uygulama mantığı
// UTF-8, BOM yok, CRLF

/* === i18n === */
const FE_I18N = {
    tr: {
        siteTitle: 'TechnoSupport',
        brand: 'Techno<span class="text-brand-600">Support</span>',
        navSupport: 'Destek',
        navMyTickets: 'Taleplerim',
        heroTitle: 'Resmi destek kanallarımızdan bize ulaşın',
        heroSub: 'Desteğe mi ihtiyacınız var? Size yardımcı olabiliriz. İhtiyacınıza uygun kanalı seçin.',
        statusOk: 'Tüm sistemler çalışıyor',
        emailCardTitle: 'Geleneksel e-posta desteği',
        emailCardSub: 'Ekibimize doğrudan yazın; talebiniz kayıt altına alınır ve e-posta ile yanıtlanır.',
        emailBullet1: 'Genellikle 24 saat içinde yanıt',
        emailBullet2: 'FireEye hesabı ve cihaz kurulumu',
        emailBullet3: 'Faturalama ve lisans soruları',
        emailBtn: 'E-posta ile ulaşın',
        liveCardTitle: 'Techno Support Canlı',
        liveCardSub: 'AI destek asistanımız anında yanıt verir; karmaşık konularda ekibimiz devreye girer.',
        liveBullet1: 'AI asistan anında yanıt verir',
        liveBullet2: 'Kurulum, APK ve panel soruları',
        liveBullet3: 'Hafta içi 09:00–18:00 insan desteği',
        liveBtn: 'Bizimle sohbet edin',
        ticketsTitle: 'Destek talebi oluşturun',
        ticketsSub: 'Formu doldurun; talebiniz kaydedilir ve ekibimiz sizinle iletişime geçer.',
        nameLabel: 'Ad Soyad',
        emailLabel: 'E-posta',
        subjectLabel: 'Konu',
        messageLabel: 'Mesajınız',
        ticketPrivacy: 'Bilgileriniz yalnızca destek amacıyla kullanılır.',
        listTitle: 'Son talepler',
        footerNote: '© TechnoWeb — TechnoSupport destek merkezi',
        footerMail: 'E-posta',
        chatOnline: 'Çevrimiçi · anında yanıt',
        navHome: 'Ana Sayfa',
        navMessages: 'Mesajlar',
        navTickets: 'Destek Talepleri',
        navChat: 'AI Asistan',
        navLogin: 'Giriş Yap',
        navRegister: 'Kaydol',
        navLogout: 'Çıkış',
        navLang: 'Dil: EN',
        newTicket: 'Yeni Talep Aç',
        myTickets: 'Taleplerim',
        namePlaceholder: 'Ad Soyad',
        emailPlaceholder: 'E-posta',
        subjectPlaceholder: 'Konu',
        messagePlaceholder: 'Mesajınızı yazın...',
        sendTicket: 'Talebi Gönder',
        ticketSuccess: 'Talebiniz başarıyla oluşturuldu. Yetkililerimiz sizinle iletişime geçecektir.',
        ticketError: 'Talep gönderilirken bir hata oluştu.',
        noTickets: 'Henüz destek talebiniz yok.',
        ticketStatusOpen: 'Açık',
        ticketStatusClosed: 'Kapalı',
        chatTitle: 'AI Destek Asistanı',
        saveAi: 'Ayarları Kaydet',
        chatPlaceholder: 'Mesajınızı yazın...',
        send: 'Gönder',
        typing: 'Yazıyor...',
        adminLogin: 'Admin Girişi',
        adminLoginSub: 'Yetkili erişimi',
        adminUser: 'Kullanıcı Adı',
        passwordLabel: 'Şifre',
        fullNameLabel: 'Ad Soyad',
        passwordHint: 'En az 6 karakter.',
        currentPasswordLabel: 'Mevcut Şifre',
        newPasswordLabel: 'Yeni Şifre',
        newPasswordOptional: 'Boş bırakılırsa şifre değişmez.',
        twoFactorCode: 'Doğrulama kodu',
        twoFactorHint: 'E-postanıza 6 haneli kod gönderdik.',
        verifyBtn: 'Doğrula',
        resetTokenLabel: 'Sıfırlama Token\'ı',
        verifyTokenLabel: 'Doğrulama Token\'ı',
        forgotHint: 'Kayıtlı e-posta adresinizi girin, şifre sıfırlama bağlantısı gönderelim.',
        resetHint: 'E-postanıza gelen sıfırlama token\'ını ve yeni şifrenizi girin.',
        verifyHint: 'E-postanıza gelen doğrulama token\'ını girin.',
        forgotSubmit: 'Sıfırlama Bağlantısı Gönder',
        resetSubmit: 'Şifreyi Sıfırla',
        verifySubmit: 'E-postayı Doğrula',
        verifyResend: 'Doğrulama kodunu yeniden gönder',
        backToLogin: 'Giriş sayfasına dön',
        backToProfile: 'Profili görüntüle',
        back: 'Geri dön',
        registerSubmit: 'Hesap Oluştur',
        loginSubmit: 'Giriş Yap',
        haveAccount: 'Zaten hesabınız var mı?',
        loginLink: 'Giriş yap',
        noAccount: 'Hesabınız yok mu?',
        registerLink: 'Kaydol',
        forgotLink: 'Şifremi unuttum',
        orSeparator: 'Veya ile devam edin',
        googleLogin: 'Google ile Giriş',
        microsoftLogin: 'Microsoft ile Giriş',
        githubLogin: 'GitHub ile Giriş',
        authTitleLogin: 'FireEye hesabınızla giriş yapın',
        authSubLogin: 'Destek talebi açmak için giriş yapın.',
        authTitleRegister: 'Yeni hesap oluşturun',
        authSubRegister: 'TechnoSupport\'ta destek talebi açmak için bir hesap oluşturun.',
        tabLogin: 'Giriş Yap',
        tabRegister: 'Kaydol',
        tabForgot: 'Şifremi Unuttum',
        tabReset: 'Şifre Sıfırla',
        tabVerify: 'Email Doğrula',
        authRequiredTitle: 'Taleplerinizi görmek için giriş yapın',
        authRequiredText: 'E-posta desteği ve AI asistan giriş olmadan çalışır. Destek talebi açmak ve taleplerinizi takip etmek için FireEye hesabınızla giriş yapın.',
        authRequiredBtn: 'FireEye ile giriş yap',
        identityLabel: 'Talep sahibi',
        listTitleMine: 'Taleplerim',
        meFail: 'Oturum bilgisi alınamadı.',
        logoutOk: 'Başarıyla çıkış yapıldı.',
        profileTitle: 'Hesap Profili',
        profileEdit: 'Bilgileri Düzenle',
        profileEditHint: 'E-posta ve şifrenizi güncelleyebilirsiniz. Mevcut şifreniz doğrulama için gereklidir.',
        profileEditSubmit: 'Değişiklikleri Kaydet',
        profileEmail: 'E-posta',
        profileFullName: 'Ad Soyad',
        twofaTitle: 'İki Adımlı Doğrulama',
        twofaDesc: 'Girişte e-posta size 6 hanelik kod gönderir.',
        twofaStatusChecking: 'Kontrol ediliyor...',
        twofaStatusOn: 'Açık',
        twofaStatusOff: 'Kapalı',
        twofaBtnSetup: '2FA\'yı Kur',
        twofaBtnEnable: '2FA\'yı Etkinleştir',
        twofaBtnDisable: '2FA\'yı Devre Dışı Bırak',
        twofaEnterCode: '6 haneli kodu girin',
        adminPass: 'Şifre',
        adminLoginBtn: 'Giriş Yap',
        adminLogout: 'Çıkış',
        adminTitle: 'Destek Talepleri — Yönetim Paneli',
        adminRefresh: 'Yenile',
        adminReply: 'Yanıtla',
        adminClose: 'Kapat',
        adminOpen: 'Aç',
        adminDelete: 'Sil',
        adminDeleteConfirm: 'Bu destek talebi kalıcı olarak silinecek. Onaylıyor musunuz?',
        adminNoTickets: 'Henüz destek talebi yok.',
        from: 'Müşteri',
        admin: 'Yetkili',
        themeDark: 'Karanlık Tema',
        themeLight: 'Açık Tema',
        settings: 'Ayarlar',
        close: 'Kapat',
        welcomeMsg: 'Merhaba techno-user 👋 Size nasıl yardımcı olabiliriz?',
        welcomeTitle: 'Merhaba techno-user 👋',
        recentLabel: 'Son mesaj',
        unknown: 'Üzgünüm, bir yanıt alınamadı. Lütfen tekrar deneyin.'
    },
    en: {
        siteTitle: 'TechnoSupport',
        brand: 'Techno<span class="text-brand-600">Support</span>',
        navSupport: 'Support',
        navMyTickets: 'My Tickets',
        heroTitle: 'Reach out on the official support channels',
        heroSub: "Need support? We can help! Here's where to look.",
        statusOk: 'All systems operational',
        emailCardTitle: 'Traditional email support',
        emailCardSub: 'Write to our team directly; your request is logged and answered by email.',
        emailBullet1: 'Usually a reply within 24 hours',
        emailBullet2: 'FireEye account and device setup',
        emailBullet3: 'Billing and licensing questions',
        emailBtn: 'Contact us via email',
        liveCardTitle: 'Techno Support Live',
        liveCardSub: 'Our AI assistant answers instantly; our team steps in for complex issues.',
        liveBullet1: 'AI assistant replies instantly',
        liveBullet2: 'Setup, APK and dashboard questions',
        liveBullet3: 'Human support weekdays 09:00–18:00',
        liveBtn: 'Chat with us',
        ticketsTitle: 'Create a support ticket',
        ticketsSub: 'Fill in the form; your request is saved and our team will get back to you.',
        nameLabel: 'Full name',
        emailLabel: 'E-mail',
        subjectLabel: 'Subject',
        messageLabel: 'Your message',
        ticketPrivacy: 'Your details are used for support purposes only.',
        listTitle: 'Recent tickets',
        footerNote: '© TechnoWeb — TechnoSupport help center',
        footerMail: 'E-mail',
        chatOnline: 'Online · instant replies',
        navHome: 'Home',
        navMessages: 'Messages',
        navTickets: 'Support Tickets',
        navChat: 'AI Assistant',
        navLogin: 'Login',
        navRegister: 'Register',
        navLogout: 'Logout',
        navLang: 'Lang: TR',
        newTicket: 'New Ticket',
        myTickets: 'My Tickets',
        namePlaceholder: 'Full Name',
        emailPlaceholder: 'E-mail',
        subjectPlaceholder: 'Subject',
        messagePlaceholder: 'Type your message...',
        sendTicket: 'Send Ticket',
        ticketSuccess: 'Your ticket has been created successfully. Our team will contact you.',
        ticketError: 'An error occurred while sending your ticket.',
        noTickets: 'You have no support tickets yet.',
        ticketStatusOpen: 'Open',
        ticketStatusClosed: 'Closed',
        chatTitle: 'AI Support Assistant',
        saveAi: 'Save Settings',
        chatPlaceholder: 'Type your message...',
        send: 'Send',
        typing: 'Typing...',
        adminLogin: 'Admin Login',
        adminLoginSub: 'Authorized access only',
        adminUser: 'Username',
        passwordLabel: 'Password',
        fullNameLabel: 'Full name',
        passwordHint: 'At least 6 characters.',
        currentPasswordLabel: 'Current Password',
        newPasswordLabel: 'New Password',
        newPasswordOptional: 'Leave blank to keep current password.',
        twoFactorCode: 'Verification code',
        twoFactorHint: 'We sent a 6-digit code to your email.',
        verifyBtn: 'Verify',
        resetTokenLabel: 'Reset Token',
        verifyTokenLabel: 'Verification Token',
        forgotHint: 'Enter your registered email address and we will send a password reset link.',
        resetHint: 'Enter the reset token from your email and your new password.',
        verifyHint: 'Enter the verification token from your email.',
        forgotSubmit: 'Send Reset Link',
        resetSubmit: 'Reset Password',
        verifySubmit: 'Verify Email',
        verifyResend: 'Resend verification code',
        backToLogin: 'Return to login',
        backToProfile: 'View Profile',
        back: 'Back',
        registerSubmit: 'Create Account',
        loginSubmit: 'Login',
        haveAccount: 'Already have an account?',
        loginLink: 'Log in',
        noAccount: "Don't have an account?",
        registerLink: 'Register',
        forgotLink: 'Forgot password',
        orSeparator: 'Or continue with',
        googleLogin: 'Sign in with Google',
        microsoftLogin: 'Sign in with Microsoft',
        githubLogin: 'Sign in with GitHub',
        authTitleLogin: 'Sign in with your FireEye account',
        authSubLogin: 'Sign in to open a support ticket.',
        authTitleRegister: 'Create new account',
        authSubRegister: 'Create an account to open support tickets on TechnoSupport.',
        tabLogin: 'Login',
        tabRegister: 'Register',
        tabForgot: 'Forgot Password',
        tabReset: 'Reset Password',
        tabVerify: 'Verify Email',
        authRequiredTitle: 'Sign in to view your tickets',
        authRequiredText: 'Email support and AI assistant work without signing in. To open a support ticket and track your tickets, sign in with your FireEye account.',
        authRequiredBtn: 'Sign in with FireEye',
        identityLabel: 'Ticket owner',
        listTitleMine: 'My tickets',
        meFail: 'Failed to load session.',
        logoutOk: 'Signed out successfully.',
        profileTitle: 'Account Profile',
        profileEdit: 'Edit Details',
        profileEditHint: 'You can update your email and password. Your current password is required for verification.',
        profileEditSubmit: 'Save Changes',
        profileEmail: 'Email',
        profileFullName: 'Full Name',
        twofaTitle: 'Two-Factor Authentication',
        twofaDesc: 'Login sends a 6-digit code to your email.',
        twofaStatusChecking: 'Checking...',
        twofaStatusOn: 'Enabled',
        twofaStatusOff: 'Disabled',
        twofaBtnSetup: 'Set up 2FA',
        twofaBtnEnable: 'Enable 2FA',
        twofaBtnDisable: 'Disable 2FA',
        twofaEnterCode: 'Enter the 6-digit code',
        adminPass: 'Password',
        adminLoginBtn: 'Login',
        adminLogout: 'Logout',
        adminTitle: 'Support Tickets — Management Panel',
        adminRefresh: 'Refresh',
        adminReply: 'Reply',
        adminClose: 'Close',
        adminOpen: 'Open',
        adminDelete: 'Delete',
        adminDeleteConfirm: 'This support ticket will be permanently deleted. Do you confirm?',
        adminNoTickets: 'No support tickets yet.',
        from: 'Customer',
        admin: 'Agent',
        themeDark: 'Dark Theme',
        themeLight: 'Light Theme',
        settings: 'Settings',
        close: 'Close',
        welcomeMsg: 'Hi techno-user 👋 How can we help?',
        welcomeTitle: 'Hi techno-user 👋',
        recentLabel: 'Recent message',
        unknown: "Sorry, I couldn't get a response. Please try again."
    }
};

let lang = localStorage['ts-lang'] || 'tr';
let theme = localStorage['ts-theme'] || 'light';
let WORKER_URL = 'https://fireeye-api.ereny116011.workers.dev';

// OAuth sağlayıcı kimlikleri (Google Cloud Console / Azure Portal / GitHub Settings)
// Boş bırakılan sağlayıcının butonu otomatik gizlenir.
const OAUTH_CLIENTS = {
    google: 'YOUR_GOOGLE_CLIENT_ID',
    microsoft: 'YOUR_MICROSOFT_CLIENT_ID',
    github: 'YOUR_GITHUB_CLIENT_ID'
};

// AI asistanına TechnoWeb / FireEye bilgi tabanı (Worker tarafına system prompt olarak gönderilir).
const SUPPORT_SYSTEM_PROMPT = `Sen TechnoWeb'in (https://www.technoweb.win) resmi destek asistanısın. Adın "TechnoSupport AI".
Kullanıcı hangi dilde yazarsa o dilde (Türkçe veya İngilizce) yanıt ver. Kısa, net ve nazik ol; gerektiğinde madde işaretleri kullan.

BİLGİ TABANI:
- TechnoWeb, FireEye adlı akıllı çevre izleme ürününü geliştirir. Site: https://www.technoweb.win
- FireEye donanımı: Deneyap Kart 1A / ESP32; sıcaklık, nem ve gaz sensörlerini okur, verileri HTTPS ile 3 saniyede bir buluta gönderir.
- FireEye web paneli: https://www.technoweb.win/fireeye/index.html — üyelik, cihaz ekleme, canlı izleme, geçmiş grafikleri ve yönetici paneli içerir.
- Android uygulaması (APK): Panelin "İndir" sekmesinden veya doğrudan https://www.technoweb.win/downloads/fireeye-<sürüm>.apk adresinden indirilir. Eski sürümler için fireeye.apk yedeği vardır.
- Cihaz eşleştirme: Panelde üretilen "fe_..." ile başlayan cihaz token'ı cihaza bir kez girilir; kaybolursa panelden yenilenir. LCD'de görünen eşleştirme kodu tek başına yetki vermez.
- Destek kanalları: bu site (https://support.technoweb.win), AI sohbeti ve e-posta (technostudios11@gmail.com). Karmaşık talepler için destek formu doldurulmalıdır.
- Hesaplar: FireEye paneli ve TechnoSupport aynı yönetici hesabını kullanır. Şifre sıfırlama e-posta ile yapılır. 2FA e-posta koduyla çalışır.
- Güvenlik: API anahtarları ve sunucu sırları asla paylaşılmaz; kullanıcıdan şifre veya token istenmez.

KURALLAR:
- Bilmediğin veya emin olmadığın konularda uydurma; "bu konuda net bilgim yok" de ve destek formunu/e-postayı öner.
- FireEye'ın başka bir şirketin ürünü olduğuna dair genel internet bilgisi verme; buradaki FireEye TechnoWeb'in çevre izleme ürünüdür.
- Fiyat, teslimat süresi veya garanti gibi doğrulanmamış taahhütlerde bulunma.`;

/* === Tema === */
function applyTheme() {
    if (theme === 'light') {
        document.body.classList.add('light');
    } else {
        document.body.classList.remove('light');
    }
    const btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = t(theme === 'light' ? 'themeLight' : 'themeDark');
}

/* === Dil === */
function t(key) {
    return (FE_I18N[lang] && FE_I18N[lang][key]) || key;
}

function applyLang() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (FE_I18N[lang] && FE_I18N[lang][k]) el.textContent = FE_I18N[lang][k];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const k = el.getAttribute('data-i18n-placeholder');
        if (FE_I18N[lang] && FE_I18N[lang][k]) el.placeholder = FE_I18N[lang][k];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const k = el.getAttribute('data-i18n-html');
        if (FE_I18N[lang] && FE_I18N[lang][k]) el.innerHTML = FE_I18N[lang][k];
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const k = el.getAttribute('data-i18n-title');
        if (FE_I18N[lang] && FE_I18N[lang][k]) el.title = FE_I18N[lang][k];
    });
    const langBtn = document.getElementById('langToggle');
    if (langBtn) langBtn.textContent = t('navLang');
    applyTheme();
}

/* === Escape HTML === */
function escapeHtml(text) {
    if (!text) return '';
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

/* === Admin kimlik doğrulaması (Worker üzerinden, credential frontend'de yok) === */
function getAdminAuthHeader() {
    const auth = sessionStorage['ts_admin_auth'];
    return auth ? { Authorization: auth } : {};
}

function isAdminLoggedIn() {
    return !!sessionStorage['ts_admin_auth'];
}

async function adminLogin(user, pass) {
    try {
        const res = await fetch(WORKER_URL + '/api/support/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: user, password: pass })
        });
        if (!res.ok) return false;
        const data = await res.json();
        if (data.ok && data.token) {
            const encoded = btoa(user + ':' + pass);
            sessionStorage['ts_admin_auth'] = 'Basic ' + encoded;
            return true;
        }
        return false;
    } catch (e) {
        console.error('Admin login error', e);
        return false;
    }
}

function adminLogout() {
    sessionStorage.removeItem('ts_admin_auth');
}

/* === FireEye hesap oturumu (aynı /login, /register, /login/2fa uçları) === */
const FE_USER_KEY = 'fireeye_user';

function getFeUser() {
    try {
        return JSON.parse(localStorage[FE_USER_KEY] || '{}');
    } catch (e) { return {}; }
}

function setFeUser(token, user) {
    localStorage[FE_USER_KEY] = JSON.stringify({ token, user });
    updateAuthUI();
}

function clearFeUser() {
    localStorage.removeItem(FE_USER_KEY);
    updateAuthUI();
}

function isFeLoggedIn() {
    return !!(getFeUser().token && getFeUser().user);
}

async function feLogin(email, password) {
    const res = await fetch(WORKER_URL + '/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    const data = await res.json().catch(() => ({}));
    if (!data.success) throw new Error(data.message || 'Giriş başarısız.');
    if (data.requires2fa) {
        return { requires2fa: true, challenge: data.challenge, email: data.email };
    }
    const user = Object.assign({}, data.user, { devices: data.device ? [data.device] : [] });
    setFeUser(data.token, user);
    return { ok: true, user };
}

async function feLogin2fa(challenge, code) {
    const res = await fetch(WORKER_URL + '/login/2fa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ challenge, code })
    });
    const data = await res.json().catch(() => ({}));
    if (!data.success) throw new Error(data.message || 'Kod doğrulanamadı.');
    const user = Object.assign({}, data.user, { devices: data.device ? [data.device] : [] });
    setFeUser(data.token, user);
    return user;
}

async function feRegister(fullName, email, password) {
    const res = await fetch(WORKER_URL + '/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, fullName })
    });
    const data = await res.json().catch(() => ({}));
    if (!data.success) throw new Error(data.message || 'Kayıt başarısız.');
    const user = Object.assign({}, data.user, { devices: data.device ? [data.device] : [] });
    setFeUser(data.token, user);
    return user;
}

/* === Şifre Sıfırlama === */
async function feForgotPassword(email) {
    const res = await fetch(WORKER_URL + '/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, resetBaseUrl: window.location.origin + '/index.html' })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.success) throw new Error(data.message || 'Sıfırlama bağlantısı gönderilemedi.');
    return data;
}

async function feResetPassword(token, newPassword) {
    const res = await fetch(WORKER_URL + '/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, newPassword })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.success) throw new Error(data.message || 'Şifre sıfırlanamadı.');
    return data;
}

/* === Email Doğrulama === */
// Worker GET /verify-email?token=...&redirect=... ile çalışır ve siteye yönlendirir.
async function feVerifyEmail(token) {
    const redirect = window.location.origin + '/index.html';
    const url = WORKER_URL + '/verify-email?token=' + encodeURIComponent(token) +
        '&redirect=' + encodeURIComponent(redirect);
    window.location.href = url;
    return { success: true };
}

async function feResendVerification() {
    const res = await fetch(WORKER_URL + '/resend-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...getFeAuthHeader() },
        body: JSON.stringify({ redirect: window.location.origin + '/index.html' })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.success) throw new Error(data.message || 'Doğrulama kodu gönderilemedi.');
    return data;
}

/* === 2FA Yönetimi (Bearer auth gerekli) === */
async function feGet2faStatus() {
    const res = await fetch(WORKER_URL + '/2fa/status', {
        headers: { ...getFeAuthHeader() }
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.success) throw new Error(data.message || '2FA durumu alınamadı.');
    return data;
}

async function feSetup2fa() {
    const res = await fetch(WORKER_URL + '/2fa/setup', {
        method: 'POST',
        headers: { ...getFeAuthHeader() }
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.success) throw new Error(data.message || '2FA kurulumu başarısız.');
    return data;
}

async function feEnable2fa(code) {
    const res = await fetch(WORKER_URL + '/2fa/enable', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...getFeAuthHeader() },
        body: JSON.stringify({ code })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.success) throw new Error(data.message || '2FA etkinleştirilemedi.');
    return data;
}

async function feDisable2fa() {
    const res = await fetch(WORKER_URL + '/2fa/disable', {
        method: 'POST',
        headers: { ...getFeAuthHeader() }
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.success) throw new Error(data.message || '2FA devre dışı bırakılamadı.');
    return data;
}

/* === Profil / Hesap Ayarları (Bearer auth gerekli) === */
async function feGetProfile() {
    const res = await fetch(WORKER_URL + '/me', {
        headers: { ...getFeAuthHeader() }
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.success) throw new Error(data.message || 'Profil alınamadı.');
    return data.user;
}

// Worker PUT /user/update-credentials gövdesi { newEmail, newPassword } bekler.
// Mevcut şifre önce /login ile doğrulanır, sonra geçici token ile güncelleme yapılır.
async function feUpdateCredentials(newEmail, currentPassword, newPassword) {
    const stored = getFeUser();
    const email = (newEmail || (stored.user && stored.user.email) || '').trim();

    // 1) Mevcut şifre doğrulaması
    let tempToken = '';
    if (currentPassword) {
        const loginRes = await fetch(WORKER_URL + '/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: (stored.user && stored.user.email) || email, password: currentPassword })
        });
        const loginData = await loginRes.json().catch(() => ({}));
        if (!loginData.success || !loginData.token) {
            throw new Error(loginData.message || 'Mevcut şifre hatalı.');
        }
        tempToken = loginData.token;
    } else {
        tempToken = stored.token;
    }

    // 2) Güncelleme
    const res = await fetch(WORKER_URL + '/user/update-credentials', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + tempToken },
        body: JSON.stringify({ newEmail: email, newPassword: newPassword || '' })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.success) throw new Error(data.message || 'Güncelleme başarısız.');
    return data;
}

/* === Bearer auth ile Ticket işlemleri === */
function getFeAuthHeader() {
    const token = getFeUser().token;
    return token ? { Authorization: 'Bearer ' + token } : {};
}

async function fetchMyTickets() {
    try {
        const res = await fetch(WORKER_URL + '/api/support/tickets', {
            headers: { ...getFeAuthHeader() }
        });
        if (!res.ok) return [];
        const data = await res.json();
        return data.tickets || [];
    } catch (e) {
        console.error('Fetch my tickets error', e);
        return [];
    }
}

async function createMyTicket(subject, message) {
    const res = await fetch(WORKER_URL + '/api/support/tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...getFeAuthHeader() },
        body: JSON.stringify({ subject, message })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.status) throw new Error(data.error || 'Talep oluşturulamadı.');
    return data.id;
}

/* === Otomatik oturum geri yükleme === */
async function restoreFeSession() {
    const u = getFeUser();
    if (!u.token) return false;
    try {
        const res = await fetch(WORKER_URL + '/me', {
            headers: { Authorization: 'Bearer ' + u.token }
        });
        if (!res.ok) { clearFeUser(); return false; }
        const data = await res.json();
        setFeUser(u.token, data.user);
        return true;
    } catch (e) {
        clearFeUser();
        return false;
    }
}

/* === Admin ticket işlemleri (Basic auth) === */
async function replyTicket(id, replyText) {
    try {
        const res = await fetch(WORKER_URL + '/api/support/tickets/' + id, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', ...getAdminAuthHeader() },
            body: JSON.stringify({ reply: replyText })
        });
        if (!res.ok) throw new Error('Yanıt eklenemedi');
        return await res.json();
    } catch (e) {
        throw e;
    }
}

async function setTicketStatus(id, status) {
    try {
        const res = await fetch(WORKER_URL + '/api/support/tickets/' + id, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', ...getAdminAuthHeader() },
            body: JSON.stringify({ status: status })
        });
        if (!res.ok) throw new Error('Durum değiştirilemedi');
        return await res.json();
    } catch (e) {
        throw e;
    }
}

async function deleteTicket(id) {
    try {
        const res = await fetch(WORKER_URL + '/api/support/tickets/' + id, {
            method: 'DELETE',
            headers: { ...getAdminAuthHeader() }
        });
        if (!res.ok) throw new Error('Ticket silinemedi');
        return await res.json();
    } catch (e) {
        throw e;
    }
}

/* === Render yardımcıları === */
function formatDate(iso) {
    if (!iso) return '';
    const d = new Date(iso);
    return d.toLocaleString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

/* === AI Sohbet Penceresi === */
const aiBubbleBtn = document.getElementById('aiBubbleBtn');
const aiChatPanel = document.getElementById('aiChatPanel');
const aiCloseBtn = document.getElementById('aiCloseBtn');
const aiChatMessages = document.getElementById('aiChatMessages');
const aiChatInput = document.getElementById('aiChatInput');
const aiChatSend = document.getElementById('aiChatSend');
const aiSettingsBtn2 = document.getElementById('aiSettingsBtn2');
const aiBubbleDot = document.getElementById('aiBubbleDot');

function toggleAIChat() {
    const open = !aiChatPanel.classList.contains('open');
    if (open) {
        aiChatPanel.classList.add('open');
        aiBubbleDot.classList.remove('active');
        if (aiChatMessages.children.length === 0) {
            addAIChatMessage(t('welcomeMsg'), 'ai');
        }
        aiChatInput.focus();
    } else {
        aiChatPanel.classList.remove('open');
    }
}

function closeAIChat() {
    aiChatPanel.classList.remove('open');
}

function addAIChatMessage(text, type, meta) {
    if (!aiChatMessages) return;
    const isUser = type === 'user';
    const isSystem = type === 'system';

    const wrap = document.createElement('div');
    wrap.className = 'ai-msg ' + type + ' flex ' + (isUser ? 'justify-end' : isSystem ? 'justify-center' : 'justify-start');

    const bubble = document.createElement('div');
    if (isSystem) {
        bubble.className = 'rounded-full bg-slate-200/70 px-3 py-1 text-[11px] font-medium italic text-slate-500';
    } else if (isUser) {
        bubble.className = 'max-w-[82%] rounded-2xl rounded-br-md bg-brand-600 px-3.5 py-2.5 text-sm leading-relaxed text-white shadow-sm';
    } else {
        bubble.className = 'max-w-[82%] rounded-2xl rounded-bl-md border border-slate-200 bg-white px-3.5 py-2.5 text-sm leading-relaxed text-slate-700 shadow-sm';
    }

    bubble.innerHTML =
        '<div class="whitespace-pre-line break-words">' + escapeHtml(text) + '</div>' +
        (meta ? '<span class="mt-1 block text-[10px] opacity-60">' + escapeHtml(meta) + '</span>' : '');

    wrap.appendChild(bubble);
    aiChatMessages.appendChild(wrap);
    aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
}

async function handleAIChatSend() {
    if (!aiChatInput || !aiChatMessages) return;
    const text = aiChatInput.value.trim();
    if (!text) return;
    addAIChatMessage(text, 'user');
    aiChatInput.value = '';
    addAIChatMessage(t('typing'), 'system');

    try {
        const res = await fetch(WORKER_URL + '/api/support/ai/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: text, lang: lang, systemPrompt: SUPPORT_SYSTEM_PROMPT })
        });
        if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            addAIChatMessage('AI hatası: ' + (err.error || res.status), 'ai');
            return;
        }
        const data = await res.json();
        // remove typing
        const systems = aiChatMessages.querySelectorAll('.msg.system, .ai-msg.system');
        if (systems.length) systems[systems.length - 1].remove();
        addAIChatMessage(data.answer || t('unknown'), 'ai', formatDate(new Date().toISOString()));
    } catch (e) {
        const systems = aiChatMessages.querySelectorAll('.msg.system, .ai-msg.system');
        if (systems.length) systems[systems.length - 1].remove();
        addAIChatMessage('AI proxy bağlanamadı: ' + String(e && e.message), 'ai');
    }
}

/* === Bildirim (toast) === */
let toastTimer = null;
function showToast(message, type) {
    let el = document.getElementById('tsToast');
    if (!el) {
        el = document.createElement('div');
        el.id = 'tsToast';
        el.className = 'fixed bottom-6 left-1/2 z-[140] max-w-[calc(100vw-2.5rem)] -translate-x-1/2 rounded-xl px-4 py-3 text-sm font-medium shadow-xl ring-1 transition-all duration-300';
        document.body.appendChild(el);
    }
    el.className = 'fixed bottom-6 left-1/2 z-[140] max-w-[calc(100vw-2.5rem)] -translate-x-1/2 rounded-xl px-4 py-3 text-sm font-medium shadow-xl ring-1 transition-all duration-300 ' +
        (type === 'error'
            ? 'bg-rose-50 text-rose-700 ring-rose-200'
            : 'bg-emerald-50 text-emerald-700 ring-emerald-200');
    el.textContent = message;
    el.style.opacity = '1';
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.style.opacity = '0'; }, 4000);
}

/* === Ticket listesi (admin.html) === */
async function fetchTickets() {
    try {
        const res = await fetch(WORKER_URL + '/api/support/tickets');
        if (!res.ok) return [];
        const data = await res.json();
        return data.tickets || [];
    } catch (e) {
        console.error('Fetch tickets error', e);
        return [];
    }
}

async function renderTicketList() {
    const list = document.getElementById('ticketList');
    if (!list) return;
    const tickets = await fetchTickets();
    tickets.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    list.innerHTML = '';
    if (tickets.length === 0) {
        list.innerHTML = '<div class="rounded-xl border border-dashed border-slate-200 bg-slate-50/60 px-4 py-8 text-center text-xs text-slate-400">' + t('noTickets') + '</div>';
        return;
    }
    tickets.forEach(tick => {
        const open = tick.status === 'open';
        const div = document.createElement('div');
        div.className = 'rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-3 transition hover:border-brand-200 hover:bg-white';
        div.innerHTML =
            '<div class="flex items-start justify-between gap-2">' +
                '<strong class="text-sm font-semibold text-slate-800">' + escapeHtml(tick.subject) + '</strong>' +
                '<span class="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ' +
                    (open ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700') + '">' +
                    (open ? t('ticketStatusOpen') : t('ticketStatusClosed')) +
                '</span>' +
            '</div>' +
            '<p class="mt-1 truncate text-[11px] text-slate-400">' + escapeHtml(tick.name) + ' · ' + escapeHtml(tick.email) + '</p>' +
            '<p class="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-500">' + escapeHtml(tick.message) + '</p>' +
            '<p class="mt-2 text-[10px] font-medium text-slate-400">' + formatDate(tick.createdAt) + '</p>';
        list.appendChild(div);
    });
}

/* === Admin panel render === */
const adminTicketList = document.getElementById('adminTicketList');
if (adminTicketList) {
    async function renderAdmin() {
        if (!isAdminLoggedIn()) {
            adminTicketList.innerHTML = '<tr><td colspan="5" style="text-align:center; padding: 20px;">Giriş yapın</td></tr>';
            return;
        }
        const tickets = await fetchTickets();
        tickets.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        adminTicketList.innerHTML = '';
        if (tickets.length === 0) {
            adminTicketList.innerHTML = '<tr><td colspan="5" class="empty">' + t('adminNoTickets') + '</td></tr>';
            return;
        }
        tickets.forEach(tick => {
            const tr = document.createElement('tr');
            const lastReply = (tick.replies && tick.replies.length) ? tick.replies[tick.replies.length - 1] : null;
            tr.innerHTML =
                '<td>' + tick.id + '</td>' +
                '<td>' + escapeHtml(tick.name) + '</td>' +
                '<td>' + escapeHtml(tick.subject) + '</td>' +
                '<td><span class="status-badge status-' + (tick.status === 'open' ? 'open' : 'closed') + '">' +
                (tick.status === 'open' ? t('ticketStatusOpen') : t('ticketStatusClosed')) + '</span></td>' +
                '<td>' +
                (lastReply ? '<div class="reply-box"><strong>' + escapeHtml(lastReply.author) + ':</strong> ' + escapeHtml(lastReply.text) + '</div>' : '') +
                '<textarea class="reply-input" id="reply-' + tick.id + '" placeholder="' + t('adminReply') + '..."></textarea>' +
                '<button class="btn btn-primary" data-id="' + tick.id + '" data-action="reply">' + t('adminReply') + '</button> ' +
                '<button class="btn btn-ghost" data-id="' + tick.id + '" data-action="' + (tick.status === 'open' ? 'close' : 'open') + '">' +
                (tick.status === 'open' ? t('adminClose') : t('adminOpen')) + '</button> ' +
                '<button class="btn btn-danger" data-id="' + tick.id + '" data-action="delete">' + t('adminDelete') + '</button>' +
                '</td>';
            adminTicketList.appendChild(tr);
        });

        adminTicketList.querySelectorAll('button[data-action]').forEach(btn => {
            btn.addEventListener('click', async function () {
                if (!isAdminLoggedIn()) { alert('Giriş yapın.'); return; }
                const id = Number(this.getAttribute('data-id'));
                const action = this.getAttribute('data-action');
                try {
                    if (action === 'reply') {
                        const ta = document.getElementById('reply-' + id);
                        const text = ta ? ta.value.trim() : '';
                        if (!text) { alert('Yanıt metni girin.'); return; }
                        await replyTicket(id, text);
                        ta.value = '';
                    } else if (action === 'close' || action === 'open') {
                        await setTicketStatus(id, action === 'close' ? 'closed' : 'open');
                    } else if (action === 'delete') {
                        if (!confirm(t('adminDeleteConfirm'))) return;
                        await deleteTicket(id);
                    }
                    renderAdmin();
                } catch (e) {
                    alert('İşlem başarısız oldu.');
                }
            });
        });
    }
    renderAdmin();
    document.getElementById('adminRefresh')?.addEventListener('click', renderAdmin);
}

/* === Başlangıç === */
document.addEventListener('DOMContentLoaded', async () => {
    applyTheme();
    applyLang();

    // FireEye oturumu varsa geri yükle
    await restoreFeSession();

    // Topbar butonları
    const loginBtn = document.getElementById('navLoginBtn');
    const registerBtn = document.getElementById('navRegisterBtn');
    const logoutBtn = document.getElementById('navLogoutBtn');
    const userChip = document.getElementById('navUserChip');
    const userName = document.getElementById('navUserName');
    const lockedLoginBtn = document.getElementById('lockedLoginBtn');
    const lockedRegisterBtn = document.getElementById('lockedRegisterBtn');

    function updateAuthUI() {
        const feLoggedIn = isFeLoggedIn();
        const adminLoggedIn = isAdminLoggedIn();
        const anyLoggedIn = feLoggedIn || adminLoggedIn;

        // Üst nav
        if (loginBtn) loginBtn.style.display = anyLoggedIn ? 'none' : 'inline-block';
        if (registerBtn) registerBtn.style.display = anyLoggedIn ? 'none' : 'inline-block';
        if (logoutBtn) logoutBtn.style.display = anyLoggedIn ? 'inline-block' : 'none';
        if (userChip) {
            if (feLoggedIn) {
                userChip.classList.remove('hidden');
                const u = getFeUser().user || {};
                if (userName) userName.textContent = u.fullName || u.email || 'Kullanıcı';
            } else {
                userChip.classList.add('hidden');
            }
        }

        // Ticket alanı: kilitli mi çalışma alanı mı?
        const locked = document.getElementById('ticketLocked');
        const workspace = document.getElementById('ticketWorkspace');
        if (locked && workspace) {
            if (feLoggedIn) {
                locked.classList.add('hidden');
                workspace.classList.remove('hidden');
                renderMyTickets();
            } else {
                locked.classList.remove('hidden');
                workspace.classList.add('hidden');
            }
        }
    }
    updateAuthUI();

    /* === Auth modalı (tüm FireEye auth sistemleri) === */
    const authModal = document.getElementById('authModal');

    // Sekme butonları
    const tabLogin = document.getElementById('tabLogin');
    const tabRegister = document.getElementById('tabRegister');
    const tabForgot = document.getElementById('tabForgot');
    const tabReset = document.getElementById('tabReset');
    const tabVerify = document.getElementById('tabVerify');

    // Formlar
    const loginForm = document.getElementById('tsLoginForm');
    const registerForm = document.getElementById('tsRegisterForm');
    const twoFaForm = document.getElementById('ts2faForm');
    const forgotForm = document.getElementById('tsForgotForm');
    const resetForm = document.getElementById('tsResetForm');
    const verifyForm = document.getElementById('tsVerifyForm');
    const profileEditForm = document.getElementById('tsProfileEditForm');

    // Adımlar (div/form)
    const steps = document.querySelectorAll('.auth-step');
    const authTitle = document.getElementById('authTitle');
    const authSub = document.getElementById('authSub');
    let twoFaChallenge = null;

    function hideAllSteps() {
        steps.forEach(s => s.classList.remove('active'));
        [tabLogin, tabRegister, tabForgot, tabReset, tabVerify].forEach(t => {
            if (t) {
                t.classList.remove('active');
                t.classList.remove('border-b-2', 'border-brand-600', 'text-brand-600');
                t.classList.add('text-slate-500');
            }
        });
    }

    function activateTab(btn) {
        [tabLogin, tabRegister, tabForgot, tabReset, tabVerify].forEach(t => {
            if (t) {
                t.classList.remove('active');
                t.classList.remove('border-b-2', 'border-brand-600', 'text-brand-600');
                t.classList.add('text-slate-500');
            }
        });
        if (btn) {
            btn.classList.add('active');
            btn.classList.remove('text-slate-500');
            btn.classList.add('text-brand-600', 'border-b-2', 'border-brand-600');
        }
    }

    function showLoginStep() {
        hideAllSteps();
        if (loginForm) loginForm.classList.add('active');
        if (authTitle) authTitle.textContent = t('authTitleLogin');
        if (authSub) authSub.textContent = t('authSubLogin');
        activateTab(tabLogin);
        clearAuthErrors();
    }

    function showRegisterStep() {
        hideAllSteps();
        if (registerForm) registerForm.classList.add('active');
        if (authTitle) authTitle.textContent = t('authTitleRegister');
        if (authSub) authSub.textContent = t('authSubRegister');
        activateTab(tabRegister);
        clearAuthErrors();
    }

    function showForgotStep() {
        hideAllSteps();
        if (forgotForm) forgotForm.classList.add('active');
        if (authTitle) authTitle.textContent = t('tabForgot');
        if (authSub) authSub.textContent = t('forgotHint');
        activateTab(tabForgot);
        clearAuthErrors();
    }

    function showResetStep() {
        hideAllSteps();
        if (resetForm) resetForm.classList.add('active');
        if (authTitle) authTitle.textContent = t('tabReset');
        if (authSub) authSub.textContent = t('resetHint');
        activateTab(tabReset);
        clearAuthErrors();
    }

    function showVerifyStep() {
        hideAllSteps();
        if (verifyForm) verifyForm.classList.add('active');
        if (authTitle) authTitle.textContent = t('tabVerify');
        if (authSub) authSub.textContent = t('verifyHint');
        activateTab(tabVerify);
        clearAuthErrors();
    }

    function show2faSettingsStep() {
        hideAllSteps();
        const el = document.getElementById('ts2faSettings');
        if (el) el.classList.add('active');
        if (authTitle) authTitle.textContent = t('twofaTitle');
        if (authSub) authSub.textContent = t('twofaDesc');
        load2faSettings();
        clearAuthErrors();
    }

    function showProfileStep() {
        hideAllSteps();
        const el = document.getElementById('tsProfile');
        if (el) el.classList.add('active');
        if (authTitle) authTitle.textContent = t('profileTitle');
        if (authSub) authSub.textContent = '';
        loadProfile();
        clearAuthErrors();
    }

    function showProfileEditStep() {
        hideAllSteps();
        const el = document.getElementById('tsProfileEditForm');
        if (el) el.classList.add('active');
        if (authTitle) authTitle.textContent = t('profileEdit');
        if (authSub) authSub.textContent = '';
        loadProfileEditFields();
        clearAuthErrors();
    }

    function clearAuthErrors() {
        ['tsLoginError','ts2faError','tsRegisterError','tsForgotError','tsResetError','tsVerifyError','ts2faSettingsError','ts2faSettingsSuccess','tsProfileError','tsProfileSuccess','tsProfileEditError'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.add('hidden');
        });
    }

    function showAuthError(id, msg) {
        const el = document.getElementById(id);
        if (el) { el.textContent = msg; el.classList.remove('hidden'); }
    }
    function showAuthSuccess(id, msg) {
        const el = document.getElementById(id);
        if (el) { el.textContent = msg; el.classList.remove('hidden'); }
    }
    function showAuthSuccess(id, msg) {
        const el = document.getElementById(id);
        if (el) { el.textContent = msg; el.classList.remove('hidden'); }
    }

    function showAuthModal() {
        if (authModal) authModal.classList.add('open');
        showLoginStep();
    }

    if (authModal) {
        document.getElementById('authCloseBtn')?.addEventListener('click', () => {
            authModal.classList.remove('open');
        });
        authModal.addEventListener('click', e => {
            if (e.target === authModal) authModal.classList.remove('open');
        });
    }

    // Sekme geçişleri
    tabLogin?.addEventListener('click', showLoginStep);
    tabRegister?.addEventListener('click', showRegisterStep);
    tabForgot?.addEventListener('click', showForgotStep);
    tabReset?.addEventListener('click', showResetStep);
    tabVerify?.addEventListener('click', showVerifyStep);

    // === OAuth butonları (Google, Microsoft, GitHub) ===

    // Google Sign-In callback
    window.handleGoogleCredential = async (idToken) => {
        try {
            const res = await fetch(WORKER_URL + '/api/support/auth/google', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ credential: idToken })
            });
            const data = await res.json();
            if (data.success) {
                setFeUser(data.token, data.user);
                authModal.classList.remove('open');
                updateAuthUI();
                showToast('Google ile giriş başarılı.');
            } else {
                showToast(data.message || 'Google girişi başarısız.');
            }
        } catch (e) {
            showToast('Google girişi sırasında hata oluştu.');
        }
    };

    // Microsoft OAuth popup
    async function openOAuthPopup(provider, authUrl) {
        const width = 500;
        const height = 600;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;
        const popup = window.open(authUrl, 'oauth_popup', `width=${width},height=${height},left=${left},top=${top}`);

        const pollInterval = setInterval(() => {
            if (popup.closed) {
                clearInterval(pollInterval);
                return;
            }
            try {
                const popupUrl = popup.location.href;
                if (popupUrl.includes(window.location.origin + '/oauth/callback')) {
                    clearInterval(pollInterval);
                    popup.close();
                    const urlParams = new URLSearchParams(new URL(popupUrl).search);
                    const code = urlParams.get('code');
                    const providerName = urlParams.get('provider') || provider;
                    const error = urlParams.get('error');
                    if (error) {
                        showToast('OAuth hatası: ' + decodeURIComponent(error));
                        return;
                    }
                    if (code) {
                        handleOAuthCallback(providerName, code);
                    }
                }
            } catch (e) {
                // Cross-origin access blocked
            }
        }, 500);

        setTimeout(() => {
            clearInterval(pollInterval);
            if (!popup.closed) popup.close();
        }, 300000);
    }

    async function handleOAuthCallback(provider, code) {
        try {
            const res = await fetch(WORKER_URL + '/api/support/auth/' + provider, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code })
            });
            const data = await res.json();
            if (data.success) {
                setFeUser(data.token, data.user);
                authModal.classList.remove('open');
                updateAuthUI();
                showToast(provider.charAt(0).toUpperCase() + provider.slice(1) + ' ile giriş başarılı.');
            } else {
                showToast(data.message || provider + ' girişi başarısız.');
            }
        } catch (e) {
            showToast(provider + ' girişi sırasında hata oluştu.');
        }
    }

    // Google ile giriş
    document.getElementById('btnGoogleLogin')?.addEventListener('click', () => {
        const googleClientId = OAUTH_CLIENTS.google;
        if (!googleClientId || googleClientId.indexOf('YOUR_') === 0) {
            showToast('Google girişi henüz yapılandırılmadı.');
            return;
        }
        google.accounts.id.initialize({
            client_id: googleClientId,
            callback: window.handleGoogleCredential
        });
        google.accounts.id.prompt();
    });

    // Microsoft ile giriş
    document.getElementById('btnMicrosoftLogin')?.addEventListener('click', () => {
        const microsoftClientId = OAUTH_CLIENTS.microsoft;
        if (!microsoftClientId || microsoftClientId.indexOf('YOUR_') === 0) {
            showToast('Microsoft girişi henüz yapılandırılmadı.');
            return;
        }
        const redirectUri = window.location.origin + '/oauth/callback?provider=microsoft';
        const scope = 'openid email profile';
        const authUrl = 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?' +
            'client_id=' + encodeURIComponent(microsoftClientId) +
            '&redirect_uri=' + encodeURIComponent(redirectUri) +
            '&response_type=code' +
            '&scope=' + encodeURIComponent(scope) +
            '&response_mode=query';
        openOAuthPopup('microsoft', authUrl);
    });

    // GitHub ile giriş
    document.getElementById('btnGitHubLogin')?.addEventListener('click', () => {
        const githubClientId = OAUTH_CLIENTS.github;
        if (!githubClientId || githubClientId.indexOf('YOUR_') === 0) {
            showToast('GitHub girişi henüz yapılandırılmadı.');
            return;
        }
        const redirectUri = window.location.origin + '/oauth/callback?provider=github';
        const scope = 'user:email';
        const authUrl = 'https://github.com/login/oauth/authorize?' +
            'client_id=' + encodeURIComponent(githubClientId) +
            '&redirect_uri=' + encodeURIComponent(redirectUri) +
            '&scope=' + encodeURIComponent(scope);
        openOAuthPopup('github', authUrl);
    });

    // Yapılandırılmamış OAuth butonlarını gizle
    const OAUTH_BUTTONS = { google: 'btnGoogleLogin', microsoft: 'btnMicrosoftLogin', github: 'btnGitHubLogin' };
    Object.keys(OAUTH_CLIENTS).forEach(provider => {
        const id = OAUTH_CLIENTS[provider];
        const btn = document.getElementById(OAUTH_BUTTONS[provider]);
        if (btn && (!id || id.indexOf('YOUR_') === 0)) {
            btn.classList.add('hidden');
            btn.setAttribute('data-not-configured', '1');
        }
    });

    // === 2FA GİRİŞ DOĞRULAMA ===

    // === 2FA GİRİŞ DOĞRULAMA ===
    twoFaForm?.addEventListener('submit', async e => {
        e.preventDefault();
        const err = document.getElementById('ts2faError');
        err.classList.add('hidden');
        const code = document.getElementById('ts2faCode').value.trim();
        if (!code) { err.textContent = '6 haneli kodu girin.'; err.classList.remove('hidden'); return; }
        try {
            await feLogin2fa(twoFaChallenge, code);
            twoFaChallenge = null;
            authModal.classList.remove('open');
            updateAuthUI();
            showToast('Doğrulama başarılı, giriş yapıldı.');
        } catch (errObj) {
            err.textContent = String(errObj && errObj.message) || 'Kod doğrulanamadı.';
            err.classList.remove('hidden');
        }
    });

    // === KAYIT ===
    registerForm?.addEventListener('submit', async e => {
        e.preventDefault();
        const err = document.getElementById('tsRegisterError');
        err.classList.add('hidden');
        const name = document.getElementById('tsRegisterName').value.trim();
        const email = document.getElementById('tsRegisterEmail').value.trim();
        const pass = document.getElementById('tsRegisterPass').value;
        if (!name || !email || !pass) { err.textContent = 'Tüm alanları doldurun.'; err.classList.remove('hidden'); return; }
        try {
            await feRegister(name, email, pass);
            authModal.classList.remove('open');
            updateAuthUI();
            showToast('Hesap oluşturuldu ve giriş yapıldı.');
        } catch (errObj) {
            err.textContent = String(errObj && errObj.message) || 'Kayıt başarısız.';
            err.classList.remove('hidden');
        }
    });

    // === ŞİFREMI UNUTTUM ===
    forgotForm?.addEventListener('submit', async e => {
        e.preventDefault();
        const err = document.getElementById('tsForgotError');
        err.classList.add('hidden');
        const email = document.getElementById('tsForgotEmail').value.trim();
        if (!email) { err.textContent = 'E-posta girin.'; err.classList.remove('hidden'); return; }
        try {
            await feForgotPassword(email);
            const errEl = document.getElementById('tsForgotError');
            errEl.textContent = 'Şifre sıfırlama bağlantısı gönderildi. E-postanıza bakın.';
            errEl.className = 'rounded-lg bg-emerald-50 px-3 py-2 text-xs text-emerald-600';
            errEl.classList.remove('hidden');
            forgotForm.reset();
        } catch (errObj) {
            err.textContent = String(errObj && errObj.message) || 'Gönderilemedi.';
            err.classList.remove('hidden');
        }
    });

    // === ŞİFRE SIFIRLA ===
    resetForm?.addEventListener('submit', async e => {
        e.preventDefault();
        const err = document.getElementById('tsResetError');
        err.classList.add('hidden');
        const token = document.getElementById('tsResetToken').value.trim();
        const pass = document.getElementById('tsResetPass').value;
        if (!token || !pass) { err.textContent = 'Token ve yeni şifre girin.'; err.classList.remove('hidden'); return; }
        try {
            await feResetPassword(token, pass);
            authModal.classList.remove('open');
            updateAuthUI();
            showToast('Şifre sıfırlandı. Yeni şifrenizle giriş yapabilirsiniz.');
        } catch (errObj) {
            err.textContent = String(errObj && errObj.message) || 'Şifre sıfırlanamadı.';
            err.classList.remove('hidden');
        }
    });

    // === EMAIL DOĞRULA ===
    verifyForm?.addEventListener('submit', async e => {
        e.preventDefault();
        const err = document.getElementById('tsVerifyError');
        err.classList.add('hidden');
        const token = document.getElementById('tsVerifyToken').value.trim();
        if (!token) { err.textContent = 'Doğrulama token\'ını girin.'; err.classList.remove('hidden'); return; }
        try {
            // Worker GET /verify-email?token=... ile çalışır; sayfayı yönlendirir.
            await feVerifyEmail(token);
        } catch (errObj) {
            err.textContent = String(errObj && errObj.message) || 'Doğrulanamadı.';
            err.classList.remove('hidden');
        }
    });

    document.getElementById('verifyResendBtn')?.addEventListener('click', async () => {
        const err = document.getElementById('tsVerifyError');
        err.classList.add('hidden');
        if (!isFeLoggedIn()) {
            err.textContent = 'Doğrulama e-postası için önce giriş yapın.';
            err.classList.remove('hidden');
            return;
        }
        try {
            await feResendVerification();
            showToast('Doğrulama kodu yeniden gönderildi.');
        } catch (errObj) {
            err.textContent = String(errObj && errObj.message) || 'Gönderilemedi.';
            err.classList.remove('hidden');
        }
    });

    // === 2FA AYARLARI ===
    async function load2faSettings() {
        const err = document.getElementById('ts2faSettingsError');
        const succ = document.getElementById('ts2faSettingsSuccess');
        const statusBadge = document.getElementById('ts2faStatusBadge');
        const actions = document.getElementById('ts2faSettingsActions');
        const dot = statusBadge?.querySelector('span');
        const label = statusBadge?.querySelector('span:last-child') || statusBadge;
        err.classList.add('hidden'); succ.classList.add('hidden');
        actions.innerHTML = '';
        try {
            const data = await feGet2faStatus();
            const enabled = data.enabled !== false;
            if (dot) dot.className = enabled ? 'h-1.5 w-1.5 rounded-full bg-emerald-500' : 'h-1.5 w-1.5 rounded-full bg-amber-400';
            label.textContent = enabled ? t('twofaStatusOn') : t('twofaStatusOff');
            if (enabled) {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'w-full rounded-xl bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-700';
                btn.textContent = t('twofaBtnDisable');
                btn.addEventListener('click', async () => {
                    try {
                        await feDisable2fa();
                        showAuthSuccess('ts2faSettingsSuccess', '2FA devre dışı bırakıldı.');
                        load2faSettings();
                    } catch (e) { showAuthError('ts2faSettingsError', String(e && e.message) || 'İşlem başarısız.'); }
                });
                actions.appendChild(btn);
            } else {
                const btnSetup = document.createElement('button');
                btnSetup.type = 'button';
                btnSetup.className = 'w-full rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700';
                btnSetup.textContent = t('twofaBtnSetup');
                btnSetup.addEventListener('click', async () => {
                    try {
                        await feSetup2fa();
                        showAuthSuccess('ts2faSettingsSuccess', 'Doğrulama kodu e-postanıza gönderildi. Kodu girin.');
                        const codeInput = document.createElement('input');
                        codeInput.type = 'text'; codeInput.inputmode = 'numeric'; codeInput.maxlength = '6';
                        codeInput.className = 'w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-center text-lg font-bold tracking-[0.4em] text-slate-800 outline-none transition focus:border-brand-600 focus:bg-white focus:ring-4 focus:ring-brand-600/10';
                        codeInput.placeholder = '000000';
                        actions.appendChild(codeInput);
                        const btnEnable = document.createElement('button');
                        btnEnable.type = 'button';
                        btnEnable.className = 'w-full rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 mt-2';
                        btnEnable.textContent = t('twofaBtnEnable');
                        btnEnable.addEventListener('click', async () => {
                            const code = codeInput.value.trim();
                            if (!code) { showAuthError('ts2faSettingsError', 'Kod girin.'); return; }
                            try {
                                await feEnable2fa(code);
                                showAuthSuccess('ts2faSettingsSuccess', '2FA etkinleştirildi.');
                                load2faSettings();
                            } catch (e) { showAuthError('ts2faSettingsError', String(e && e.message) || 'Başarısız.'); }
                        });
                        actions.appendChild(btnEnable);
                    } catch (e) { showAuthError('ts2faSettingsError', String(e && e.message) || 'Kurulum başarısız.'); }
                });
                actions.appendChild(btnSetup);
            }
        } catch (e) {
            showAuthError('ts2faSettingsError', String(e && e.message) || '2FA durumu alınamadı.');
        }
    }

    document.getElementById('twofaSettingsBackBtn')?.addEventListener('click', showProfileStep);

    // === PROFİL ===
    async function loadProfile() {
        const err = document.getElementById('tsProfileError');
        const emailEl = document.getElementById('tsProfileEmail');
        const nameEl = document.getElementById('tsProfileFullName');
        err.classList.add('hidden');
        try {
            const user = await feGetProfile();
            if (emailEl) emailEl.textContent = user.email || '—';
            if (nameEl) nameEl.textContent = user.fullName || '—';
        } catch (e) {
            err.textContent = String(e && e.message) || t('meFail');
            err.classList.remove('hidden');
        }
    }

    async function loadProfileEditFields() {
        const emailEl = document.getElementById('tsEditEmail');
        try {
            const user = await feGetProfile();
            if (emailEl) emailEl.value = user.email || '';
        } catch (e) { /* ignore */ }
    }

    document.getElementById('profileEditBtn')?.addEventListener('click', showProfileEditStep);
    document.getElementById('profileBackBtn')?.addEventListener('click', () => { showProfileStep(); loadProfile(); });
    document.getElementById('profileEditBackBtn')?.addEventListener('click', showProfileStep);

    profileEditForm?.addEventListener('submit', async e => {
        e.preventDefault();
        const err = document.getElementById('tsProfileEditError');
        const succ = document.getElementById('tsProfileSuccess');
        err.classList.add('hidden'); succ.classList.add('hidden');
        const newEmail = document.getElementById('tsEditEmail').value.trim();
        const curPass = document.getElementById('tsEditCurrentPass').value;
        const newPass = document.getElementById('tsEditNewPass').value;
        if (!newEmail || !curPass || !newPass) {
            err.textContent = 'E-posta, mevcut şifre ve yeni şifre gerekli.';
            err.classList.remove('hidden');
            return;
        }
        try {
            await feUpdateCredentials(newEmail, curPass, newPass);
            showAuthSuccess('tsProfileSuccess', 'Hesap bilgileri güncellendi. Yeni şifrenizle giriş yapın.');
            // Oturumu yeni e-posta ile tazele
            const stored = getFeUser();
            stored.user = Object.assign({}, stored.user, { email: newEmail });
            localStorage[FE_USER_KEY] = JSON.stringify(stored);
            loadProfile();
            loadProfileEditFields();
        } catch (errObj) {
            err.textContent = String(errObj && errObj.message) || 'Güncellenemedi.';
            err.classList.remove('hidden');
        }
    });

    // Nav butonları
    if (loginBtn) loginBtn.addEventListener('click', showAuthModal);
    if (registerBtn) registerBtn.addEventListener('click', () => { showAuthModal(); showRegisterStep(); });
    if (logoutBtn) logoutBtn.addEventListener('click', () => {
        clearFeUser();
        adminLogout();
        updateAuthUI();
        showToast(t('logoutOk'));
    });
    if (lockedLoginBtn) lockedLoginBtn.addEventListener('click', showAuthModal);
    if (lockedRegisterBtn) lockedRegisterBtn.addEventListener('click', () => { showAuthModal(); showRegisterStep(); });
    document.getElementById('showRegisterBtn')?.addEventListener('click', () => showRegisterStep());
    document.getElementById('showLoginBtn')?.addEventListener('click', () => showLoginStep());
    document.getElementById('showForgotBtn')?.addEventListener('click', () => showForgotStep());
    document.getElementById('forgotBackBtn')?.addEventListener('click', () => showLoginStep());
    document.getElementById('resetBackBtn')?.addEventListener('click', () => showLoginStep());
    document.getElementById('verifyBackBtn')?.addEventListener('click', () => showLoginStep());

    /* === Ticket işlemleri === */
    async function renderMyTickets() {
        const list = document.getElementById('ticketList');
        if (!list) return;
        const u = getFeUser().user || {};
        const nameEl = document.getElementById('ticketIdentityName');
        const emailEl = document.getElementById('ticketIdentityEmail');
        if (nameEl) nameEl.textContent = u.fullName || u.email || '—';
        if (emailEl) emailEl.textContent = u.email || '';

        const tickets = await fetchMyTickets();
        tickets.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        list.innerHTML = '';
        if (tickets.length === 0) {
            list.innerHTML = '<div class="rounded-xl border border-dashed border-slate-200 bg-slate-50/60 px-4 py-8 text-center text-xs text-slate-400">' + t('noTickets') + '</div>';
            return;
        }
        tickets.forEach(tick => {
            const open = tick.status === 'open';
            const div = document.createElement('div');
            div.className = 'rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-3 transition hover:border-brand-200 hover:bg-white';
            div.innerHTML =
                '<div class="flex items-start justify-between gap-2">' +
                    '<strong class="text-sm font-semibold text-slate-800">' + escapeHtml(tick.subject) + '</strong>' +
                    '<span class="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ' +
                        (open ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700') + '">' +
                        (open ? t('ticketStatusOpen') : t('ticketStatusClosed')) +
                    '</span>' +
                '</div>' +
                '<p class="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-500">' + escapeHtml(tick.message) + '</p>' +
                '<p class="mt-2 text-[10px] font-medium text-slate-400">' + formatDate(tick.createdAt) + '</p>';
            list.appendChild(div);
        });
    }

    const ticketForm = document.getElementById('ticketForm');
    if (ticketForm) {
        ticketForm.addEventListener('submit', async e => {
            e.preventDefault();
            if (!isFeLoggedIn()) { showAuthModal(); return; }
            const btn = ticketForm.querySelector('button[type="submit"]');
            const orig = btn.textContent;
            btn.textContent = t('sendTicket') + '...';
            btn.disabled = true;
            try {
                const subject = document.getElementById('ticketSubject').value.trim();
                const message = document.getElementById('ticketMessage').value.trim();
                if (!subject || !message) { showToast('Konu ve mesaj girin.', 'error'); return; }
                await createMyTicket(subject, message);
                ticketForm.reset();
                renderMyTickets();
                showToast(t('ticketSuccess'));
            } catch (err) {
                showToast(t('ticketError'), 'error');
            } finally {
                btn.textContent = orig;
                btn.disabled = false;
            }
        });
    }

    // Dil değiştirme
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            lang = lang === 'tr' ? 'en' : 'tr';
            localStorage['ts-lang'] = lang;
            applyLang();
            updateAuthUI();
            renderMyTickets();
        });
    }

    // Canlı destek kartındaki buton sohbeti açar
    const openChatBtn = document.getElementById('openChatBtn');
    if (openChatBtn) openChatBtn.addEventListener('click', () => {
        if (!aiChatPanel.classList.contains('open')) toggleAIChat();
        else aiChatInput && aiChatInput.focus();
    });

    // AI butonları ve panel olayları
    if (aiBubbleBtn) aiBubbleBtn.addEventListener('click', toggleAIChat);
    if (aiCloseBtn) aiCloseBtn.addEventListener('click', closeAIChat);
    if (aiChatSend) aiChatSend.addEventListener('click', handleAIChatSend);
    if (aiChatInput) aiChatInput.addEventListener('keypress', e => { if (e.key === 'Enter') handleAIChatSend(); });
    if (aiSettingsBtn2) {
        aiSettingsBtn2.addEventListener('click', () => {
            showToast('AI ayarları sunucu tarafında yönetilir.');
        });
    }

    // Chat hoş geldin mesajı
    if (aiChatMessages && aiChatMessages.children.length === 0) {
        addAIChatMessage(t('welcomeMsg'), 'ai');
    }
});
