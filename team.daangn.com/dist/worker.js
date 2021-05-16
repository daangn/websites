// ../node_modules/regexparam/dist/regexparam.mjs
function regexparam_default(str, loose) {
  if (str instanceof RegExp)
    return {keys: false, pattern: str};
  var c3, o2, tmp, ext, keys = [], pattern = "", arr = str.split("/");
  arr[0] || arr.shift();
  while (tmp = arr.shift()) {
    c3 = tmp[0];
    if (c3 === "*") {
      keys.push("wild");
      pattern += "/(.*)";
    } else if (c3 === ":") {
      o2 = tmp.indexOf("?", 1);
      ext = tmp.indexOf(".", 1);
      keys.push(tmp.substring(1, !!~o2 ? o2 : !!~ext ? ext : tmp.length));
      pattern += !!~o2 && !~ext ? "(?:/([^/]+?))?" : "/([^/]+?)";
      if (!!~ext)
        pattern += (!!~o2 ? "?" : "") + "\\" + tmp.substring(ext);
    } else {
      pattern += "/" + tmp;
    }
  }
  return {
    keys,
    pattern: new RegExp("^" + pattern + (loose ? "(?=$|/)" : "/?$"), "i")
  };
}

// ../node_modules/worktop/request/index.mjs
function n(e) {
  let r, o2, a3, t = {};
  for ([r, o2] of e)
    t[r] = (a3 = t[r]) !== void 0 ? [].concat(a3, o2) : o2;
  return t;
}
async function i(e, r) {
  if (!(!e.body || !r))
    return ~r.indexOf("application/json") ? e.json() : ~r.indexOf("multipart/form-data") || ~r.indexOf("application/x-www-form-urlencoded") ? e.formData().then(n) : ~r.indexOf("text/") ? e.text() : e.arrayBuffer();
}
function f(e) {
  let {request: r, waitUntil: o2} = e, a3 = new URL(r.url), t = this;
  return t.url = r.url, t.method = r.method, t.headers = r.headers, t.extend = o2, t.cf = r.cf, t.params = {}, t.path = a3.pathname, t.hostname = a3.hostname, t.origin = a3.origin, t.query = a3.searchParams, t.search = a3.search, t.body = i.bind(0, r, t.headers.get("content-type")), t.body.blob = r.blob.bind(r), t.body.text = r.text.bind(r), t.body.arrayBuffer = r.arrayBuffer.bind(r), t.body.formData = r.formData.bind(r), t.body.json = r.json.bind(r), t;
}

// ../node_modules/worktop/utils/index.mjs
var o = /* @__PURE__ */ new TextEncoder();
function h(e) {
  return e ? o.encode(e).byteLength : 0;
}

// ../node_modules/worktop/response/index.mjs
var s = "content-type";
var i2 = "content-length";
function h2(u2) {
  var e = this, r = e.headers = new Headers({
    "Cache-Control": "private, no-cache"
  });
  return e.body = "", e.finished = false, e.status = e.statusCode = 200, e.getHeaders = () => Object.fromEntries(r), e.getHeaderNames = () => [...r.keys()], e.hasHeader = r.has.bind(r), e.getHeader = r.get.bind(r), e.removeHeader = r.delete.bind(r), e.setHeader = r.set.bind(r), Object.defineProperty(e, "status", {
    set: (n2) => {
      e.statusCode = n2;
    },
    get: () => e.statusCode
  }), e.end = (n2) => {
    e.finished || (e.finished = true, e.body = n2);
  }, e.writeHead = (n2, t) => {
    e.statusCode = n2;
    for (let d in t)
      r.set(d, t[d]);
  }, e.send = (n2, t, d) => {
    let a3 = typeof t, o2 = {};
    for (let p2 in d)
      o2[p2.toLowerCase()] = d[p2];
    let f3 = o2[i2] || e.getHeader(i2), l3 = o2[s] || e.getHeader(s);
    t == null ? t = "" : a3 === "object" ? (t = JSON.stringify(t), l3 = l3 || "application/json;charset=utf-8") : a3 !== "string" && (t = String(t)), o2[s] = l3 || "text/plain", o2[i2] = f3 || String(t.byteLength || h(t)), n2 === 204 || n2 === 205 || n2 === 304 ? (e.removeHeader(i2), e.removeHeader(s), delete o2[i2], delete o2[s], t = null) : u2 === "HEAD" && (t = null), e.writeHead(n2, o2), e.end(t);
  }, e;
}

// ../node_modules/worktop/router/index.mjs
var f2 = {
  "400": "Bad Request",
  "401": "Unauthorized",
  "403": "Forbidden",
  "404": "Not Found",
  "405": "Method Not Allowed",
  "406": "Not Acceptable",
  "409": "Conflict",
  "410": "Gone",
  "411": "Length Required",
  "413": "Payload Too Large",
  "422": "Unprocessable Entity",
  "426": "Upgrade Required",
  "428": "Precondition Required",
  "429": "Too Many Requests",
  "500": "Internal Server Error",
  "501": "Not Implemented",
  "502": "Bad Gateway",
  "503": "Service Unavailable",
  "504": "Gateway Timeout"
};
var l = false;
async function c(t, s3, o2, n2, ...r) {
  let e = await t(o2, n2, ...r);
  if (e instanceof Response)
    return e;
  if (s3 || n2.finished)
    return new Response(n2.body, n2);
}
function E() {
  let t, s3 = {};
  return t = {
    add(o2, n2, r) {
      let e = s3[o2];
      if (e === void 0 && (e = s3[o2] = {
        __d: new Map(),
        __s: {}
      }), n2 instanceof RegExp)
        e.__d.set(n2, {keys: [], handler: r});
      else if (/[:|*]/.test(n2)) {
        let {keys: a3, pattern: i4} = regexparam_default(n2);
        e.__d.set(i4, {keys: a3, handler: r});
      } else
        e.__s[n2] = {keys: [], handler: r};
    },
    find(o2, n2) {
      let r = {}, e, a3, i4, d, p2;
      if (a3 = s3[o2]) {
        if (e = a3.__s[n2])
          return {params: r, handler: e.handler};
        for ([i4, d] of a3.__d)
          if (p2 = i4.exec(n2), p2 !== null) {
            if (p2.groups !== void 0)
              for (e in p2.groups)
                r[e] = p2.groups[e];
            else if (d.keys.length > 0)
              for (e = 0; e < d.keys.length; )
                r[d.keys[e++]] = p2[e];
            return {params: r, handler: d.handler};
          }
      }
    },
    onerror(o2, n2, r, e) {
      let a3 = f2[r = r || 500], i4 = e && e.message || a3 || String(r);
      return new Response(i4, {status: r, statusText: a3});
    },
    async run(o2) {
      let n2, r = new f(o2), e = new h2(r.method);
      if (l = !!t.prepare) {
        if (n2 = await c(t.prepare, false, r, e), n2)
          return n2;
        l = false;
      }
      return n2 = t.find(r.method, r.path), n2 ? (r.params = n2.params, c(n2.handler, true, r, e).catch((a3) => c(t.onerror, true, r, e, 500, a3))) : c(t.onerror, true, r, e, 404);
    }
  };
}

// ../node_modules/worktop/cache/index.mjs
var s2 = caches.default;
async function a(t, e) {
  let n2 = e || t.request, o2 = typeof n2 != "string" && n2.method === "HEAD";
  o2 && (n2 = new Request(n2, {method: "GET"}));
  let r = await s2.match(n2);
  return o2 && r && (r = new Response(null, r)), r;
}
function c2(t, e, n2) {
  let o2 = n2 || t.request;
  return (typeof o2 == "string" || o2.method === "GET") && i3(e) && (e.headers.has("Set-Cookie") && (e = new Response(e.body, e), e.headers.append("Cache-Control", "private=Set-Cookie")), t.waitUntil(s2.put(o2, e.clone()))), e;
}
function i3(t) {
  if (t.status === 206 || ~(t.headers.get("Vary") || "").indexOf("*"))
    return false;
  let n2 = t.headers.get("Cache-Control") || "";
  return !/(private|no-cache|no-store)/i.test(n2);
}
function p(t) {
  return (e) => e.respondWith(a(e).then((n2) => n2 || t(e).then((o2) => c2(e, o2))));
}
function u(t) {
  addEventListener("fetch", p(t));
}

// ../node_modules/worktop/cors/index.mjs
var a2 = {
  origin: "*",
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  headers: [],
  expose: []
};
function l2(o2, t, s3) {
  let e = t ? {...a2, ...t} : a2;
  o2.setHeader("Access-Control-Allow-Origin", e.origin), e.origin !== "*" && o2.headers.append("Vary", "Origin"), e.credentials && o2.setHeader("Access-Control-Allow-Credentials", "true"), e.expose.length && o2.setHeader("Access-Control-Expose-Headers", e.expose), s3 && (e.maxage != null && o2.setHeader("Access-Control-Max-Age", e.maxage), e.methods.length && o2.setHeader("Access-Control-Allow-Methods", e.methods), e.headers.length && o2.setHeader("Access-Control-Allow-Headers", e.headers));
}
function g(o2 = {}) {
  let t = o2.origin = o2.origin || "*", s3 = typeof t == "string";
  return function(e, i4) {
    let r, n2 = e.method === "OPTIONS";
    s3 || (r = e.headers.get("Origin") || "", o2.origin = t === true && r || t instanceof RegExp && t.test(r) && r || "false"), l2(i4, o2, n2), n2 && (o2.headers || (r = e.headers.get("Access-Control-Request-Headers"), r && i4.setHeader("Access-Control-Allow-Headers", r), i4.headers.append("Vary", "Access-Control-Request-Headers")), i4.statusCode = 204, i4.end(null));
  };
}

// src-worker/index.ts
var API = new E();
API.prepare = g({
  origin: "*",
  methods: ["GET", "POST"]
});
API.add("GET", "/ping", async (_req, res) => {
  res.send(200, "pong");
});
API.add("POST", "/job/:jobId/application/submit", async (req, res) => {
  const {jobId} = req.params;
  res.send(200, {jobId});
});
u(API.run);
