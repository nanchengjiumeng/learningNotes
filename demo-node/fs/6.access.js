const fs = require("fs");
const path = require("path");

const path__ = path.resolve(__dirname, "../assert/text/guanjiu.txt");


fs.constants.F_OK // 表明文件对调用进程可见
fs.constants.F_OK // 表明调用进程可以读取文件
fs.constants.F_OK // 表明调用进程可以写入文件
fs.constants.F_OK // 表明调用进程可以执行文件, 在Windows上无效.


