const { validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');
const User = require('../models/user');

exports.getAllUsers = asyncHandler(async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({ data: users });
  } catch (err) {
    res.status(400).json({ err });
  }
});

exports.postUser = asyncHandler(async (req, res, next) => {
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
    let newUser = new User({
      name: req.body.name,
      time: req.body.time,
    });
    await newUser.save();
    res.status(200).json({ message: 'User added' });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});
