
import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () =>{

     return(
         <div className='navbox'>
             
              <Link className='link' to='/Players'><i class="fas fa-football-ball"></i></Link>
             <Link className='link' to='/Coaches'><i class="fas fa-clipboard"></i></Link>
             <Link className='link' to='/'><i class="fas fa-trophy"></i></Link>
             
         </div>
     )

}


export default Nav