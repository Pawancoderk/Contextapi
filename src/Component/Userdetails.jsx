import React, { useContext } from 'react'
import { UserContext } from '../context/Context'
import { useNavigate, useParams } from 'react-router-dom';

function Userdetails() {
const{id} = useParams()
const navigate = useNavigate()
const {user} = useContext(UserContext);

  return (
    <div className='flex flex-col text-center '>
      <h1 className=' text-4xl  p-2 text-white font-semibold'>{user[id].username}</h1>
      <h3 className=' text-orange-400 '>{user[id].city}</h3>
      <button onClick={()=>navigate("/user")} className='bg-sky-400 rounded-full p-3 text-white w-fit  pt-4'>Go back</button>
    </div>
  )
}

export default Userdetails