import React, {useState, useEffect} from 'react'
import useLogin from '../hooks/useLogin'
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../utils/firebase-config';
import { useSelector } from 'react-redux';
import { switchState, setLoggedUser, setLogin} from '../utils/loginSlice';
import { useDispatch } from 'react-redux';
import { Link , useNavigate} from 'react-router-dom';


const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {text , verify} = useLogin();
  
  const auth = getAuth();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loggedStatus, setLoggedStatus] = useState(false)

  const loginStatus = useSelector((store)=>store.login.loginState)
  const loggedUser = useSelector((store)=>store.login.loggedUser)
  console.log("LoginStatus = ", loginStatus)

  useEffect(()=>{
    // The updated value of the state will only be available after React completes the current render and triggers a re-render of the component.
      // console.log(text)
    }, [text]) 

  
  // console.log("Login status = ", loginStatus)

  //REGISTER using Firebase
  const handleRegisterClick = ()=>{
    createUserWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }

    //LOGIN using Firebase
  const handleLoginClick = ()=>{
    
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Login successful
        const user = userCredential.user;
        console.log("User Logged In: ", user);
        console.log("Login successful!");
        console.log("User EMAIL = ", user.email)
        dispatch(setLoggedUser(user.email))
        dispatch(setLogin())

        //////// HERE , AFTER the LOGIN is successful, redirect to another page ////////

          ///// code here (redirect)
          navigate('/')

        ////////////////////////////////////////////////////////////////////////////////
      })
      .catch((error) => {
        // Handle Errors here
        console.log("Wrong credentials")
        console.log("Error Code: ", error.code);
        console.log("Error Message: ", error.message);
        // console.error(`Error: ${error.message}`);
      });
  }
  
  return (
    <div>


<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-blue-400 to-pink-300">
  <div className="bg-white/30 backdrop-blur-md border border-white/20 rounded-lg shadow-lg p-8 w-full max-w-sm">
    <h1 className="text-xl font-semibold text-white mb-4">{loginStatus?"Login":"Register"}</h1>
    
    <h2 className="text-lg text-white mb-6">{loggedUser}</h2>

    <input 
      className="w-full bg-white/20 text-white border border-white/30 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-white/70" 
      onChange={(e) => setUsername(e.target.value)} 
      type="text" 
      placeholder="Username" 
    />
    
    <input 
      className="w-full bg-white/20 text-white border border-white/30 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-white/70" 
      onChange={(e) => setPassword(e.target.value)} 
      type="password" 
      placeholder="Password" 
    />
    
    {!loginStatus && (
      <input 
        className="w-full bg-white/20 text-white border border-white/30 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-white/70" 
        onChange={(e) => setPassword(e.target.value)} 
        type="password" 
        placeholder="Confirm Password" 
      />
    )}

    <button 
      onClick={loginStatus ? handleLoginClick : handleRegisterClick} 
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md p-2 mb-4 transition"
    >
      {loginStatus ? "Login" : "Register"}
    </button>

    <div className="text-center">
      <button 
        className="bg-white/20 text-white border border-white/30 rounded-md py-2 px-4 transition hover:bg-white/30"
        onClick={() => dispatch(switchState())}
      >
        {loginStatus ? "Register here" : "Login here"}
      </button>
    </div>
  </div>
</div>


    </div>
  )
}

export default Login



