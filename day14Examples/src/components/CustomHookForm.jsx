import { useState } from "react"; 
 
const useForm = (initialState) => {   const [values, setValues] = useState(initialState); const handleChange = (event) => { 
    setValues({ ...values, [event.target.name]: event.target.value }); 
  }; 
 
  return { values, handleChange }; 
}; 
 
// Usage Example 
const CustomHookForm = () => { 
  const { values, handleChange } = useForm({ name: "", email: "" }); 
 
  return (     <form> 
      <input type="text" name="name" value={values.name} onChange={handleChange} placeholder="Name" /> 
      <input type="email" name="email" value={values.email} 
onChange={handleChange} placeholder="Email" /> 
      <button type="submit">Submit</button> 
    </form> 
  ); 
}; 
export default CustomHookForm; 
