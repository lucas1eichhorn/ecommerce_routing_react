import React from 'react';
import './Contacto.css'
const Contacto = (props) => {
    return (
        <form>
            <legend>Formulario de contacto</legend>
            <div className="input-field">
                <label>Nombre:</label>
                <input type="text" placeholder="Nombre" />
            </div>
            <div className="input-field">
                <label>Email:</label>
                <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
                <label>Mensaje:</label>
                <textarea></textarea>
            </div>
            <div className="input-field enviar">
                <input type="submit" value="Enviar" />
            </div>
        </form>)
}
export default Contacto;