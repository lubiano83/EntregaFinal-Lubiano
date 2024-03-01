/* Boton */

const Boton = ({label, handleClick, href}) => {
  return (
      <button className="boton" onClick={() => handleClick()} to={href} >{label}</button>
  )
}; export default Boton;
