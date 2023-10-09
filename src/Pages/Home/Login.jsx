import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../Navbar/Navbar';
import { authContext } from '../../shear/Auth/AuthProvider';
import { BsGoogle } from "react-icons/bs";

const Login = () => {
    const { login ,googlelogin} = useContext(authContext)
    const [error, seterror] = useState('')
    const location = useLocation()
    
    const navigate = useNavigate()
    const go=()=>{
        navigate(location?.state ? location.state : '/');
    }

    const handlSubmit = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget)
        const email = form.get("email");
        const password = form.get('password')
        e.currentTarget.reset()

        login(email, password)
            .then(result => {

                toast.success('🦄 Login Successfully!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                console.log('successfully login', result)
                go()
            })
            .catch(error => {
                console.error(error.message)
                seterror(error.message)
            })
    }


    const handlgoogle = e => {
        e.preventDefault()
        googlelogin()
        .then(result=>{
            toast.success('🦄 Login Successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            console.log('successfully login', result)
            go();
        })
        .catch(error => {
            console.error(error.message)
            seterror(error.message)
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                        <form onSubmit={handlSubmit} className="px-8 pt-8">
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
                            {
                                error ? <span className='text-red-500'>{error}</span> : <span></span>
                            }
                            <div className="form-control mt-6 space-y-2">

                                <button className="btn btn-primary">Login</button>


                            </div>
                        </form>
                        <div className='px-8 pb-8 pt-3 rounded-b-md'>
                        <button onClick={handlgoogle} className="mb-4 btn btn-success text-white w-full"><BsGoogle></BsGoogle> Google</button>
                        <p>Are you new ? <span className='text-blue-600 font-bold'><Link to={'/singup'}>Sing Up</Link></span></p>
                        </div>
                        

                    </div>

                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;