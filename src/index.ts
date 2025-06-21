import express from 'express';
import { setupSwagger } from './swagger';
import { register } from './controllers/register.controller';

const app = express();
app.use(express.json());

app.post('/register', register);

setupSwagger(app);

app.listen(3000, () => {
    console.log('API rodando em http://localhost:3000');
    console.log('Swagger UI em http://localhost:3000/api-docs');
});