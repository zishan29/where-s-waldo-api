import express from 'express';
import {
  getAllCharacters,
  postCharacter,
} from '../controllers/characterController';

const router = express.Router();

router.get('/characters', getAllCharacters);

// router.post('/characters', postCharacter);

export default router;
