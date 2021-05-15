//Mini backend

//get package that was installed
const jsonServer = require('json-server');

//create 
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

//local port number 
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);




