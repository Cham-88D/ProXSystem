import React from "react"


export const  check = ()=> {
    const  v = localStorage.getItem("id")

    if(v===null)
    {
        return true
    }
    else
    {
        return false
    }
}


export   const user = ()=>
{
   const va =  localStorage.getItem("role")
    return va

}


