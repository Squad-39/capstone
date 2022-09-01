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









