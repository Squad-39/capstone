import { Schema } from 'express-validator'

export const profileValidator: Schema = {
  profileId: {
    escape: true,
    trim: true,
    optional: {
      options: {
        nullable: true
      }
    },
    isLength: {
      errorMessage: 'profile about me must be between one and thirty two characters',
      options: { min: 1, max: 512 }
    }
  },
  profileActivationToken: {
    escape: true,
    trim: true,
    isLength: {
      errorMessage: 'profile name must be between one and thirty two characters',
      options: { min: 1, max: 32 }
    }
  },
  profileEmail: {
    isEmail: {
      errorMessage: 'Please provide a valid email'
    },
    // Uncomment the next line to sanitize email, but it removes +1 from testing email addresses.
    // normalizeEmail: true,
    trim: true
  },
  profileGamertag: {
    escape: true,
    trim: true,
  },
  profileHash: {

  },
  profileImage: {
    escape: true,
    trim: true,
  },
  profileName: {
    escape: true,
    trim: true,
  },
  profilePlatform: {
    escape: true,
    trim: true,
  }
}









