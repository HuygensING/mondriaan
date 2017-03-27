import * as express from 'express';
const app = express();

app.use(express.static(process.cwd() + '/build/client'));

app.get('*', (req, res) => {
  res.sendfile(process.cwd() + '/index.html');
});

app.listen(3001);