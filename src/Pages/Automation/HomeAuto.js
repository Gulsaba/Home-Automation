
import './HomeAuto.css'
import React,{useContext, useState} from 'react'
import { AuthContext } from '../../StoredData/AuthContext'
const HomeAuto=()=>{
    const ctx = useContext(AuthContext);
    const [Switch1, setSwitch1] = useState(false)
    const [Switch2, setSwitch2] = useState(false)
    const [Switch3, setSwitch3] = useState(false)
    const [Switch4, setSwitch4] = useState(false)
    const [SwitchL, setSwitchL] = useState(false)
    const [SwitchR, setSwitchR] = useState(false)

const Switch1_Handler=()=>{
    if(Switch1===false){
        setSwitch1(true);
    }
    else{
        setSwitch1(false);
    }
   
}
const Switch2_Handler=()=>{
    if(Switch2===false){
        setSwitch2(true);
    }
    else{
        setSwitch2(false);
    }
    
}
const Switch3_Handler=()=>{
    if(Switch3===false){
        setSwitch3(true);

    }
    else{
        setSwitch3(false);

    }
}
const Switch4_Handler=()=>{
   if(Switch4===false){
    setSwitch4(true);

   }
   else{
    setSwitch4(false);

   }
}
const SwitchL_Handler=()=>{
    if(SwitchL===false){
        setSwitchL(true);

    }
    else{
        setSwitchL(false);
 
    }
}
const SwitchR_Handler=()=>{
    if(SwitchR===false){
        setSwitchR(true);
    }
    else{
        setSwitchR(false);
    }
    setSwitch1(false); 
    setSwitch2(false);
    setSwitch3(false);
    setSwitch4(false);
    setSwitchL(false);
}


 const switchesValue = {
     s0:Switch1,
     s1:Switch2,
     s2:Switch3,
     s3:Switch4,
     l:SwitchL,
     r:SwitchR,

 }

 //console.log(switchesValue)
  

// bump class 
const bumpClasses1 = `${"col-6"}  ${ Switch1 ? "bump":""}`
const bumpClasses2 = `${"col-6"}  ${ Switch2 ? "bump":""}`
const bumpClasses3 = `${"col-6"}  ${ Switch3 ? "bump":""}`
const bumpClasses4 = `${"col-6"}  ${ Switch4 ? "bump":""}`
const bumpClassesL = `${"col-6"}  ${ SwitchL ? "bump":""}`
const bumpClassesR = `${"col-6"}  ${ SwitchR ? "bump":""}`
 
    return(
        <>
        <h1>Smart home chain management system</h1>
        <hr/>
        <div className="container con">
            <div className="row first">
            <div className="col" ><h4>Tempreture {ctx.temp}°C</h4></div>
            <div className="col"><h4>Humidty {ctx.humidity}°C</h4></div>
           </div>
    <div className="row 2">

        <div className= {bumpClasses1} onClick={Switch1_Handler}>Switch 1</div>
        <div className={bumpClasses2} onClick={Switch2_Handler}>Switch 2</div>
        <div className={bumpClasses3} onClick={Switch3_Handler}>Switch 3</div>
        <div className={bumpClasses4} onClick={Switch4_Handler}>Switch 4</div>
        <div className={bumpClassesL} onClick={SwitchL_Handler}>Lock</div>
        <div className={bumpClassesR} onClick={SwitchR_Handler}>Reset</div>
    </div>
  </div>
        </>
    )
}
export default HomeAuto