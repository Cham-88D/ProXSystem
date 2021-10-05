import React from "react"
import app  from "../config"
const auth = app.auth()
export const  log = async(email, password)=> {
  return auth.signInWithEmailAndPassword(email, password)
}

export const  logout= async()=> {
  localStorage.clear();
   await auth.signOut();
}

export const getImage =(x)=>{
    let st = app.storage();
    return st.refFromURL('https://storage.googleapis.com/download/storage/v1/b/procurementsystemx.appspot.com/o/x.jpg?generation=1633384829649313&alt=media').getDownloadURL().then((res)=>
    {console.log(res)})
}