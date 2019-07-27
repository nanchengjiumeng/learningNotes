# fs.unlink(redirect, (err)={})

删除文件

# 判断文件是否存在后进行读写

[fs_fs_access_path_mode_callback]http://nodejs.cn/api/fs.html#fs_fs_access_path_mode_callback

# fs.open(path,[mode], callback)

```js
callback(err)=>{
      // err如果不为null：
      // { Error: EEXIST: file already exists, open '/Users/ricardo/Desktop/pro/demo-node/assert/text/guanjiu.txt'
      // errno: -17,
      // code: 'EEXIST',
      // syscall: 'open',
      // path: '/Users/ricardo/Desktop/pro/demo-node/assert/text/guanjiu.txt' }
}

```

# fs.fstat

```js
fs.fstat(fd, (err, stat) => {
  stat.isFile();
});

Stats {
  dev: 16777220, // 文件的数字描述符
  mode: 33188 // 文件系统特定的文件索引节点编号
  nlink: 1, // 文件存在的硬链接数
  uid: 501, // 拥有该文件的用户的数字型用户标识符
  gid: 20, // 拥有该问价你的群组的数字型群组标示符
  rdev: 0, // 如果该文件为特殊文件，则此条为文件的数字描述符
  blksize: 4096, // 用于i/o操作的文件系统块的大小
  ino: 21932795, // 文件系统特定的文件索引节点编号
  size: 347, // 字节
  blocks: 8, // 为此文件分配的块数
  atimeMs: 1563162386791.9077, // 文件最后一次被访问的时间 UTC
  mtimeMs: 1563162385761.991, // 文件最后一次修改时间 UTC
  ctimeMs: 1563162385761.991, // 状态发生变化的时间 UTC
  birthtimeMs: 1563161262082.8647, // 创建时间 UTC
  atime: 2019-07-15T03:46:26.792Z, // 文件最后一次被访问的时间 UTC
  mtime: 2019-07-15T03:46:25.762Z, // 文件最后一次修改时间 UTC
  ctime: 2019-07-15T03:46:25.762Z, // 状态发生变化的时间 UTC
  birthtime: 2019-07-15T03:27:42.083Z  // 创建时间 UTC
  }

```

## .txt

stat.isFile(); => true

# fs.createReadStream

```js
ReadStream {
  _readableState:
   ReadableState {
     objectMode: false,
     highWaterMark: 65536,
     buffer: BufferList { head: null, tail: null, length: 0 },
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: false,
     endEmitted: false,
     reading: false,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events:
   { end: [Function],
     close: { [Function: bound onceWrapper] listener: [Function] },
     ready: { [Function: bound onceWrapper] listener: [Function] }
   },
  _eventsCount: 3,
  _maxListeners: undefined,
  path: '/Users/ricardo/Desktop/pro/demo-node/assert/text/guanjiu.txt',
  fd: 13,
  flags: 'r',
  mode: 438,
  start: undefined,
  end: Infinity,
  autoClose: true,
  pos: undefined,
  bytesRead: 355
  }
```

# fs.createWriteStream

```js
WriteStream {
  _writableState:
   WritableState {
     objectMode: false,
     highWaterMark: 16384,
     finalCalled: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     destroyed: false,
     decodeStrings: true,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     corked: 0,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function: bound onwrite],
     writecb: null,
     writelen: 0,
     bufferedRequest: null,
     lastBufferedRequest: null,
     pendingcb: 0,
     prefinished: false,
     errorEmitted: false,
     bufferedRequestCount: 0,
     corkedRequestsFree:
      { next: null,
        entry: null,
        finish: [Function: bound onCorkedFinish] } },
  writable: true,
  domain: null,
  _events:
   { finish: { [Function: bound onceWrapper] listener: [Function] } },
  _eventsCount: 1,
  _maxListeners: undefined,
  path: '/Users/ricardo/Desktop/pro/demo-node/assert/text/write.txt',
  fd: null,
  flags: 'w',
  mode: 438,
  start: undefined,
  autoClose: true,
  pos: undefined,
  bytesWritten: 0
  }
```

# fs.access

fs.constants.F_OK // 表明文件对调用进程可见
fs.constants.F_OK // 表明调用进程可以读取文件
fs.constants.F_OK // 表明调用进程可以写入文件
fs.constants.F_OK // 表明调用进程可以执行文件, 在 Windows 上无效.

```js
fs.access(path__, fs.constants.F_OK, error => {
  console.log(`${path__} ${error ? "不存在" : "存在"}`);
});
```


# fs.appendFile

## 文件系统标示

- 'a' 打开文件用于追加，文件不存在，则创建该文件。
- 'ax' 与'a'相似，但路径不存在则失败。
- 'a+' 打开文件用于读取和追加。如果文件不存在则创建该文件。
- 'ax+'  与'a+'相似，如果路径已存在则失败。
- 'as' 同'a'，但为同步模式。
- 'as+' 同'a+'，但为同步模式。
- 'r' 打开文件用于读取。如果文件不存在，则出现异常。
- 'r+' 打开文件用于读取和写入。如果文件不存在，则出现异常。
- 'rs+' 同步模式类似'r+'，指示操作系统绕过本地的文件系统缓存。🌟不建议使用。
- 'w' 打开文件用于写入。如果文件不存在则创建文件，如果文件已存在则截断文件。
- 'wx' 与'w'相似，但如果路径已存在，则失败。
- 'w+' 打开文件用读取和写入。
- 'wx+' 与'w+'相似，但如果路径已存在则失败。
