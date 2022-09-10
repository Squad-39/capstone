import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import ListGroup from "react-bootstrap/ListGroup";
import Form from 'react-bootstrap/Form'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { DisplayError} from "../shared/components/display-error/DisplayError";
import { httpConfig} from "../../utils/http-config";
import { GamesCard} from "./GamesCard";
import { FormDebugger} from "../shared/components/FormDebugger";
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllGames } from '../../store/games'
import Dropdown from "react-bootstrap/Dropdown";


export const Games = () => {
  const games = useSelector(state => state.games ? state.games : [])
  console.log(games)
  const dispatch = useDispatch()
  const initialEffects = () => {
    dispatch(fetchAllGames)
  }
  React.useEffect(initialEffects, [dispatch])
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant='primary mt-3' id='dropdown-basic'>
          Search
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href='#/action-1'>League of Legends</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>Rocket League</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>Counter-Strike: Global Offensive</Dropdown.Item>
          <Dropdown.Item href='#/action-3'>Dota 2</Dropdown.Item>
          <Dropdown.Item href='#/action-4'>Tekken 7</Dropdown.Item>
          <Dropdown.Item href='#/action-5'>FortNite</Dropdown.Item>
          <Dropdown.Item href='#/action-6'>Player Unknown Battlegrounds</Dropdown.Item>
          <Dropdown.Item href='#/action-7'>Overwatch</Dropdown.Item>
          <Dropdown.Item href='#/action-8'>Tom Clancy's Rainbow Six Siege</Dropdown.Item>
          <Dropdown.Item href='#/action-9'>Hearthstone</Dropdown.Item>
          <Dropdown.Item href='#/action-10'>Apex Legends</Dropdown.Item>
          <Dropdown.Item href='#/action-11'>Starcraft 2</Dropdown.Item>
          <Dropdown.Item href='#/action-12'>Super Smash Brothers</Dropdown.Item>
          <Dropdown.Item href='#/action-13'>Valorant</Dropdown.Item>
          <Dropdown.Item href='#/action-14'>FIFA</Dropdown.Item>
          <Dropdown.Item href='#/action-15'>Call of Duty Warzone</Dropdown.Item>
          <Dropdown.Item href='#/action-16'>Madden</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <h1>Games</h1>
      {games.map(games => <gamesCard games = {games} />)}
    </>
  )
}