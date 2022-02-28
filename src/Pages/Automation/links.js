import {NavLink} from 'react-router-dom';
import React from 'react'
import './Links.css'
import homeIcon from '../../Images/Home.png'
const AutomationLinks=()=>{
    return(
        <div className='linksheader'>
        <nav>
            <ul>
                <div>
                <li>   
                       
                        <NavLink  className = "NavLinkTag" to="home-automation"> <img src={homeIcon} alt="" className='homeIcon' />
                        <span className='a'>Automation</span></NavLink>
                </li>
                </div>
            <div className='signInsignUp'>
                <li>
                    <NavLink className = "NavLinkTag" to="sign-in">SignIn</NavLink>
                </li>
                <li>
                <NavLink className ="NavLinkTag" to="sign-up">SignUp</NavLink>
                </li>
             </div>
            </ul>
        </nav>
        </div>
    )
}
export default AutomationLinks;