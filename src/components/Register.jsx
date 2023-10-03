import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';


const Register = () => {
     
    const {createUser, signInWithGoogle} = useContext(AuthContext);
    
  

    const handleRegister = e => {
        e.preventDefault();
        const password = e.target.password.value;
        const email = e.target.email.value;
        const name = e.target.name.value;
        
        console.log(password, email, name);

        /// create user in firebase
        createUser(email, password)
        .then(result => {
            console.log(result.user)
            e.target.reset();
           
        })
        .catch(error => {
            console.log(error);
        })



    }

    const handleGoogleSignIn = () => {
      signInWithGoogle()
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register now!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">




            <form onSubmit={handleRegister} className="card-body">

            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name..." className="input input-bordered" required />
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>


              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>


         <p> Already account ? pls here  <Link to='/login' >
             <button className='btn btn-link'>Login</button>
            </Link> </p>
            <p> <button onClick={handleGoogleSignIn} className="btn bg-gray rounded-full p-5 ">google</button></p>



          </div>
        </div>
      </div>
    );
};

export default Register;