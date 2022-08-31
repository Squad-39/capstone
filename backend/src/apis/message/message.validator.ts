import { Schema } from 'express-validator'

export const messageValidator: Schema = {
  messageId: {
    isUUID: {
      errorMessage: 'Please provide a valid messageId'
    }
  },
  messageRecipientId: {
    isUUID: {
      errorMessage: 'Please provide a valid messageRecipientId'
    }
  },
  messageSenderId: {
    isUUID: {
      errorMessage: 'Please provide a valid messageSenderId'
    }
  },
  messageContent: {
    isLength: {
      errorMessage: 'Message must be between 1 to 255 characters.',
      options: { min: 1, max: 255 }
    },
    trim: true,
    escape: true
  },
  messageDateTime: {
    isDate: true,
    errorMessage: "There's an error for messageDateTime",
    optional: {
      options: {
        nullable: true
      }
    },
  },
  messageSentBy: {
    isLength: {
      errorMessage: 'Message must be between 1 to 255 characters.',
      options: { min: 1, max: 255 }
    },
    trim: true,
    escape: true
  },
}