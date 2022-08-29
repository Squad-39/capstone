import {Schema} from 'express-validator';

export const squadValidator : Schema = {
  squadAchievements: {
    isLength: {
      errorMessage: 'Error',
    },
    trim: true,
    escape: true
  },
  squadName: {
    isLength: {
      errorMessage: 'Error, name has to be between 1 to 32 characters.',
      options: { min: 1, max: 32 }
    },
    trim: true,
    escape: true
  },
  squadMaxSize: {
    isInt: {
      errorMessage: 'Error, '
    }
  }
};