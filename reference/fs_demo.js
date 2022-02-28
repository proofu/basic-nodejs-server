// jshint esversion:6

const fs = require("fs");
const path = require("path");

// create folder
// fs.mkdir(path.join(__dirname, "test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder created");
// });

// create and write to file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "hello world.",
//   (err) => {
//     if (err) throw err;
//     console.log("file written to...");
//   }
// );

// append
// fs.appendFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   " I love Node",
//   (err) => {
//     if (err) throw err;
//     console.log("text appended to...");
//   }
// );

// read file
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// rename
fs.rename(path.join(__dirname, "/test", "hello.txt"), path.join(__dirname, "/test", "helloWorld.txt"), (err) => {
    if (err) throw err;
    console.log('file renamed');
  });
