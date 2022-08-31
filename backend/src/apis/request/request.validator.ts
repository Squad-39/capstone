import { Schema } from 'express-validator'

export const requestValidator: Schema = {
  requestProfileId: {
    isUUID: {
      errorMessage: 'please provide a valid ProfileId'
    }
  },
  requestSquadId: {
    isUUID: {
      errorMessage: 'please provide a valid SquadId'
    }
  },
  requestStatus: {
    isLength: {
      errorMessage: 'request cannot go through',
      options: { min: 1, max: 32 }
    },
    trim: true,
    escape: true
  }
}
