# Simple HTTP Static Server

- A simple http server to serve static files.
- Http debug tool to make the request clear by printing the headers and body.

---

## How to use

```bash
node index.js <http-port>
```

Example:

```
node index.js 3000
```

## What it do

Serve the static files.

```
Got request: /favicon.ico
```

---

Print the request detail out to console.

```
fisher@desktop ~ $ node index.js 3000
Server is running on http://127.0.0.1:3000

Got request: /hello?param=apple
{ basic: 
   { ip: '::ffff:127.0.0.1',
     url: '/hello?param=apple',
     method: 'GET' },
  headers: 
   { host: '127.0.0.1:3000',
     connection: 'keep-alive',
     'cache-control': 'max-age=0',
     'upgrade-insecure-requests': '1',
     'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.90 Safari/537.36',
     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
     'accept-encoding': 'gzip, deflate, sdch, br',
     'accept-language': 'en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4',
     'if-none-match': 'W/"201-+sYOfNFX/i0A4/Ft4C55OA"' },
  query: { param: 'apple' },
  body: {} }
```

---

