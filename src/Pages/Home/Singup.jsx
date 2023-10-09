import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { authContext } from '../../shear/Auth/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { BsGoogle } from "react-icons/bs";


const Singup = () => {
    const {singup,googlelogin}=useContext(authContext)
    const [error,seterror]=useState('')
    const location=useLocation()
    const navegat=useNavigate()

    const go=()=>{
        navegat(location?.state ? location.state : '/');
    }
    // const  special =/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    
    

    function handlSubmit(e) {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get('password');
        const name = form.get('name');
        const profile=form.get('img')
        if (password.length < 6) {
            const message = 'Password should be at least 6 characters';
            return seterror(message);
        }
        
            if (!/[A-Z]/.test(password)) {
                const message = "don't have a capital letter";
                return seterror(message);
            }

        
        // if (special.test(password)) {
        //     return seterror('ont have a special character');
        // }
        e.currentTarget.reset();

        singup(email, password,name,profile)
            .then(result => {
                toast.success('🦄 sing up successfully!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });


                console.log('Successfully singup');
                console.log(email, password, name, result);
                seterror('');
                go()
               
               
            })
            .catch(error => {
                console.error(error.message);
                seterror(error.message);
            });

    }
    const handlgoogle=e=>{
        e.preventDefault();
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
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sing up now!</h1>
                   
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="px-8 pt-8" onSubmit={handlSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Profile picture</span>
                            </label>
                            <input type="text" name='img' placeholder="img url" className="input input-bordered" required />
                        </div>
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
                            <span className='text-red-500'>
                                {
                                    error?<p>{error}</p>:<p></p>
                                }
                            </span>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sing up</button>
                        </div>
                    </form>

                    <div className='px-8 pb-8 pt-3 rounded-b-md'>
                    <button onClick={handlgoogle} className="mb-4 btn btn-success text-white w-full"><BsGoogle></BsGoogle> Google</button>

                    <p>Have an account <span className='text-blue-600 font-bold '><Link to={'/login'}>Log in</Link></span></p>
                    </div>
                    
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
    );
};

export default Singup;