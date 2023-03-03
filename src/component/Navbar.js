import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className='container'>
                <div className="container-fluid">
               <h1> Hello World!</h1>
                  
               <Link className="nav-link"  to="/Mens">Mens
                                </Link>
                                <Link className="nav-link"  to="/ Womens">Womens
                                </Link>
                                <Link className="nav-link"  to="/Kids">Kids
                                </Link>
                       
                           
                                <Link className="nav-link active" aria-current="page" to="/">
                                </Link>
                           
                                <Link className="nav-link" to="/Login">
                                    </Link>
                                    <Link className="nav-link" to="/LogOut">Log Out
                                    </Link>
                            
                                <Link className="nav-link" to="/Register">
                                   </Link>
                               <Link className="nav-link" to="/Home">Home
                                    </Link>
                            
                       


                   
                </div>
            </div>

        </nav>
    )

}

export default Navbar;