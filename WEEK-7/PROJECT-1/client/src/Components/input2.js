import React, {useState} from 'react'
import {FootBallContextConsumer} from '../context/context'

const CoachAdd = (props) =>{
    
    const initInputs = 
    {first_name: props.first_name||'', last_name: props.last_name ||  '', active:props.active_status ||'', teams:props.teams ||'', rings:props.rings ||''}
    
    const [inputs, setInputs] = useState(initInputs)

    return(
        
    <FootBallContextConsumer>
       
      {({addCoach, putCoach}) =>{
          
          
          const handleChange = (e) =>{
              const {name, value} = e.target
              setInputs(prevInputs => ({...prevInputs, [name]: value}))
          }
      
          const handleSubmit = (e)=>{
             
              const newInput = {...inputs, teams:inputs.teams.split(',')}
               putCoach(newInput, props._id)
               
              setInputs(initInputs)
              addCoach(inputs)
              
          }
          return(
            <div className='submit'>
            <form onSubmit={handleSubmit}>
                 <input type='text' name='first_name' value={inputs.first_name} onChange={handleChange} placeholder='First Name'/>
                 <input type='text' name='last_name' value={inputs.last_name} onChange={handleChange} placeholder='Last Name'/>
                 <input type='text' name='active' value={inputs.active} onChange={handleChange} placeholder='Active ?'/>
                 <input type='textarea'  name='teams' maxLength="100" value={inputs.teams} onChange={handleChange} placeholder='team'/>
                 <input type='number' name='rings' value={inputs.rings} onChange={handleChange} placeholder='How many rings'/>
                 <button><strong>{'Submit'}</strong></button>
            </form>
      </div>

          )
      }}

      
    </FootBallContextConsumer>
        
    )
}
export default CoachAdd