import { useState } from "react"; 
 
const ControlledForm = () => { 
  const [name, setName] = useState(""); 
 
  const handleChange = (event) => { 
    setName(event.target.value); // Updates state on every input change 
  }; 
  return ( 
<div> 
      <input type="text" value={name} onChange={handleChange} /> 
      <p>Typed Name: {name}</p> 
    </div> 
  ); 
}; 
 
export default ControlledForm; 
