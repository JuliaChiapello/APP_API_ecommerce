
import { Outlet, Link, useLocation } from 'react-router-dom';

function LayoutAdmin(){

  	return (
    	<div>
        	<div className='p-1 font-bold text-center text-white bg-black'>
          		Panel de Control
        	</div>
        	<nav className="py-2 bg-gray-200">
          		<ul className="flex justify-center space-x-4">
          			<li>
          				<Link to="/" className={`text-black hover:text-red-500 transition duration-300 ${useLocation().pathname === '/' ? 'text-yellow-500' : ''}`}>
            				Home
          				</Link>
        			</li>
        			<li>
          				<Link to="/admin" className={`text-black hover:text-red-500 transition duration-300 ${useLocation().pathname === '/admin' ? 'text-yellow-500' : ''}`}>
            				Admin
          				</Link>
        			</li>
        			<li>
          				<Link to="/admin/productos" className={`text-black hover:text-red-500 transition duration-300 ${useLocation().pathname === '/admin/productos' ? 'text-yellow-500' : ''}`}>
            				Productos
          				</Link>
        			</li>     
        			<li>
          				<Link to="/admin/productos/nuevo" className={`text-black hover:text-red-500 transition duration-300 ${useLocation().pathname === '/admin/productos/nuevo' ? 'text-yellow-500' : ''}`}>
            				Agregar Producto
        				</Link>
        			</li>
        		</ul>
      		</nav>
      		<Outlet />
    	</div>
  	)
}

export default LayoutAdmin
