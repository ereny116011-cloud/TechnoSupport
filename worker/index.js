// TechnoSupport — Cloudflare Worker (Kilo Gateway + Nemotron AI Proxy)
// UTF-8, BOM yok, LF

function json(data, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
        }
    });
}

function corsPreflight() {
    return new Response(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Max-Age': '86400'
        }
    });
}

// Bellek içi ticket deposu (demo; üretimde D1 veya Wasmer volume)
const tickets = [];

// Admin kimlik doğrulaması (Worker secret'ından gelir, frontend'de yok)
function isAdmin(request, env) {
    const authHeader = request.headers.get('Authorization') || '';
    if (!authHeader.startsWith('Basic ')) return false;
    try {
        const encoded = authHeader.substring(6);
        const decoded = atob(encoded);
        const colonIndex = decoded.indexOf(':');
        if (colonIndex === -1) return false;
        const username = decoded.substring(0, colonIndex);
        const password = decoded.substring(colonIndex + 1);
        const adminUser = (env.ADMIN_USER || 'TechnoStudios11').trim();
        const adminPass = (env.ADMIN_PASS || 'giradmine').trim();
        return username === adminUser && password === adminPass;
    } catch (e) {
        return false;
    }
}

export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        const path = url.pathname;

        if (request.method === 'OPTIONS') return corsPreflight();

        // Health
        if (path === '/api/health' && request.method === 'GET') {
            return json({ ok: true, service: 'technosupport-api' });
        }

        // ---- Admin kimlik doğrulama ----
        if (path === '/api/auth/login' && request.method === 'POST') {
            let body;
            try {
                body = await request.json();
            } catch (e) {
                return json({ error: 'Geçersiz JSON.' }, 400);
            }
            const username = String(body.username || '').trim();
            const password = String(body.password || '').trim();
            const adminUser = (env.ADMIN_USER || 'TechnoStudios11').trim();
            const adminPass = (env.ADMIN_PASS || 'giradmine').trim();
            if (username === adminUser && password === adminPass) {
                return json({ ok: true, token: 'basic-' + btoa(username + ':' + password) });
            }
            return json({ error: 'Kullanıcı adı veya şifre hatalı.' }, 401);
        }

        if (path === '/api/auth/register' && request.method === 'POST') {
            return json({ error: 'Yeni kayıt şu anda devre dışı. Lütfen giriş yapın.' }, 403);
        }

        if (path === '/api/auth/me' && request.method === 'GET') {
            if (isAdmin(request, env)) {
                return json({ authenticated: true, user: 'admin' });
            }
            return json({ authenticated: false }, 401);
        }

        // ---- Gerçek AI Sohbet Proxy'si (Kilo Gateway + Nemotron) ----
        if (path === '/api/ai/chat' && request.method === 'POST') {
            const kiloApiKey = env.KILO_API;
            const kiloBase = (env.KILO_API_BASE || 'https://ai-gateway.kilo.ai/api/v1').replace(/\/+$/, '');
            const model = env.KILO_MODEL || 'nvidia/nemotron-3.5-super-vl:free';

            if (!kiloApiKey) {
                return json({ error: 'KILO_API secret\'ı Worker\'da tanımlı değil.' }, 500);
            }

            let body;
            try {
                body = await request.json();
            } catch (e) {
                return json({ error: 'Geçersiz JSON gövde.' }, 400);
            }

            const userText = body.message || '';
            const userLang = body.lang || 'tr';
            const frontendSystemPrompt = body.systemPrompt || '';
            if (!userText) return json({ error: 'message gerekli.' }, 400);

            const systemPrompt = frontendSystemPrompt || (userLang === 'en'
                ? 'You are a helpful, polite, and concise customer support assistant for TechnoSupport. Answer in English.'
                : 'Sen TechnoSupport için yardımsever, nezaketli ve öz bir müşteri destek asistanısın. Cevaplarını Türkçe ver, gereksiz uzun açıklamalardan kaçın.');

            try {
                const res = await fetch(`${kiloBase}/chat/completions`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + kiloApiKey
                    },
                    body: JSON.stringify({
                        model,
                        messages: [
                            { role: 'system', content: systemPrompt },
                            { role: 'user', content: userText }
                        ],
                        temperature: 0.7,
                        max_tokens: 800
                    })
                });

                const data = await res.json();
                if (!res.ok) {
                    return json({ error: 'Kilo Gateway hatası: ' + (data.error && data.error.message ? data.error.message : res.status) }, 502);
                }

                const answer = data.choices && data.choices[0] && data.choices[0].message
                    ? data.choices[0].message.content
                    : 'Üzgünüm, bir yanıt alınamadı.';
                return json({ answer, model, provider: 'kilo' });
            } catch (e) {
                console.error('Kilo proxy error', e);
                return json({ error: 'Kilo proxy hatası: ' + String(e && e.message) }, 502);
            }
        }

        // Ticket listesi (herkese açık)
        if (path === '/api/tickets' && request.method === 'GET') {
            return json({ tickets });
        }

        // Yeni ticket (herkese açık)
        if (path === '/api/tickets' && request.method === 'POST') {
            let body;
            try {
                body = await request.json();
            } catch (e) {
                return json({ error: 'Geçersiz JSON.' }, 400);
            }
            const ticket = {
                id: Date.now(),
                name: String(body.name || '').trim(),
                email: String(body.email || '').trim(),
                subject: String(body.subject || '').trim(),
                message: String(body.message || '').trim(),
                status: 'open',
                createdAt: new Date().toISOString(),
                replies: []
            };
            if (!ticket.name || !ticket.email || !ticket.subject || !ticket.message) {
                return json({ error: 'name, email, subject ve message gerekli.' }, 400);
            }
            tickets.push(ticket);
            return json({ status: 'ok', ticket });
        }

        // Ticket yanıtla / durum değiştir (sadece admin)
        if (path.startsWith('/api/tickets/') && (request.method === 'PATCH' || request.method === 'POST')) {
            if (!isAdmin(request, env)) return json({ error: 'Yetkisiz.' }, 401);
            const idMatch = path.match(/^\/api\/tickets\/(\d+)$/);
            if (!idMatch) return json({ error: 'Geçersiz ticket ID.' }, 400);
            const ticketId = parseInt(idMatch[1], 10);
            let body;
            try {
                body = await request.json();
            } catch (e) {
                return json({ error: 'Geçersiz JSON.' }, 400);
            }
            const idx = tickets.findIndex(t => t.id === ticketId);
            if (idx === -1) return json({ error: 'Ticket bulunamadı.' }, 404);
            if (body.reply) {
                tickets[idx].replies = tickets[idx].replies || [];
                tickets[idx].replies.push({
                    text: String(body.reply).trim(),
                    author: 'Admin',
                    createdAt: new Date().toISOString()
                });
            }
            if (body.status) {
                tickets[idx].status = body.status;
            }
            return json({ status: 'ok', ticket: tickets[idx] });
        }

        return json({ error: 'Bulunamadı.' }, 404);
    }
};
