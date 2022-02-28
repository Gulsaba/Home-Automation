import React, {useContext} from 'react';
import './Temperature.css'
import TempIcon from '../../Images/cooler.png'
import { AuthContext } from '../../StoredData/AuthContext';
const Temperature = ()=>{
    
    const ctx = useContext(AuthContext);
    const temp = ctx.temp;
    return(
<>
<img src={TempIcon} alt=""  className='TempIcon'/>
<span className='temp'>Temp °C</span>
<h3 className='degree'>{temp}°C</h3>

        </>
    )
}
export default Temperature;