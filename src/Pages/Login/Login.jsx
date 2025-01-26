import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import useToken from '../../hooks/useToken';


const Login = () => {
  const { signIn } = useContext(AuthContext)
  const { register, handleSubmit } = useForm();
  const [loginUserEmail, setLoginUserEmail] = useState('')
  // console.log(loginUserEmail)
  const [token] = useToken(loginUserEmail)
  const navigate = useNavigate();

  if (token) {
    navigate('/')
  }

  const handleSignIn = (data) => {
    console.log(data)
    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        // console.log(user)
        setLoginUserEmail(data.email)
        toast.success('sign in successfully !')

      })
      .catch(error => {
        console.error(error.message)
      })
  }
  return (
    <>

      <form onSubmit={handleSubmit(handleSignIn)} className="hero min-h-screen pt-[200px] pb-[50px]">

        <div className="hero-content flex-col gap-40 p-30  lg:flex-row">
          <div className="text-center lg:text-left max-w-lg">
            <img className='login' src="https://irtrd.com/wp-content/uploads/2018/08/login.gif" alt="" />
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className='text-2xl font-bold text-center mt-4'>Login</h1>

            <div className="card-body">
              <div className="form-control" style={{ border: 'none' }}>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" {...register('email')} placeholder="email" className="input input-bordered w-full" />
              </div>
              <div className="form-control" style={{ border: 'none' }}>
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password"{...register("password")} className="input input-bordered w-full" />
                <label className="label">
                  <h2 className="label-text-alt link link-hover text-lg">Are you new here ? <Link to="/signup" className="text-xl font-semibold text-red-600">Signup</Link> </h2>
                </label>
              </div>
              <div className="form-control" style={{ border: 'none', width: '100%' }}>
                <button className="btn btn-active text-white bg-[#65ad07] hover:bg-[#549401] w-full">Login</button>
              </div>
            </div>
          </div>
        </div>
      </form>

    </>
  );
};

export default Login;