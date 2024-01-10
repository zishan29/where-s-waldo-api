import asyncHandler from 'express-async-handler';
import Character from '../models/character';

const getAllCharacters = asyncHandler(async (req, res, next) => {
  try {
    const characters = await Character.find();
    res.status(200).json({ data: { characters } });
  } catch (err) {
    console.error('Error fetching characters:', err);

    const errorMessage =
      err instanceof Error ? err.message : 'Failed to fetch characters';

    res.status(500).json({ error: errorMessage });
  }
});

// const postCharacter = asyncHandler(
//   async (req, res, next) => {
//     const newCharacter = {
//       name: req.body.name,
//       position: { x: req.body.x_coordinate, y: req.body.y_coordinate },
//     };

//   },
// );

export { getAllCharacters };
