import { type Request, type Response, type NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import Character from '../models/character';

const getAllCharacters = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const characters = await Character.find();
      res.status(200).json({ data: { characters } });
    } catch (err) {
      console.error('Error fetching characters:', err);

      const errorMessage =
        err instanceof Error ? err.message : 'Failed to fetch characters';

      res.status(500).json({ error: errorMessage });
    }
  },
);

export { getAllCharacters };
