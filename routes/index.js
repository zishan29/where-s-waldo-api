const express = require('express');
const characterController = require('../controllers/characterController');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/characters', characterController.getAllCharacters);

router.post('/characters', characterController.postCharacter);

router.get('/users', userController.getAllUsers);

router.post('/users', userController.postUser);

module.exports = router;
