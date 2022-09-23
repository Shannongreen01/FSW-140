import React, {useState} from 'react'
import { FootBallContextConsumer } from '../context/context'
import CoachAdd from './input2'



const Coaches = (props) =>{
    
    const [editToggle, setEditToggle] = useState(false)
    
    
    return(
    
     <FootBallContextConsumer>
      
       {({coach, deleteCoach, putCoach}) =>{
  
         let status =''
         if(coach.active_status === 0){
         status = 'Retired'
         }else {
        status = 'Active'}
         return(
          coach.map(coach =>(
            <div className='listwrapper'>
          <div className='listbox'>
          { !editToggle ?
          <>
         <h2 className='box'>{coach.first_name} {coach.last_name} </h2>
         <ul className='box'>
           <li><strong>Status:</strong> {status}</li>
          <li>SuperBowl Rings: {coach.sb_rings}</li>
        </ul>
     <h3 className='box'>Played for:</h3>
     <ul>
     {[coach.teams].map((team, index) => (
  <li className='box' key={index}>
    {team}
  </li>
))} 
     </ul>
     <button
     className='delete-button'
     onClick={()=> deleteCoach(coach._id)}
     ><strong>Delete</strong></button>
     <button 
     className='edit'
     onClick={()=> setEditToggle(prevToggle => !prevToggle) }>
     Edit</button>

     </>
   :  
  <>
     <CoachAdd
     first_name={coach.first_name}
     last_name={coach.last_name}
     teams={coach.teams}
     active={status}
     rings={coach.sb_rings}
     _id={coach._id}
     btnText='Edit'
      submit={putCoach}
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


export default Coaches