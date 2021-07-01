import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import CartWidget from '../CardWidget';
import './nav.css';


const NavBar = () => {

  
    return ( 
    <Fragment>
        <nav className="nav-extended">
        <div className="nav-wrapper">
          <p className="brand-logo logo-principal">Feria Americana!</p>
          <div className="right hide-on-med-and-down col s3">
            <CartWidget />
            </div>
        </div>
        <div className="nav-content">
          <ul className="tabs tabs-transparent">
            <li className="tab"><Link to='/'>Home</Link></li>
            <li className="tab"><Link to='/category/1' className="active">Tecnologia</Link></li>
            <li className="tab"><Link to='/category/2' className="active">Comics</Link></li>
            <li className="tab"><Link to='/category/3' className="active">Tiempo Libre</Link></li>
            <li className="tab"><Link to='/category/4' className="active">Otros</Link></li>
          </ul>
        </div>
      </nav>  
      </Fragment>
      );
}
 
export default NavBar;