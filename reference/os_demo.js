// jshint esversion: 6

const os = require('os');

// platform
console.log(os.platform());

// CPU architecture
console.log(os.arch());

// CPU core info
// console.log(os.cpus());

// Free memory
console.log(os.freemem());

// total memory
console.log(os.totalmem());

// home directory
console.log(os.homedir());

// uptime
console.log(os.uptime());