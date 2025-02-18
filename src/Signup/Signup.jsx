import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';


import useToken from '../hooks/useToken';
import { toast } from 'react-toastify';
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
    fetch('http:localhost:5000/users', {
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

        toast.success('User Created successful!')

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
    <form onSubmit={handleSubmit(handleSignUp)} className="hero pt-[200px] pb-[50px] min-h-screen ">

      <div className="hero-content flex-col lg:gap-40 lg:flex-row">
      <div className="text-center lg:text-left max-w-lg">
            <img className='login' src="https://i.gifer.com/IGCF.gif" alt="" />
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
                <h1 className="label-text-alt link link-hover text-lg">Already have an account ? <Link to="/login" className='text-lg font-semibold text-red-500'>Login</Link></h1>
              </label>
            </div>
            <div className="form-control" style={{ border: 'none', width: '100%' }}>
            <button className="btn btn-active text-white bg-[#65ad07] hover:bg-[#549401] w-full">Signup</button>
            </div>
          </div>
        </div>
      </div>
    </form >
  );
};

export default Signup;