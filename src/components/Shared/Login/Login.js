import React from 'react';
import useAuth from '../../../hooks/useAuth';
import BannerImage from '../../../images/aboutImage.jpg'

const Login = () => {
    const {googleSignIn} = useAuth();
    return (
        <div className=" container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6 shadow p-5">
                    <div className="form-group">
                        <label htmlFor="">User Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="text-danger">Forgot your password?</label>
                    </div>
                    <div className="from-group mt-5">
                        <button onClick={googleSignIn} className="btn btn-primary" >Google Sign in</button>
                    </div>
                </div>
                <div className="col-md-6 d-none d-md-block">
                    <img className="img-fluid" src={BannerImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;