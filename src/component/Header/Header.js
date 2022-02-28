import React, {useState, useContext} from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';
import alerticon from '../../Images/alert.jpg'
import LogoIcon from './logo'
import { AuthContext } from '../../StoredData/AuthContext';

const Header = ()=>{

const ctx = useContext(AuthContext)
const [alertMsg, setAlertMsg] = useState("")

    ///Date fuction 
    const date = new Date();
    const month= date.toLocaleDateString('en-US',{month:'long'}).slice(0, 3) 
    const hour = date.getHours().toString().padStart(2, '0')+":"+date.getMinutes().toString().padStart(2, '0')
    const day = date.toLocaleDateString('en-US',{day:'2-digit'})
    const year = date.getFullYear()

const alertMsgHandler =()=>{
    if(ctx.f===false && ctx.t===false){
        setAlertMsg("Everything is alright inside home !!");
    }
    else if(ctx.f===true){
        setAlertMsg("There is fire emergancy!!");
    }
    else if(ctx.t===true){
        setAlertMsg("There is theft emergancy!!");
    }
}

 
    return(
        
        <div className='header'>
            
            <div>
             <NavLink to="Logo"> <LogoIcon/></NavLink> 
            <span className='calender'>{hour}</span>
            <span className='calender'>{day}</span>
            <span className='calender'>{month}</span>
            <span className='calender'>{year}</span>
            </div>
        <div>
                <img src={alerticon} className="image" alt="" /> <div onClick={alertMsgHandler}>{alertMsg}check</div>  
        </div>  
        </div>
        
    )
}
export default Header;