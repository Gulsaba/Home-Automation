import React,{useContext} from 'react'
import { AuthContext } from '../../StoredData/AuthContext'
import './Humidity.css'
import cloudIcon from '../../Images/cloud.png'


const Humidity = ()=>{
    const ctx = useContext(AuthContext);
    const humidity = ctx.humidity;


return(
    <> 
        <img src={cloudIcon} alt=""  className='cloudIcon'/>
        <span className='humidity'>Humidity</span>

  <h2 className='h2'>{humidity}°C</h2>
 </>
)
}
export default Humidity;
