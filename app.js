// TechnoSupport — Uygulama mantığı
// UTF-8, BOM yok, CRLF

/* === i18n === */
const FE_I18N = {
    tr: {
        siteTitle: 'TechnoSupport',
        brand: 'Techno<span>Support</span>',
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
        adminUser: 'Kullanıcı Adı',
        adminPass: 'Şifre',
        adminLoginBtn: 'Giriş Yap',
        adminLogout: 'Çıkış',
        adminTitle: 'Destek Talepleri — Yönetim Paneli',
        adminRefresh: 'Yenile',
        adminReply: 'Yanıtla',
        adminClose: 'Kapat',
        adminOpen: 'Aç',
        adminNoTickets: 'Henüz destek talebi yok.',
        from: 'Müşteri',
        admin: 'Yetkili',
        themeDark: 'Karanlık Tema',
        themeLight: 'Açık Tema',
        settings: 'Ayarlar',
        close: 'Kapat',
        welcomeMsg: 'Merhaba! TechnoSupport\'a hoş geldiniz. Size nasıl yardımcı olabilirim?',
        unknown: 'Üzgünüm, bir yanıt alınamadı. Lütfen tekrar deneyin.'
    },
    en: {
        siteTitle: 'TechnoSupport',
        brand: 'Techno<span>Support</span>',
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
        adminUser: 'Username',
        adminPass: 'Password',
        adminLoginBtn: 'Login',
        adminLogout: 'Logout',
        adminTitle: 'Support Tickets — Management Panel',
        adminRefresh: 'Refresh',
        adminReply: 'Reply',
        adminClose: 'Close',
        adminOpen: 'Open',
        adminNoTickets: 'No support tickets yet.',
        from: 'Customer',
        admin: 'Agent',
        themeDark: 'Dark Theme',
        themeLight: 'Light Theme',
        settings: 'Settings',
        close: 'Close',
        welcomeMsg: 'Hello! Welcome to TechnoSupport. How can I help you today?',
        unknown: "Sorry, I couldn't get a response. Please try again."
    }
};

let lang = localStorage['ts-lang'] || 'tr';
let theme = localStorage['ts-theme'] || 'dark';
let WORKER_URL = 'https://technosupport-api.ereny116011.workers.dev';

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
        const res = await fetch(WORKER_URL + '/api/auth/login', {
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

/* === Ticket işlemleri (Worker API üzerinden) === */
async function fetchTickets() {
    try {
        const res = await fetch(WORKER_URL + '/api/tickets');
        if (!res.ok) return [];
        const data = await res.json();
        return data.tickets || [];
    } catch (e) {
        console.error('Fetch tickets error', e);
        return [];
    }
}

async function createTicket(ticket) {
    try {
        const res = await fetch(WORKER_URL + '/api/tickets', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ticket)
        });
        if (!res.ok) throw new Error('Ticket oluşturulamadı');
        return await res.json();
    } catch (e) {
        throw e;
    }
}

async function replyTicket(id, replyText) {
    try {
        const res = await fetch(WORKER_URL + '/api/tickets/' + id, {
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
        const res = await fetch(WORKER_URL + '/api/tickets/' + id, {
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
    const div = document.createElement('div');
    div.className = 'ai-msg ' + type;
    div.innerHTML = escapeHtml(text) + (meta ? '<span class="meta">' + escapeHtml(meta) + '</span>' : '');
    aiChatMessages.appendChild(div);
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
        const res = await fetch(WORKER_URL + '/api/ai/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: text, lang: lang })
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

/* === Ticket form (index.html) === */
const ticketForm = document.getElementById('ticketForm');
if (ticketForm) {
    ticketForm.addEventListener('submit', async e => {
        e.preventDefault();
        const btn = ticketForm.querySelector('button[type="submit"]');
        const orig = btn.textContent;
        btn.textContent = t('sendTicket') + '...';
        btn.disabled = true;
        try {
            const name = document.getElementById('ticketName').value.trim();
            const email = document.getElementById('ticketEmail').value.trim();
            const subject = document.getElementById('ticketSubject').value.trim();
            const message = document.getElementById('ticketMessage').value.trim();
            if (!name || !email || !subject || !message) {
                alert(t('ticketError'));
                return;
            }
            await createTicket({ name: escapeHtml(name), email: escapeHtml(email), subject: escapeHtml(subject), message: escapeHtml(message) });
            ticketForm.reset();
            renderTicketList();
            alert(t('ticketSuccess'));
        } catch (e) {
            alert(t('ticketError'));
        } finally {
            btn.textContent = orig;
            btn.disabled = false;
        }
    });
}

/* === Ticket listesi (index.html & admin.html) === */
async function renderTicketList() {
    const list = document.getElementById('ticketList');
    if (!list) return;
    const tickets = await fetchTickets();
    tickets.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    list.innerHTML = '';
    if (tickets.length === 0) {
        list.innerHTML = '<div class="empty">' + t('noTickets') + '</div>';
        return;
    }
    tickets.forEach(tick => {
        const div = document.createElement('div');
        div.className = 'ticket-item';
        div.innerHTML =
            '<strong>' + escapeHtml(tick.subject) + '</strong><br>' +
            '<span class="meta">' + escapeHtml(tick.name) + ' · ' + escapeHtml(tick.email) + ' · ' + formatDate(tick.createdAt) + '</span><br>' +
            '<span class="status-badge status-' + (tick.status === 'open' ? 'open' : 'closed') + '">' +
            (tick.status === 'open' ? t('ticketStatusOpen') : t('ticketStatusClosed')) +
            '</span>';
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
                (tick.status === 'open' ? t('adminClose') : t('adminOpen')) + '</button>' +
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
document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    applyLang();
    renderTicketList();

    // Topbar butonları
    const loginBtn = document.getElementById('navLoginBtn');
    const registerBtn = document.getElementById('navRegisterBtn');
    const logoutBtn = document.getElementById('navLogoutBtn');

    function updateAuthButtons() {
        const loggedIn = isAdminLoggedIn();
        if (loginBtn) loginBtn.style.display = loggedIn ? 'none' : 'inline-block';
        if (registerBtn) registerBtn.style.display = loggedIn ? 'none' : 'inline-block';
        if (logoutBtn) logoutBtn.style.display = loggedIn ? 'inline-block' : 'none';
    }
    updateAuthButtons();

    // Login modal (dinamik oluştur)
    function openLoginModal() {
        let modal = document.getElementById('loginModal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'loginModal';
            modal.className = 'modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <h3 data-i18n="adminLogin">Admin Girişi</h3>
                    <label data-i18n="adminUser">Kullanıcı Adı</label>
                    <input type="text" id="loginUser" required>
                    <label data-i18n="adminPass">Şifre</label>
                    <input type="password" id="loginPass" required>
                    <div class="modal-actions">
                        <button id="loginCancel" class="btn btn-ghost" data-i18n="close">Kapat</button>
                        <button id="loginSubmit" class="btn btn-primary" data-i18n="adminLoginBtn">Giriş Yap</button>
                    </div>
                </div>`;
            document.body.appendChild(modal);
            applyLang();
        }
        modal.classList.add('open');
        document.getElementById('loginSubmit')?.addEventListener('click', async () => {
            const user = document.getElementById('loginUser').value.trim();
            const pass = document.getElementById('loginPass').value.trim();
            if (!user || !pass) { alert('Kullanıcı adı ve şifre girin.'); return; }
            const ok = await adminLogin(user, pass);
            if (ok) {
                modal.classList.remove('open');
                updateAuthButtons();
                if (typeof renderAdmin === 'function') renderAdmin();
            } else {
                alert('Kullanıcı adı veya şifre hatalı.');
            }
        });
        document.getElementById('loginCancel')?.addEventListener('click', () => {
            modal.classList.remove('open');
        });
    }

    if (loginBtn) loginBtn.addEventListener('click', openLoginModal);
    if (registerBtn) registerBtn.addEventListener('click', () => {
        alert('Yeni kayıt şu anda devre dışı.');
    });
    if (logoutBtn) logoutBtn.addEventListener('click', () => {
        adminLogout();
        updateAuthButtons();
        if (typeof renderAdmin === 'function') renderAdmin();
    });

    // AI butonları ve panel olayları
    if (aiBubbleBtn) aiBubbleBtn.addEventListener('click', toggleAIChat);
    if (aiCloseBtn) aiCloseBtn.addEventListener('click', closeAIChat);
    if (aiChatSend) aiChatSend.addEventListener('click', handleAIChatSend);
    if (aiChatInput) aiChatInput.addEventListener('keypress', e => { if (e.key === 'Enter') handleAIChatSend(); });
    if (aiSettingsBtn2) {
        aiSettingsBtn2.addEventListener('click', () => {
            alert('AI ayarları sunucu tarafında yönetilir.');
        });
    }

    // Chat hoş geldin mesajı
    if (aiChatMessages && aiChatMessages.children.length === 0) {
        addAIChatMessage(t('welcomeMsg'), 'ai');
    }
});
