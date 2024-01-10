const express = require('express');
const characterController = require('../controllers/characterController');

const router = express.Router();

router.get('/characters', characterController.getAllCharacters);

// router.post('/characters', postCharacter);

module.exports = router;
