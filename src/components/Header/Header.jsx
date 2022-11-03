// !importar librerias:
import { React, useState } from 'react';

// !importar componentes:
import { NuevoPresupuesto } from '../NuevoPresupuesto';

const Header = ({ presupuesto, setPresupuesto }) => {
    return (
        <header>
            <h1>Proyecto de de administracion de gastos</h1>

            <NuevoPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
            />
        </header>
    );
};

export default Header;
