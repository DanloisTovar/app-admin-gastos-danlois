// ! import librerias:
import { useState } from 'react';

// !import estilos:
import '../styles/App.css';

// !importar componentes:
import { Header, NuevoPresupuesto } from '../components';

function App() {
    // !definir el state:
    const [presupuesto, setPresupuesto] = useState(0);
    const [restante, setRestante] = useState(0);

    return (
        <div className="App">
            <Header presupuesto={presupuesto} setPresupuesto={setPresupuesto} />
        </div>
    );
}

export default App;
