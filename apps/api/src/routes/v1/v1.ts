import { Router } from 'express';
import { contactRouter } from './contact/contact';

export const v1Router = Router();

v1Router.use('/contact', contactRouter);
