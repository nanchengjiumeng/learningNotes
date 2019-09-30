const path = require("path");
const os = require("os");
const fs = require("fs");

const { sep } = path;
const tmpDir = os.tmpdir();

console.log(tmpDir);

fs.mkdtemp(`${tmpDir}${sep}`, (err, folder) => {
  if (err) throw err;
  console.log(folder);
});
