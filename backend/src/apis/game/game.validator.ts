import { Schema } from 'express-validator'

export const gameValidator: Schema = {
  gameGenre: {
    escape: true,
    trim: true,
    isLength: {
      errorMessage: 'gameGenre must be between one and thirty-two characters',
      options: { min: 1, max: 32 }
    }
  },
  gameName: {
    escape: true,
    trim: true,
    isLength: {
      errorMessage: 'gameName must be between one and thirty-two characters',
      options: { min: 1, max: 32 }
    }
  },
  gameImageUrl: {
    isURL: {errorMessage: 'games image is not supported'}
  }

}
