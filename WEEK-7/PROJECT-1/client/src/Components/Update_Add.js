import React, {useState} from 'react'
import {FootBallContextConsumer} from '../context/context'

const UpdateAdd = (props) =>{
    
    const initInputs = 
    {first_name:props.first_name ||'', last_name: props.last_name || '',active:props.active ||'',teams: props.teams ||'', jersey:props.jersey ||'', rings:props.rings ||''}
    console.log(props.first_name)
    const [inputs, setInputs] = useState(initInputs)
console.log(inputs)
console.log(props)
    return(
        
    <FootBallContextConsumer>
       
      {({submit, putPlayer}) =>{
          
          
          const handleChange = (e) =>{
              const {name, value} = e.target
              setInputs(prevInputs => ({...prevInputs, [name]: value}))
          }
      
          const handleSubmit = (e)=>{
             
              const newInput = {...inputs, teams:inputs.teams.split(',')}
              putPlayer(newInput, props._id)
              
              setInputs(initInputs)
              submit(inputs)
            
              
          }
          return(
            <div className='submit'>
            <form onSubmit={handleSubmit}>
                 <input type='text' name='first_name' value={inputs.first_name} onChange={handleChange} placeholder='First Name'/>
                 <input type='text' name='last_name' value={inputs.last_name} onChange={handleChange} placeholder='Last Name'/>
                 <input type='text' name='active' value={inputs.active} onChange={handleChange} placeholder='Active ?'/>
                 <input type='textarea'  name='teams' maxLength="100" value={inputs.teams} onChange={handleChange} placeholder='team'/>
                 <input type='text' name='jersey' value={inputs.jersey} onChange={handleChange} placeholder='Jersey #'/>
                 <input type='text' name='rings' value={inputs.rings} onChange={handleChange} placeholder='How many rings'/>
                 <button><strong>{'Submit'}</strong></button>
            </form>
      </div>

          )
      }}

      
    </FootBallContextConsumer>
        
    )
}
export default UpdateAdd