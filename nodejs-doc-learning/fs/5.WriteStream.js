const fs = require("fs");
const path = require("path");
const assert = require("assert");

const path_ = path.resolve(__dirname, "../assert/image/icon.png");
const path__ = path.resolve(__dirname, "../assert/image/icon_1.png");

const wirteStream = fs.createWriteStream(path__, {
  // encoding: 'image/png'
});
const readStream = fs.createReadStream(path_, {
  // encoding: 'iamge/png'
});

wirteStream.on("open", () => {
  console.log("write open.");
});
wirteStream.on("ready", () => {
  console.log("write ready.");
});
wirteStream.on("end", () => {
  // console.log(wirteStream.bytesWritten);
  console.log("write end.");
});
wirteStream.on("close", () => {
  console.log("write close.");
});
wirteStream.on("pipe", src => {
  console.error("有数据正通过管道流入写入器");
  // assert.equal(src, readStream);
});

readStream.pipe(wirteStream); // 将 guanjiu.txt 的文字写到 write.txt 中.
