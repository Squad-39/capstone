import React from 'react'
import Controller from './images/controllericon.png'
import Button from 'react-bootstrap/Button'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchRequestsByRequestSquadId} from "../store/requests";
import {fetchSquadBySquadId, fetchSquadsBySquadProfileId} from "../store/squads";
import {httpConfig} from "../utils/http-config";

export const SquadLead = () => {
  const auth = useSelector(state => state.auth ?? null)
  const {squadId} = useParams()
  const dispatch = useDispatch()
  const squad = useSelector(state => (
    state.squads.length === 1
      ? state.squads[0]
      : null
  ));

  const requests = useSelector(state => state.requests ?? [])
  const initialEffects = () => {
    dispatch(fetchRequestsByRequestSquadId(squadId))
    dispatch(fetchSquadBySquadId(squadId))
    // // const request = useSelector(state => (
    // //   state.requests.length === 1
    // //   ? state.requests [0]
    // //     : null
    // ));
  }

  React.useEffect(initialEffects, [squadId, dispatch])
  if (squad === null) {
    return <></>
  }
//todo useSelector to grab the squad from redux
  // todo useSelector to grab all requests for the squad
  //todo using useEffect dispatch fetch squad by squadId and all requests for the squad

  return (
    <>
      {/* This is the Squad Leads view of members that have requested to join the squad. */}
      <div>
        <img src={Controller} className='bg-black rounded rounded-circle' width='100px' alt='squadAvatar'/>
        <h2 className="text">{squad.squadName}</h2>
        <h4 className="text">{squad.squadMaxSize}</h4>
        <h4 className="text">{squad.squadAchievements}</h4>
      </div>
      {/* Displays the members that have requested to join the squad */}
      {requests.map(request => <SquadLeadListElement request={request} key={request.requestProfileId}/>)}

    </>
  )


  function SquadLeadListElement(props) {
    const {request} = props
    function handleSquadRequest(isApproved){
      const payload = {requestProfileId:request.requestProfileId, requestSquadId: request.requestSquadId, requestStatus: isApproved}
      httpConfig.put(`/apis/request/requestProfileId/${request.requestProfileId}/requestSquadId/${request.requestSquadId}`, payload)
    }
    return (
      <div className='mt-5'>
        <h5 className="text">{request.requestProfileId}</h5>
        <img src={Controller} className='bg-black rounded rounded-circle' width='50px' alt='squadAvatar'/>
        <Button  onClick={()=>{handleSquadRequest(true)}} variant='primary ms-3'>Request/Accepted</Button>
        <Button onClick = {()=>{handleSquadRequest(false)}}className="button ms-3">Request/Declined</Button>
      </div>
    )
  }
}