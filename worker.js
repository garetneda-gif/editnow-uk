// Cloudflare Worker: 香屯文化导游 LLM API 代理
export default {
  async fetch(request, env) {
    // CORS 预检
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    const url = new URL(request.url);

    // 调试端点：检查环境变量是否正确配置
    if (url.pathname === '/debug') {
      return jsonResponse({
        hasApiKey: !!env.LLM_API_KEY,
        hasApiUrl: !!env.LLM_API_URL,
      });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    if (url.pathname !== '/api/chat') {
      return new Response('Not found', { status: 404 });
    }

    try {
      const body = await request.json();
      const messages = body.messages || [];

      if (messages.length > 20) {
        return jsonResponse({ error: 'Too many messages' }, 400);
      }

      const apiUrl = env.LLM_API_URL || 'https://api.deepseek.com/v1/chat/completions';
      const apiKey = env.LLM_API_KEY;

      if (!apiKey) {
        return jsonResponse({ error: 'API key not configured' }, 500);
      }

      const resp = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: env.LLM_MODEL || 'deepseek-chat',
          messages: messages,
          max_tokens: 500,
          temperature: 0.7,
        }),
      });

      const text = await resp.text();

      if (!resp.ok) {
        console.error('[Worker] LLM API error:', resp.status, text);
        return jsonResponse({ error: 'LLM API error', status: resp.status }, 502);
      }

      return new Response(text, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    } catch (err) {
      console.error('[Worker] Unexpected error:', err);
      return jsonResponse({ error: 'Internal error' }, 500);
    }
  },
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
