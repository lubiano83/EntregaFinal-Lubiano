/* CheckoutItem */

import { useState } from "react";

const CheckoutItem = ({type, name, label, handleInputChange}) => {

  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    handleInputChange(type, value); // Llama a la función de devolución de llamada con el tipo y el valor del input
  };

  console.log(inputValue);

  return (
    <article id="CheckoutItem">
        <label htmlFor="mail">{name}</label>
        <input type={type} name={name} placeholder={label} onChange={handleChange} required value={inputValue}/>
    </article>
  )
}; export default CheckoutItem;