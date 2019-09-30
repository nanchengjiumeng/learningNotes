const fs = require("fs");
const path = require("path");

const path__ = path.resolve(__dirname, "../assert/text/guanjiu.txt");

fs.constants.F_OK; // 表明文件对调用进程可见
fs.constants.R_OK; // 表明调用进程可以读取文件
fs.constants.W_OK; // 表明调用进程可以写入文件
fs.constants.F_OK; // 表明调用进程可以执行文件, 在Windows上无效.

fs.access(path__, fs.constants.F_OK, err => {
  console.log(`${path__} ${err ? "进程不可见" : "进程可见"}`);
});

fs.access(path__, fs.constants.R_OK, err => {
  console.log(`${path__} ${err ? "不可读" : "可读"}`);
});

fs.access(path__, fs.constants.W_OK, err => {
  console.log(`${path__} ${err ? "不可写" : "可写"}`);
});

fs.access(path__, fs.constants.R_OK, err => {
  console.log(`${path__} ${err ? "不可读" : "可读"}`);
});