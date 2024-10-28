function Listado(props) {
    const { items } = props;

    return (
        <div className="p-5">
            filtros 2
            <div className=' *: font-bold   text-center p-6'>
                Listado de productos
            </div>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4 xl:grid-cols-6" >
                {items.map((producto, index) =>
                    <div key={producto.id} className="relative group">
                        <div className="w-full overflow-hidden bg-gray-200 rounded-md aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            aca imagen
                        </div>
                        <div className="flex justify-between mt-4">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <a href={producto.href}>  
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {producto.nombre}
                                    </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500"> color </p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">{producto.nombre}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Listado
