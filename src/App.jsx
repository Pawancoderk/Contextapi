import Home from "./Component/Home"
import { Routes,Route, NavLink} from 'react-router-dom'
import User from "./Component/User";
import About from "./Component/About";
import Userdetails from "./Component/Userdetails";

function App() {
 

  return (
    <div className="p-1 m-auto w-1/2">
     <nav className="mt-10 flex justify-center gap-10">
      <NavLink style={(e)=>{
        return{
          color:e.isActive ? "orange" :"",
          fontWeight:e.isActive ? "bold":"",
        }
      }} to={"/"}>Home </NavLink>
      <NavLink style={(e)=>{
        return{
          color:e.isActive ? "orange" :"",
          fontWeight:e.isActive ? "bold":"",
        }
      }} to={"/user"}>User </NavLink>
      <NavLink style={(e)=>{
        return{
          color:e.isActive ? "orange" :"",
          fontWeight:e.isActive ? "bold":"",
        }
      }} to={"/about"}>About </NavLink>
     </nav>

     <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/user/:id" element={<Userdetails/>}/>
      <Route path="/about" element={<About/>}/>
     </Routes>
    
    </div>
  );
};

export default App
