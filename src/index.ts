import app from './application';

const port = 8080;

async function startServer() {
  (await app).listen(port, () => {
    console.log('Express server listening on port ' + port);
  });
}

startServer();
