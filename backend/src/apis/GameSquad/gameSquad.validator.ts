import { Schema } from 'express-validator'

export const gameSquadValidator: Schema = {
  gameSquadGameId: {
    escape: true,
    trim: true,
    optional: {
      options: {
        nullable: true
        // errorMessage: 'please provide a valid gameSquadGameId'
      }
    },
  },


  gameSquadSquadId: {
    escape: true,
    trim: true,
    optional: {
      options: {
        nullable: true
        // errorMessage: 'please provide a valid gameSquadSquadId'
      }
    },
  },
}