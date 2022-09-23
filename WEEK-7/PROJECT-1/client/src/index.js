import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css'; 
import App from './App';
import { FootBallContext } from './context/context';


ReactDOM.render(
  <FootBallContext>
     <BrowserRouter>
        <App/>
     </BrowserRouter>
  </FootBallContext>
  
  ,document.getElementById('root')
);
