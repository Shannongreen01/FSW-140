import React, {useState} from 'react'
import { FootBallContextConsumer } from '../context/context'
import UpdateAdd from './Update_Add'



const Players = (props) =>{
    
    const [editToggle, setEditToggle] = useState(false)
    
    
    return(
    
     <FootBallContextConsumer>
      
       {({player, putPlayer, deletePlayer}) =>{
          console.log(player)
  
         let status =''
         if(player.active_status === 0){
         status = 'Retired'
         }else {
        status = 'Active'}
         return(
          player.map(player =>(
            <div className='listwrapper'>
          <div className='listbox'>
          { !editToggle ?
          <>
         <h2 className='box'>{player.first_name} {player.last_name} </h2>
         <ul className='box'>
           <li><strong>Status:</strong> {status}</li>
           <li><strong>Jersey Number:</strong> {player.jersey}</li>
          <li>SuperBowl Rings: {player.sb_rings}</li>
        </ul>
     <h3 className='box'>Played for:</h3>
     <ul>
     {[player.teams].map((team, index) => (
  <li className='box' key={index}>
    {team}
  </li>
))} 
     </ul>
     <button
     className='delete-button'
     onClick={()=> deletePlayer(player._id)}
     ><strong>Delete</strong></button>
     <button 
     className='edit'
     onClick={()=> setEditToggle(prevToggle => !prevToggle) }>
     Edit</button>

     </>
   :  
  <>
     <UpdateAdd
     first_name={player.first_name}
     last_name={player.last_name}
     teams={player.teams}
     jersey={player.jersey}
     active={status}
     rings={player.sb_rings}
     _id={player._id}
     btnText='Edit'
      submit={putPlayer}
      />
      <button
      onClick={()=> setEditToggle(prevToggle => !prevToggle) }
      >Close</button>
      </>
      }
  </div>
</div>
          ))
         )
       }}
     </FootBallContextConsumer>


    
    )
}


export default Players