import React from 'react';
import logo from '../../images/logotipo_nm.png';
import "./body.css"

function Body() {
    return(
        <div clasName='main'>
            <div className='bodyLeft'>
                <h1><span>DA TU SIGUIENTE PASO, VENI A</span></h1>
                <img src={logo} alt="" />
                <h2><span>Planes personalizados</span></h2>
                <h2><span>Circuitos funcionales</span></h2>
            </div>
        </div>
    )
}

export default Body;