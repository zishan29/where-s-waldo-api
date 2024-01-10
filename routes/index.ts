import express, { type Router } from 'express';
import {
  getAllCharacters,
  postCharacter,
} from '../controllers/characterController';

const router: Router = express.Router();

router.get('/characters', getAllCharacters);

// router.post('/characters', postCharacter);

export default router;
