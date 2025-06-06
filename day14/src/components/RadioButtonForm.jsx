import { useState } from "react"; 
 
const RadioButtonForm = () => { 
  const [gender, setGender] = useState(""); 
 
  return (     <form> 
      <label> 
 <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} /> 
        Male 
      </label>       <label> 
        <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} /> 
        Female 
      </label> 
      <p>Selected: {gender}</p> 
    </form> 
  ); 
}; 
 
export default RadioButtonForm; 
