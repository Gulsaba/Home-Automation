import React from 'react'

// reateContext

export const AuthContext= React.createContext({
    temp:23,
    humidity:31,
    f:false, 
    t:true
})

const DataContextProvider=(props)=>{
    const data ={
        temp:21,
        humidity:31,
        f:false, 
        t:false
    }
    //fireEmergency
    //t=>theft emergency


    return(
        <AuthContext.Provider value = {data}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default DataContextProvider;


  