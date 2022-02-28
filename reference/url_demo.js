// jshint esversion:6

const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');
// const myUrl = new URL('http://mywebsite.com:800/hello.html?id=100&status=active');

// serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

// host
console.log(myUrl.host);

// does not include port
console.log(myUrl.hostname);

// pathname
console.log(myUrl.pathname);

// query
console.log(myUrl.search);

// parameters in an object
console.log(myUrl.searchParams);

// append params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${value}: ${name}`));