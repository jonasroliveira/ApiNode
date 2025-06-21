import { Router } from 'express';
//import { login } from '../controllers/auth.controller';
import { register } from '../controllers/register.controller';

export const Routers = Router();

Routers.post('/register', register);
//Routers.post('/login', login);