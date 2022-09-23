import React from 'react'
import {FootBallContextConsumer} from '../context/context'

const CoachLeaders = ()=>{
    return(
        <FootBallContextConsumer>
            {({coachLeaders}) =>{
                return(
                    coachLeaders.map(coachLeaders =>(
                        <div className='listwrapper'>
                        <div className='listbox'>
                        
                       <h2 className='box'>{coachLeaders.first_name} {coachLeaders.last_name} </h2>
                       <ul className='box'>
                    
                         <li><strong>Jersey Number:</strong> {coachLeaders.jersey}</li>
                        <li>SuperBowl Rings: {coachLeaders.sb_rings}</li>
                      </ul>
                   <h3 className='box'>Played for:</h3>
                   <ul>
                   {[coachLeaders.teams].map((team, index) => (
                <li className='box' key={index}>
                  {team}
                </li>
                   ))} 
                   </ul>
     
                </div>
              </div>
                    ))
                )
            }}
        </FootBallContextConsumer>
    )
}

export default CoachLeaders