import { Router } from 'express'
import { signOutController } from './sign-out.controller'

export const SignOutRoute: Router = Router()

<<<<<<< HEAD
signOutRoute.route('/')
  .get(signOutController)
=======
SignOutRoute.route('/')
  .get(signOutController)
>>>>>>> 97d622f1a5d03ed7bd2b9b337f4fe091ba3810ed
