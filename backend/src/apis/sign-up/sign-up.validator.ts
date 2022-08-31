import { Schema } from 'express-validator'

export const signUpValidator: Schema = {
  profileEmail: {
    isEmail: {
      errorMessage: 'Please provide a valid email'
    },
    trim: true
  },
  profileGamertag: {
    escape: true,
    trim: true,
    isLength: {
      errorMessage: 'models name must be between 1 and 32 characters',
      options: { min: 1, max: 32 }
    }
  },
  profilePassword: {
    isLength: {
      errorMessage: 'Password must be at least eight characters',
      options: { min: 8 }
    },
    trim: true,
    escape: true
  },

  profilePasswordConfirm: {
    isLength: {
      errorMessage: 'Confirm password must be at least eight characters',
      options: { min: 8, max: 200 }
    },
    custom: {
      errorMessage: 'Password confirmation does not match password',
      options: (value, { req, location, path }) => {
        if (value !== req.body.profilePassword) {
          throw new Error('Password confirmation does not match password')
        }

        // Indicates the success of this synchronous custom validator
        return true
      }
    }
  },
  profileName: {
    escape: true,
    trim: true,
    isLength: {
      errorMessage: 'models name must be between 1 and 32 characters',
      options: { min: 1, max: 32 }
    }
  },

  profilePlatform: {
    escape: true,
    trim: true,
    isLength: {
      errorMessage: 'models name must be between 1 and 32 characters',
      options: { min: 1, max: 32 }
    }
  }
}
