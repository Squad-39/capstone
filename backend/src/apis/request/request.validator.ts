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
    optional:{
      options:{
        nullable:true
      }

    },
    isBoolean:true
    }

}
