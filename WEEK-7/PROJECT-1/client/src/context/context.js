import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {createContext} from 'react'



const {Provider, Consumer} = createContext()


const FootBallContext = (props)=>{
    const [players, setPlayers] = useState([])
    useEffect( ()=> {
      axios.get('/footballPlayers')
      .then(res => {
        setPlayers(res.data)
      })
      .catch(err => console.log(err))
    }
    , [])
    
    const [coaches, setCoahes] = useState([])
    useEffect(() =>{
      axios.get('/footballCoaches')
      .then(res => setCoahes(res.data))
      .catch(err => console.log(err))
    }, [])

    const [playerLeaders, setPlayerLeaders] = useState([])
    useEffect(() =>{
      axios.get('/Leaders/players')
      .then(res => 
        setPlayerLeaders(res.data))
      .catch(err => console.log(err))
    }, [])

    const [coachLeaders, setCoachLeaders] = useState([])
    useEffect(() =>{
      axios.get('/Leaders/coaches')
      .then(res => 
        setCoachLeaders(res.data))
      .catch(err => console.log(err))
    }, [])

      
    //////Players Routes///////////
    const addPlayer = (newPlayer) =>{
      axios.post('/footballPlayers', newPlayer)
      .then(res => {
        setPlayers(prePlayer => [...prePlayer, res.data])
      })
      .catch(err => console.log(err))
    
      }
    
    const deletePlayer = (playerId) =>{
        axios.delete(`/footballPlayers/${playerId}`)
        .then(res => {
          
          setPlayers(prePlayer => prePlayer.filter(player => player._id !== playerId ))
        })
        .catch(err => console.log(err))
    
    }
    
    
    const putPlayer = (updates, playerId) =>{
      axios.put(`/footballPlayers/${playerId}`, updates)
      .then(res => {
        
        setPlayers(prePlayer => prePlayer.map(player => player._id !== playerId ? player : res.data) )
      })
    
      .catch(err => console.log(err))
      
    }

    /////////////////////////////////Coaches Routes///////////////////////////////////////////////


    const addCoach = (newCoach) =>{
      axios.post('/footballCoaches', newCoach)
      .then(res => {
        setPlayers(preCoach => [...preCoach, res.data])
      })
      .catch(err => console.log(err))
    
      }
    
    const deleteCoach = (coachId) =>{
        axios.delete(`/footballCoaches/${coachId}`)
        .then(res => {
  
          setPlayers(preCoach => preCoach.filter(coach => coach._id !== coachId ))
        })
        .catch(err => console.log(err))
    
    }
    
    
    const putCoach = (updates, coachId) =>{
      axios.put(`/footballCoaches/${coachId}`, updates)
      .then(res => {
        
        setPlayers(preCoach => preCoach.map(coach => coach._id !== coachId ? coach : res.data) )
      })
    
      .catch(err => console.log(err))
      
    }
/////////////////////////Group Select//////////////////////////////


    return(
        <div>
            <Provider value={{
                player: players,
                coach: coaches,
                playerLeaders: playerLeaders,
                coachLeaders: coachLeaders,
                submit: addPlayer,
                deletePlayer: deletePlayer,
                putPlayer: putPlayer,
                addCoach: addCoach,
                deleteCoach: deleteCoach,
                putCoach: putCoach
            
            }}>
                    {props.children}               
                </Provider>
        </div>
    )

}
export  {FootBallContext, Consumer as FootBallContextConsumer}