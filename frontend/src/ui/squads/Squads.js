import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Controller from '../images/controllericon.png'
import { ListGroup } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import * as Yup from 'yup'
import { httpConfig } from '../../utils/http-config'
import { Formik } from 'formik'
import { FormDebugger } from '../shared/components/FormDebugger'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllSquads } from '../../store/squads'
import { SquadsCard } from './SquadsCard'

export const Squads = () => {
const squads = useSelector(state => state.squads? state.squads :[])
console.log(squads)
  const dispatch = useDispatch()
  const initialEffects = () => {
  dispatch(fetchAllSquads())
  }
  React.useEffect(initialEffects, [dispatch])
  return (
    <>
    {/* This is the dropdown for searching for Squads */}
      <Dropdown>
        <Dropdown.Toggle variant='primary mt-3' id='dropdown-basic'>
          Search
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>Adventure</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>FPS</Dropdown.Item>
          <Dropdown.Item href='#/action-3'>Shooters</Dropdown.Item>
          <Dropdown.Item href='#/action-4'>MOBA</Dropdown.Item>
          <Dropdown.Item href='#/action-5'>MMO</Dropdown.Item>
          <Dropdown.Item href='#/action-6'>RPG</Dropdown.Item>
          <Dropdown.Item href='#/action-7'>Sports</Dropdown.Item>
          <Dropdown.Item href='#/action-8'>Simulation</Dropdown.Item>
          <Dropdown.Item href='#/action-9'>Strategy</Dropdown.Item>
          <Dropdown.Item href='#/action-10'>Fighting</Dropdown.Item>
          <Dropdown.Item href='#/action-11'>Platformer</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {/* This is the formatting for displaying available squads from user search criteria */}
      <h1>Squads</h1>
      {squads.map(squad => <SquadsCard squad = {squad} />)}

    </>
  )
}
