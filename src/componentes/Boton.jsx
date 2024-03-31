/* Boton */

const Boton = ({label, href, handleClick, name, type}) => {
  return (
      <button id="Boton" to={href} onClick={handleClick} name={name} type={type}>{label}</button>
  )
}; export default Boton;
