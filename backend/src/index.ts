import { App } from './App'
import {Profile} from "./utils/models/Profile";
import { Squad } from './utils/models/Squad'
import { Message } from './utils/models/Message'


declare module 'express-session' {
  export interface SessionData {
    profile: Profile|undefined;
    squad: Squad|undefined;
    message: Message|undefined;
    signature: string|undefined;
    jwt: string|undefined
  }
}

// instantiate new app and pass it a port as an argument to start with (4200)
async function main (): Promise<void> {
  try {
    const app = new App(4200)
    await app.listen()
  } catch (e) {
    console.log(e)
  }
}

main().catch(error => { console.error(error) })
