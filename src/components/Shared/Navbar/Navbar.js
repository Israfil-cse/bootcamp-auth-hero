import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import carLogo from '../../../images/654.jpg'
const Navbar = () => {
    const {logOut, user} = useAuth();
    console.log(user);
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="d-flex">
                        <img src={carLogo} style={{ height: '50px', width: '100px' }} alt="" />
                        <h1 className="navbar-brand">MAMA <br />JABEN?</h1>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">

                            <Link to="/home" className="nav-link">Home</Link>
                            <Link to="/service" className="nav-link">About us</Link>
                            <Link to="/home" className="nav-link">Vehicles</Link>
                            {
                                <Link to="/bookingsList" className="nav-link">User Dashboard</Link>
                            }
                            {
                                <Link to="/admin/orderList" className="nav-link">Admin</Link>
                            }
                                 <Link to="/home" className="nav-link">Contact</Link>
                            { user.email?
                                <Link to="/login">
                                <button onClick={logOut} className="btn btn-warning me-2" >Log-out</button>
                                </Link>
                                :
                                <Link to="/login">
                                <button className="btn btn-warning me-2" >Log In</button>
                                </Link>

                            }
                            {<button className="btn btn-success"></button>}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;