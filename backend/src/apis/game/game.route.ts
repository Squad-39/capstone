import { Router } from 'express'
import { gameController } from './game.controller'

export const gameRoute = Router()

gameRoute.route('/')
  .get(gameController)

/***
 import {Router} from "express";
 import {asyncValidatorController} from "../../utils/controllers/async-Validator.controller";
 import {check, checkSchema} from "express-validator";
 import {isLoggedInController} from "../../utils/controllers/isLoggedIn.controller";
 import {gameValidator} from "./game.validator";

 export const GameRoute: Router = Router();
 GameRoute.route('/').post(putGameController);
 GameRoute.route("/:gameId").get(asyncValidatorController([check("gameId", "please provide a valid gameId").isUUID()]), getgameBygameId).put(isLoggedInController, asyncValidatorController(checkSchema(gameValidator)), putgameController)
 import {getGameBygameId, putGameController} from "./game.controller";/***
