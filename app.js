const http = require('http');
const port = process.env.PORT || 3000
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
  var pathname = url.parse(req.url).pathname;
  res.writeHead(200);

  if (pathname == "/") {
    html = fs.readFileSync("index.html", "utf8");
    res.write(html);
  } else if (pathname == "/game.js") {
    script = fs.readFileSync("game.js", "utf8");
    res.write(script);
  } else if (pathname == "/style.css") {
    style = fs.readFileSync("style.css", "utf8");
    res.write(style);
  }

  res.end();
});

server.listen(port, () => {
  console.log(`Server running at port ` + port);
});