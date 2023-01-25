import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../images/logotipo_nm.png';
import "../navbar/navbar.css"


function Navbar() {

    //const [nav,setnav] = useState(false);

  /*  const changeBackground = () => {
        if(window.scrollY >= 50) {
            setnav(true);
        }else{
            setnav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);*/

    return(
        <nav className={''}>
            <a href='/' className='logo'>
                <img src={logo} alt=''/>
            </a>
            
            <ul className='menu'>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to='/Nosotros'>Nosotros</Link></li>
                <li><Link to='Servicios'>Servicios</Link></li>
                <li><Link to='Sedes'>Sedes</Link></li>
                <li><Link to='Contacto'>Contacto</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;