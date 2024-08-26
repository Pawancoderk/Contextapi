import { createContext, useState } from "react";

export const UserContext =  createContext()

const Context = (props)=> {
const [user,setuser] = useState([
    {id :0, username:"Kirat" ,city:"AGRA"},
    {id :1, username:"Anupam" ,city:"RAJASTHAN"},
    {id :2, username: "Anil",city:"DELHI"}
  ])

  return(
   <UserContext.Provider  value={{user,setuser}}>
    {props.children} 
    </UserContext.Provider>  
  );
}

export default Context