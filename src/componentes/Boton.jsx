/* Boton */

const Boton = ({label, href}) => {
  return (
      <button className="boton" to={href} >{label}</button>
  )
}; export default Boton;
