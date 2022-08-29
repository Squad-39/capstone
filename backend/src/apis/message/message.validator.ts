import { Schema } from 'express-validator'

export const messageValidator: Schema = {
  messageId: {
    isUUID: {
      errorMessage: 'please provide a valid messageId'
    }
  },
  messageRecipientId: {
    isUUID: {
      errorMessage: 'please provide a valid TicketProfileId'
    }
  },
  messageSenderId: {
    isLength: {
      errorMessage: 'name cannot be longer than 32 characters',
      options: { min: 1, max: 32 }
    },
    trim: true,
    escape: true
  },
  messageContent: {
    isDate: true,
    errorMessage: "ticket due date is malformed",
    optional: {
      options: {
        nullable: true
      }
    },
  },
  messageDateTime: {
    trim: true,
    escape: true,
    optional: {
      options: {
        nullable: true
      }
    },
    isLength: {
      errorMessage: 'Description cannot be longer than 512 characters',
      options: { min: 1, max: 512 }
    }

  },
  messageSentBy: {
    isDate: true,
    errorMessage: "ticket due date is malformed",
    optional: {
      options: {
        nullable: true
      }
    },
  },

}