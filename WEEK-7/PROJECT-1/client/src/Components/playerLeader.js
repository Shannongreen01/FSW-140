import React from 'react'
import {FootBallContextConsumer} from '../context/context'

const PlayerLeaders = ()=>{
    return(
        <FootBallContextConsumer>
            {({playerLeaders}) =>{
                return(
                    playerLeaders.map(playerLeaders =>(
                        <div className='listwrapper'>
                        <div className='listbox'>
                        
                       <h2 className='box'>{playerLeaders.first_name} {playerLeaders.last_name} </h2>
                       <ul className='box'>
                    
                         <li><strong>Jersey Number:</strong> {playerLeaders.jersey}</li>
                        <li>SuperBowl Rings: {playerLeaders.sb_rings}</li>
                      </ul>
                   <h3 className='box'>Played for:</h3>
                   <ul>
                   {[playerLeaders.teams].map((team, index) => (
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

export default PlayerLeaders