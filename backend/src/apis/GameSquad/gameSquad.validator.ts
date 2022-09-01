import { Schema } from 'express-validator'

export const gameSquadValidator: Schema = {
  gameSquadGameId: {
    isUUID: {
      errorMessage: 'please provide a valid gameSquadGameId'
    }
  },
  gameSquadSquadId: {
    isUUID: {
      errorMessage: 'please provide a valid gameSquadSquadId'
    }
  }
}