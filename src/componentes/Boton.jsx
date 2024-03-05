/* Boton */

const Boton = ({label, href, handleClick}) => {
  return (
      <button className="boton" to={href} onClick={handleClick}>{label}</button>
  )
}; export default Boton;
