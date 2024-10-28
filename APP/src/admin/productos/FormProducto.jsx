import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const FormProducto = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);
    const [producto, setProducto] = useState({
        id: '',
        nombre: '',
        precio: 0,
        cantidad: 0,
        descripcion: ''
    });


    useEffect(() => {
        if (id !== 'nuevo') {
            const fetchProducto = async () => {
                try {
                    setLoading(true);
                    const respuesta = await axios.get('/producto/' + id);
                    setProducto(respuesta.data.data);
                    setLoading(false);
                }catch (error){
                    setError(error.message);
                    setLoading(false);
                }
            };
            fetchProducto();
        }else{
            setProducto({
                id: '',
                nombre: '',
                precio: 0,
                cantidad: 0,
                descripcion: ''
            });
        }
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProducto({ ...producto, [name]: value });    
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (id === 'nuevo') {
                const respuesta = await axios.post('/producto', producto);
                console.log(respuesta.data);
                navigate('/admin/productos');
            }else{
                const respuesta = await axios.put('/producto/' + id, producto);
                console.log(respuesta.data);
                navigate('/admin/productos');
            }
        }catch(error){
            setError(error.message);
        }
    };


    return (
        <div>
            <div className='p-6 text-2xl font-bold text-center text-white bg-red-600'>
                { producto.id ?  "Editar producto" : "Agregar nuevo producto"} 
            </div>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <div className="max-w-md p-5 mx-auto mt-10 bg-white rounded-lg shadow-md">
                <form onSubmit={handleSubmit}> 
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="nombre">
                            Nombre:
                        </label>
                        <input
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="nombre"
                            type="text"
                            name="nombre"
                            value={producto.nombre}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="precio">
                            Precio:
                        </label>
                        <input
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="precio"
                            type="number"
                            name="precio"
                            value={producto.precio}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="cantidad">
                            Cantidad:
                        </label>
                        <input
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="cantidad"
                            type="number"
                            name="cantidad"
                            value={producto.cantidad}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="descripcion">
                            Descripción:
                        </label>
                        <input
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="descripcion"
                            type="text"
                            name="descripcion"
                            value={producto.descripcion}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex justify-center'>
                        <button
                            className="px-4 py-2 mx-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Guardar
                        </button>
                        <button
                            className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={() => navigate('/admin/productos')}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
                </div>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default FormProducto;