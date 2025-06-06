import { useState } from "react"; const SelectForm = () => { 
  const [fruit, setFruit] = useState("apple");   return (     <form> 
      <select value={fruit} onChange={(e) => setFruit(e.target.value)}> 
        <option value="apple">Apple</option> 
        <option value="banana">Banana</option> 
        <option value="mango">Mango</option> 
      </select> 
      <p>Selected Fruit: {fruit}</p> 
    </form> 
  ); 
}; 
export default SelectForm; 
