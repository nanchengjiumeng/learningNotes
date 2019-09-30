const fs = require("fs");
const path = require("path");

function fsOpen() {
  let guanjiu = null;
  let fd = fs.openSync(
    path.resolve(__dirname, "../assert/text/guanjiu.txt"),
    "rs",
    (err, fd) => {
      // { Error: EEXIST: file already exists, open '/Users/ricardo/Desktop/pro/demo-node/assert/text/guanjiu.txt'
      // errno: -17,
      // code: 'EEXIST',
      // syscall: 'open',
      // path: '/Users/ricardo/Desktop/pro/demo-node/assert/text/guanjiu.txt' }
      if (err) throw err;
      fs.close(fd, err => {
        if (err) throw err;
      });
    }
  );
  console.log(fd);

  fs.fstat(fd, (err, stat) => {
    console.log(stat.isFile()); // true
  });
}

// 不建议在调用 fs.open()、 fs.readFile() 或 fs.writeFile() 之前使用 fs.access() 检查文件的可访问性。 这样做会引入竞态条件，因为其他进程可能会在两个调用之间更改文件的状态。 相反，应该直接打开、读取或写入文件，如果文件无法访问则处理引发的错误。

function write_ex() {
  fs.open(path__, "wx", (err, df) => {
    if (err) {
      if (err.code === "EEXIST") {
        console.error(`${path__} 已存在`);
        return;
      }
      throw err;
    }

    // writesomething()
  });
}

function read__ex() {
  fs.open(path__, "wx", (err, df) => {
    if (err) {
      if (err.code === "ENOENT") {
        console.error(`${path__} 不存在`);
        return;
      }
      throw err;
    }

    // readsomething()
  });
}

function open_flag_a(){
  let path__ = path.resolve(__dirname, '../assert/text/flag_a.txt');
  fs.open(path__, 'rs+', (err)=>{
    if(err) throw err;
    console.log(path__, ' is opend!');
    
  })
}


function open_flag_w(){
  let path__ = path.resolve(__dirname, '../assert/text/flag_a.txt');
  fs.open(path__, 'w', (err,fd)=>{
    if(err) throw err;
    fs.write(fd, 'write some ting1!',(err)=>{
      if(err) throw err;
    })
    console.log(path__, ' is opend!');
    
  })
  console.log('wrote!');
  
}
open_flag_w();