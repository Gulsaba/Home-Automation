import React from 'react'
import './NodeJs.css'
import Humidity from "./Humidity"
import Temperature from './Temprature'
import DateAndTime from './DateAndTime'
const NodeJs=()=>{
    return(
        <div className="container">     
    <div className="row">
      <div className="col-md-4"><Temperature/></div>
      <div className="col-md-4">< Humidity/></div>
      <div className="col-md-4 d"><DateAndTime/></div>
      
      
    </div>
    
        </div>
    )
}
export default NodeJs