import React from 'react';
import './Navegacion.css';
import { NavLink } from 'react-router-dom'
const Navegacion = () => {
    return (
        <div className="navegacion">
            <NavLink to={'/nosotros'} activeClassName="activo">Nosotros</NavLink>
            <NavLink to={'/productos'} activeClassName="activo">Productos</NavLink>
            <NavLink to={'/contacto'} activeClassName="activo">Contactos</NavLink>
        </div>
    )
}
export default Navegacion;