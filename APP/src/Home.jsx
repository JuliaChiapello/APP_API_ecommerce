import { useEffect, useState } from 'react';
import axios from 'axios';
import Listado from './Listado';
import './Home.css'


function Home() {
    const [loading, setLoading] = useState(false);
    const [verDisponibles, setVerdisponibles] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/producto/')
        .then((respuesta) => {   
            setLoading(false);
            if (respuesta.status === 200) {
                console.log("respuesta correcta", respuesta.data.data)
                setData(respuesta.data.data) 
            }else{
                console.log("error")
            }
        })
        .catch((error) => { 
            console.log("error", error)
        });
    },[verDisponibles])

    useEffect(() => {
        setLoading(true);
        axios.get('/producto/')
        .then((respuesta) => {
            setLoading(false);
            if (respuesta.status === 200) {
                console.log("respuesta correcta", respuesta.data.data)
                setData(respuesta.data.data)
            }else{
                console.log("error")
            }
        })
        .catch((error) => {
            console.log("error", error)
        });

    }, [])

    return (
        <>
            <div className='p-6 font-bold text-center bg-yellow-400'>
                APP Ecommerce
            </div>
            <div>
                <div>Filtros</div>
                <div> 
                    <button onClick={() => setVerdisponibles(!verDisponibles)} className='p-2 text-white bg-red-500 rounded-md'>
                        {verDisponibles ? "Mostrar disponibles" : "Mostrar no disponibles"}
                    </button> 
                </div>
            </div>
            {(loading == true) ?
                <div>Cargando...</div>
            :
                <div> <Listado items={data} /> </div>
            }
        </>
    )
}

export default Home
