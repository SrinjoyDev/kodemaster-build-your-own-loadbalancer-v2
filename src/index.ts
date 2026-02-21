import express from 'express';

const app = express();
const PORT = 7010;

app.get('/', (req, res) => {
  console.log('server started!');
  res.send('Load Balancer v1.0');
});

app.listen(PORT, () => {
  console.log(`Load Balancer running on port ${PORT}`);
});
