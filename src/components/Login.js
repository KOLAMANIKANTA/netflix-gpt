import React, { useState ,useRef} from 'react'
import Header from './Header'
import { validateData ,validateName} from '../utils/validate';

const Login = () => {

  const [isSignInForm,setIsSignInForm]= useState(true);
  const [error,setError]=useState(null);
  const name =useRef(null);
  const email =useRef(null);
  const password =useRef(null);

  const handleButtonClick=()=>{

    if (!isSignInForm) {

      const nameError = name.current ? validateName(name.current.value) : null;
      const emailError = validateData(
        email.current.value,
        password.current.value
      );
      setError(nameError || emailError);
      
    } else {
      const message = validateData(email.current.value, password.current.value);
      setError(message);
    }

  }

  const toggleSignInForm = () => {

    setIsSignInForm(!isSignInForm);

  }
  return (
    <div>
        <Header/>
        <img
        className='absolute'
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="logo"
        />
        <form
        onSubmit={(e)=>e.preventDefault()}
        className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'
        >
          <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In":"Sign Up"}</h1>
          {!isSignInForm && 
          <input
          ref={name}
          type='text'
          placeholder='Full Name'
          className='p-4 my-4 w-full bg-gray-700'
          />}
          <input
          ref={email}
          type='text'
          placeholder='Email Address'
          className='p-4 my-4 w-full bg-gray-700'
          />
          <input
          ref={password}
          type='password'
          placeholder='Password'
          className='p-4 my-4 w-full bg-gray-700'
          />
          <p>{error}</p>
          <button className="p-4 my-6 bg-red-700 w-full"
          onClick={handleButtonClick}>
            {isSignInForm ? "Sign In":"Sign Up"}
          </button>

          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered ? Sign In Now."}
          </p>

        </form>
    </div>
  )
}

export default Login