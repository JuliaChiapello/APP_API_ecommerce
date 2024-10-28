import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import axios from 'axios';


function GestionProductosIndex() {
    const navigate = useNavigate();
    const productosPorPagina = 10; //productos por pagina

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const [filtro, setFiltro] = useState('');


    useEffect(() => {
        setLoading(true); 
        axios.get('/producto/')
        .then((respuesta) => {
            setLoading(false);
            if (respuesta.status === 200) {
                setData(respuesta.data.data);
            }else{
                console.log('error');
            }
        })
        .catch((error) => {
            console.log('error', error);
        });
    }, []);


    const handleEdit = (id) => {
        navigate(`/admin/productos/${id}`);
    };

  
    const eliminarProducto = (id) => {
        axios.delete(`/producto/${id}`)
        .then((respuesta) => {
            if (respuesta.status === 200) {
                console.log('Producto eliminado con éxito');
                axios.get('/producto/')
                .then((respuesta) => {
                    setData(respuesta.data.data);
                })
                .catch((error) => {
                    console.log('Error al actualizar la lista de productos', error);
                });
            }else{
                console.log('Error al eliminar el producto', respuesta.status);
            }
        })
        .catch((error) => {
            console.log('Error al eliminar el producto', error);
        });
    };

  
    const handleDelete = (id) => {
        console.log(`Eliminar producto con id ${id}`);
        if (window.confirm(`¿Está seguro de eliminar el producto con id ${id}?`)) {
            eliminarProducto(id);
        }
    };


    const cambiarPagina = (pagina) => {
        setPaginaActual(pagina);
    };

    
    const calcularCantidadPaginas = () => {
        return Math.ceil(data.length / productosPorPagina);
    };

  
    const filtrarProductosSegunPagina = () => {
        const inicio = (paginaActual - 1) * productosPorPagina;
        const fin = inicio + productosPorPagina;
        return data.slice(inicio, fin);
    };

    return (
        <>
            <div className='p-6 text-2xl font-bold text-center text-white bg-red-600'>
                Gestión de Productos
            </div>
            {loading ? 'Cargando...' : ''}
            <div className='flex justify-center w-full mt-10'>
                <div className='w-1/4'>
                    <input
                        type='text'
                        className='w-full p-2 mb-4 border border-gray-400 rounded'
                        placeholder='Buscar por nombre'
                        value={filtro}
                        onChange={(e) => setFiltro(e.target.value)}
                    />
                </div>
                <div className='ml-5'>
                    <button
                        className='px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700'
                        onClick={() => navigate('/admin/productos/nuevo')}>
                            Agregar Producto
                    </button>
                </div>
            </div>
            <div className='m-5'>
                <table className='w-full border border-collapse border-gray-400 table-auto'>
                    <thead className='bg-gray-200'>
                        <tr>
                            <th className='px-4 py-2 border-2 border-gray-400'>ID</th>
                            <th className='px-4 py-2 border-2 border-gray-400'>Nombre</th>
                            <th className='px-4 py-2 border-2 border-gray-400'>Precio</th>
                            <th className='px-4 py-2 border-2 border-gray-400'>Cantidad</th>
                            <th className='px-4 py-2 border-2 border-gray-400'>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtrarProductosSegunPagina().filter((producto) =>
                            producto.nombre.toLowerCase().includes(filtro.toLowerCase())
                        ).map((producto) => (
                            <tr key={producto.id} className='border border-gray-400'>
                                <td className='px-4 py-2 border border-gray-400'>{producto.id}</td>
                                <td className='px-4 py-2 border border-gray-400'>{producto.nombre}</td>
                                <td className='px-4 py-2 border border-gray-400'>{producto.precio}</td>
                                <td className='px-4 py-2 border border-gray-400'>{producto.cantidad}</td>
                                <td className='px-4 py-2 border border-gray-400'>{producto.descripcion}</td>
                                <td className='px-4 py-2 text-center border border-gray-400'>
                                    <button
                                        className='px-4 py-2 mx-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
                                        onClick={() => handleEdit(producto.id)}
                                    >
                                        Editar Producto
                                    </button>
                                    <button
                                        className='px-4 py-2 mx-2 font-bold text-white bg-red-500 rounded hover:bg-red-700'
                                        onClick={() => handleDelete(producto.id)}
                                    >
                                        Eliminar Producto
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <div className='flex justify-center mt-5'>
                    {filtrarProductosSegunPagina().filter((producto) =>
                        producto.nombre.toLowerCase().includes(filtro.toLowerCase())
                    ).length === 0 ? (
                        <tr>
                            <td colSpan={5} className='px-4 py-2 text-center border border-gray-400'>
                                No se encontraron productos que coincidan con su búsqueda.
                            </td>
                        </tr>
                    ) :
                    <div>
                        {Array.from({ length: calcularCantidadPaginas() }, (_, i) => (
                            <button
                                key={i + 1}
                                className={`mx-2 py-2 px-4 rounded ${paginaActual === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
                                }`}
                                onClick={() => cambiarPagina(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                    }
                </div>
            </div>
        </>
    );
}

export default GestionProductosIndex
