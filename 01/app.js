const http = require('http');
const os = require('os');
const welcome = require('./welcome');

http.createServer((req, resp) => {
    console.log(welcome());
    resp.end('Hello world!');
}).listen(3000, "127.0.0.1", () => {
    console.log('Success start!');
});