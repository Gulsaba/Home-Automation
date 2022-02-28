
import React,{Fragment} from 'react'
import Humidity from './Humidity';
import Temperature from './Temprature';
import Time from './Time';

const NodeJsData=()=>{
   return(
       <Fragment>
           <Humidity/>
           <Temperature/>
           <Time/>
       </Fragment>
   )
}
export default NodeJsData