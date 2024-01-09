import express, { type Router } from 'express';
import { getAllCharacters } from '../controllers/characterController';

const router: Router = express.Router();

router.get('/characters', getAllCharacters);

export default router;
