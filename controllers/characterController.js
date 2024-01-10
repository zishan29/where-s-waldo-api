const asyncHandler = require('express-async-handler');
const Character = require('../models/character');
const { validationResult } = require('express-validator');

exports.getAllCharacters = asyncHandler(async (req, res, next) => {
  try {
    const characters = await Character.find();
    res.status(200).json({ data: characters });
  } catch (err) {
    console.error('Error fetching characters:', err);

    const errorMessage =
      err instanceof Error ? err.message : 'Failed to fetch characters';

    res.status(500).json({ error: errorMessage });
  }
});

exports.postCharacter = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = {};
    errors.array().forEach((error) => {
      const { param, msg } = error;
      if (!errorMessages[param]) {
        errorMessages[param] = [];
      }
      errorMessages[param].push(msg);
    });

    return res.status(400).json({ errors: errorMessages });
  }
  try {
    const newCharacter = new Character({
      name: req.body.name,
      position: req.body.position,
    });
    await newCharacter.save();
    res.status(200).json({ message: 'Character added' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
