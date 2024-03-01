/* Boton */

const Boton = ({label, handleClick}) => {
  return (
      <button className="boton" onClick={() => handleClick()}>{label}</button>
  )
}; export default Boton;
