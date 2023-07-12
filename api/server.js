const jsonServer = require('json-server');
const fs = require('fs');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const tmpDbFile = '/tmp/db.json';
fs.copyFileSync('db.json', tmpDbFile);

const router = jsonServer.router(tmpDbFile);

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});

