/* Dropdown */

const Dropdown = ({handleClick}) => {
  return (
    <div className="dropdown">
        <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list svg" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
        </button>
        <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#productos__contenedor" onClick={() => handleClick("Todos")}>todos</a></li>
            <li><a className="dropdown-item" href="#productos__contenedor" onClick={() => handleClick("Pelotas")}>pelotas</a></li>
            <li><a className="dropdown-item" href="#productos__contenedor" onClick={() => handleClick("Grips")}>grips</a></li>
            <li><a className="dropdown-item" href="#productos__contenedor" onClick={() => handleClick("Calcetines")}>calcetines</a></li>
            <li><a className="dropdown-item" href="#productos__contenedor" onClick={() => handleClick("Protectores")}>protectores</a></li>
            <li><a className="dropdown-item" href="#productos__contenedor" onClick={() => handleClick("Palas")}>palas</a></li>
        </ul>
    </div>
  )
}; export default Dropdown;
