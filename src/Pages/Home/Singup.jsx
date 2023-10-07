import React, { useContext, useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import { authContext } from '../../shear/Auth/AuthProvider';


const Singup = () => {
    const {singup}=useContext(authContext)
    const [error,seterror]=useState('')
    const navegat=useNavigate()
    // const  special =/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    
    

    function handlSubmit(e) {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get('password');
        const name = form.get('name');
        if (password.length < 6) {
            const message = 'Password should be at least 6 characters';
            return seterror(message);
        }
        if (/[a-z]/.test(password)) {
            if (!/[A-Z]/.test(password)) {
                const message = "don't have a capital letter";
                return seterror(message);
            }

        }
        // if (special.test(password)) {
        //     return seterror('ont have a special character');
        // }
        e.currentTarget.reset();

        singup(email, password)
            .then(result => {
                console.log('Successfully singup');
                console.log(email, password, name, result);
                seterror('');
                navegat('/');
               
            })
            .catch(error => {
                console.error(error.message);
                seterror(error.message);
            });

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sing up now!</h1>
                   
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handlSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
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
                    <p>Have an account <span className='text-blue-600 font-bold'><Link to={'/login'}>Log in</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default Singup;