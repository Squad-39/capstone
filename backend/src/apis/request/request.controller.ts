import {Request, Response} from "express";
import {setActivationToken, setHash} from '../../utils/auth.utils'

import Mailgun from "mailgun.js";
import formData from 'form-data'
import Client from "mailgun.js/dist/lib/client";
import {Status} from "../../utils/interfaces/Status";
import {insertProfile, Profile} from "../../utils/models/Profile";

export async function signUpController(req: Request, res: Response): Promise<Response | undefined> {
  try {
    const mailgun: Mailgun = new Mailgun(formData)
    const mailgunClient: Client = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY as string})
    const {profileEmail, profileGamertag, profilePassword, profileName, profilePlatform} = req.body
    const profileHash = await setHash(profilePassword)
    const profileActivationToken = setActivationToken()
    const profileImage = "🎮"



    const basePath: string = `${req.protocol}://${req.hostname}/${req.originalUrl} /activation/${profileActivationToken}`
    const message = `<h2>Welcome...</h2>
  <p> In order to start using the site you must confirm your account.</p>
  <p><a href="${basePath}">${basePath}</a></p>`

    const mailgunMessage = {
      from: 'Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN as string}>',
      to: profileEmail,
      subject: 'One step closer to joining Squad Finder -- Account Activation',
      html: message
    }

    const profile: Profile = {
      profileId: null,
      profileActivationToken,
      profileEmail,
      profileGamertag,
      profileHash,
      profileImage,
      profileName,
      profilePlatform
    }
    await insertProfile(profile)

    // await mailgunClient.messages.create(process.env.MAILGUN_DOMAIN as string, mailgunMessage)

    const status: Status = {
      status: 200,
      message: 'models created please check your email.',
      data: null
    }

    return res.json(status)
  } catch (error: any) {
    const status: Status = {
      status: 500,
      message: error.message,
      data: null
    }
    return res.json(status)
  }
}