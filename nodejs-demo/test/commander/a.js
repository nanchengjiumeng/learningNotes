// console.log(process.platform);
// console.log( process.env.XDG_CONFIG_HOME);


const { spawn } = require('child_process');
const ls = spawn('ls');
// const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`子进程退出，使用退出码 ${code}`);
});