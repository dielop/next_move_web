import React from 'react';
import { Link } from 'react-router-dom'
import "../footer/footer.css";

function Footer() {
    return(
        <div className='main'>
            <Link to='#'><p>Developed By</p></Link>
        </div>
    )
}

export default Footer;