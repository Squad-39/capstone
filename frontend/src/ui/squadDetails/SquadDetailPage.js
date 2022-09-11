import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import SquadLogo from '../images/blackSquad.jpg'
import {fetchAllSquads, fetchSquadBySquadId} from "../../store/squads";
export const SquadDetailPage = () => {

  // Returns the userPosts store from redux and assigns it to the userPosts variable.
  const dispatch = useDispatch();

  //grab the userId from the url
  let { squadId } = useParams();
console.log(squadId)
  const sideEffects = () => {
    // The dispatch function takes actions as arguments to make changes to the store/redux.
    dispatch(fetchSquadBySquadId(squadId))


  };

  /**
   * Pass both sideEffects and sideEffectInputs to useEffect.
   * useEffect is what handles rendering of components when sideEffects resolve.
   * E.g when a network request to an api has completed and there is new data to display on the dom.
   **/
  useEffect(sideEffects,  [squadId, dispatch]);

  const squad = useSelector(state => (
    state.squads.length === 1
      ? state.squads[0]
      : null
  ));
console.log(squad)

  return (
    <>
      <>

        <div className={"container text-center"}>
          <div className={"row"}>
            <div className={"col"} >
              <img src={SquadLogo} alt="black-squad" />
            </div>
          </div>
        </div>

        <div className={"container"}>
          <ListGroup>
            <ListGroup.Item>{squad.squadName}</ListGroup.Item>
            <ListGroup.Item>{squad.squadEmblem}</ListGroup.Item>
            <ListGroup.Item>{squad.squadAchievements}</ListGroup.Item>
            <ListGroup.Item>{squad.squadMaxSize}</ListGroup.Item>
          </ListGroup>
          <Button variant="dark w-100 text-center">Join Squad</Button>
        </div>


      </>
    </>
  )
};