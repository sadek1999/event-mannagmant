import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Login = () => {
    const handlSubmit=e=>{
        e.preventDefault();
       
        const form=new FormData(e.currentTarget)
        const email=form.get("email");
        const password=form.get('password')
        e.currentTarget.reset()
        console.log(email,password)
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                   
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handlSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p>Have an account <span className='text-blue-600 font-bold'><Link to={'/singup'}>Sing Up</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;