export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    // Build target API (replace with your real endpoint)
    const target = "https://masak-apa.tomorisakura.vercel.app" + url.pathname + url.search;

    const res = await fetch(target, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    // Clone response headers
    const newHeaders = new Headers(res.headers);
    newHeaders.set("Access-Control-Allow-Origin", "*");
    newHeaders.set("Access-Control-Allow-Headers", "*");
    newHeaders.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");

    return new Response(res.body, {
      status: res.status,
      headers: newHeaders,
    });
  },
};
