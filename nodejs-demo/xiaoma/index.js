const fs = require("fs");
const http = require("http");
const path = require("path");
const qs = require("querystring");

const ejs = require("ejs");
const { getExpDataById } = require(path.resolve(__dirname, "./api/index.js"));

const pathBodyEJS = path.resolve(__dirname, "./ejs/expTemplate.ejs");
const fsReadStream = fs.createReadStream(pathBodyEJS, {
  encoding: "utf-8"
});
let body = "";
fsReadStream.once("data", data => {
  body = data;
});

const port = 3002;

// 数据
const myData = { id: 61902, title: "拓词 上瘾背单词", expData: "" };

getExpDataById(myData.id).then(data => {
  myData.expData = JSON.stringify(data);
});

// const myserver = http.createServer(
//   {
// incomingMessage 用于拓展 IncomingMessage类
// serverResponse 用于拓展 ServerResponse
//   },
//   (req, res) => {
// res.setHeader("Content-type", "text/html");

// const searchBegin = req.url.indexOf("?");
// const search = searchBegin > -1 ? req.url.slice(searchBegin + 1) : "";
// const searchObj = qs.parse(search);
// if (!searchObj["index"]) return res.end("缺少查询字符.");
// console.log(myData.expData);

const html = ejs.render(body, myData);

const path__ = path.resolve(__dirname, "./html/body_" + myData.id + ".html");
fs.open(path__, "a", (err, fd) => {
  if (err) throw err;
  fs.writeFile(fd, html, err => {
    if (err) throw err;
    console.log(`文件生成: ${path__}`);
  });
});

//     res.end(html);
//   }
// );

// myserver.listen(port, err => {
//   if (err) throw err;
//   console.log(`服务端口号为：${port}`);
// });
