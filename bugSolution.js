const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

let isClosing = false;

const handleShutdown = () => {
  if (isClosing) return;
  isClosing = true;
  console.log('Shutting down...');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
};

process.on('SIGINT', handleShutdown);
process.on('SIGTERM', handleShutdown);

server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080/');
});
