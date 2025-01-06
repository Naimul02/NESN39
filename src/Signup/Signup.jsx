import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

import { toast } from 'react-hot-toast';
import useToken from '../hooks/useToken';
const Signup = () => {
  const { createUser, profileUpdate, emailVerification } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [creactedUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(creactedUserEmail);
  const navigate = useNavigate();



  if (token) {
    navigate('/');
  }

  const handleSignUp = (data) => {
    // console.log("data", data)
    const users = {
      name: data.name,
      email: data.email,
      photourl: data.photourl
    }
    fetch('https://departmental-store-server.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(users)
    })
      .then(res => res.json())
      .then(data => {
        setCreatedUserEmail(users.email)
      })

    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log("USER", user)

        toast.success('user created successfully')

        const userInfo = {
          displayName: data.name,
          photoURL: data.photourl
        }

        console.log("userinfo", userInfo)
        profileUpdate(userInfo)
          .then(() => { })
          .catch(() => { })






        emailVerification()
          .then(() => { })
          .catch(() => { })
      })



      .catch(error => {
        console.error(error.message)
      })


  }
  return (
    <form onSubmit={handleSubmit(handleSignUp)} className="hero min-h-screen ">

      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className='login' src="https://static.vecteezy.com/system/resources/previews/005/879/539/original/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg" alt="" />
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className='text-2xl font-bold text-center mt-4'>SignUp</h1>

          <div className="card-body">
            <div className="form-control" style={{ border: 'none' }}>


              <input {...register("name", { required: true })} type="text" placeholder="Enter Your Name" className="input input-bordered w-full" />
            </div>
            <div className="form-control" style={{ border: 'none' }}>

              <input {...register('photourl', { required: true })} type="text" placeholder="Photo URL" className="input input-bordered w-full" />
            </div>
            <div className="form-control" style={{ border: 'none' }}>

              <input {...register("email", { required: true })} type="email" placeholder="Enter Your Email" className="input input-bordered w-full" />
            </div>
            <div className="form-control" style={{ border: 'none' }}>

              <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered w-full" />
              <label className="label">
                <h1 className="label-text-alt link link-hover text-lg">Forgot password? <Link to="/login" className='text-lg font-semibold text-red-500'>Login</Link></h1>
              </label>
            </div>
            <div className="form-control" style={{ border: 'none', width: '100%' }}>
              <button className="btn btn-active btn-secondary w-full ">Signup</button>
            </div>
          </div>
        </div>
      </div>
    </form >
  );
};

export default Signup;