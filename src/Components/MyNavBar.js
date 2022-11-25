
import {  NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
const textStyle = {
  textDecoration: "none",
  color:"black",
}
const MyNavBar = () => {
  return (
    <div>
      <div className='navbar'>
    
          <li  ><NavLink style={textStyle} to="/">Home</NavLink></li>
          <li  ><NavLink style={textStyle} to="/imc-calculator">IMC Calculator</NavLink></li>
          <li  >Age Calculator</li>
        <li className="MyNavBar-kruger"><img src={logo}/>Kruger Star</li>
          <li >My Clock</li>
          <li>About Me</li>
          <li>Contact</li>
  

      </div>
      <div className="line" />
    </div>
  );
}

export default MyNavBar;