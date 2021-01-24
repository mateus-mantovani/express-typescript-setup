import express from 'express';
import UsersController from '@controllers/UsersController';

const app = express();

app.get('/', (request, response) => {
  const controller = new UsersController();
  const name = controller.test();
  response.json({ name });
});

app.listen(3333);
