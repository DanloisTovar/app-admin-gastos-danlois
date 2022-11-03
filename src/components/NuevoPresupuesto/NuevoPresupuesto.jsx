import { React, useState } from 'react';

// importar componentes:
import ErrorValidacion from './ErrorValidacion';

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, children }) => {
    //  !crear hook para validacion de error:
    const [mensaje, setMensaje] = useState('');

    // validar datos ingresados:

    const handlePresupuesto = (e) => {
        e.preventDefault();
        if (!Number(presupuesto) || Number(presupuesto) < 0) {
            setMensaje('El presupuesto ingresado no es valido');
        } else {
            setMensaje('Presupuesto ingresado correctamente');
        }
    };
    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form onSubmit={handlePresupuesto} action="" className="formulario">
                <div className="campo">
                    <label htmlFor="presupuesto">Definir Presupuesto</label>

                    <input
                        className="nuevo-presupuesto"
                        type="text"
                        name="presupuesto"
                        placeholder="Ingrese su presupuesto"
                        value={presupuesto}
                        onChange={(e) => setPresupuesto(e.target.value)}
                    />

                    <input type="submit" value="Añadir" />

                    {mensaje && (
                        <ErrorValidacion tipo="error">
                            {mensaje}
                        </ErrorValidacion>
                    )}
                </div>
            </form>
        </div>
    );
};

export default NuevoPresupuesto;
