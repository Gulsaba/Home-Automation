import React from 'react'
import './DateAndTime.css'
import timeIcon from '../../Images/timeIcon.png'
const DateAndTime =()=>{

    const date = new Date();

    let hr = date.getHours()
    let min = date.getMinutes()
        min = min.toString().padStart(2, '0')
        hr= hr.toString().padStart(2, '0')
    let Month = date.toLocaleDateString('en-US',{month:'long'})   
    const month= Month.slice(0, 3) 
    const hour = hr+":"+min
    const day = date.toLocaleDateString('en-US',{day:'2-digit'})
    const year = date.getFullYear()

const TimeObj = [hour, day, month, year]
   
    return(
<div>
<h1><img src={timeIcon} className="timeIcon"/>TODAY</h1>
<h2 className='hr'>{TimeObj[0]}</h2>
<div className='clocks'>
    <span className='span'>{TimeObj[1]}</span>
    <span className='span'>{TimeObj[2]}</span>
    <span className='span'>{TimeObj[3]}</span>
</div>
</div>
    )
}
export default DateAndTime;