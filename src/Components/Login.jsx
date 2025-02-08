import React, {useState, useEffect} from 'react'


const Login = () => {


  
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-blue-400 to-pink-300">
        <div className="bg-white/30 backdrop-blur-md border border-white/20 rounded-lg shadow-lg p-8 w-full max-w-sm">
          <h1 className="text-xl font-semibold text-white mb-4">Login</h1>
          
          {/* <h2 className="text-lg text-white mb-6">{loggedUser}</h2> */}

          <input 
            className="w-full bg-white/20 text-white border border-white/30 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-white/70"  
            type="text" 
            placeholder="Username" 
          />
          
          <input 
            className="w-full bg-white/20 text-white border border-white/30 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-white/70" 
            type="password" 
            placeholder="Password" 
          />
          
            <input 
              className="w-full bg-white/20 text-white border border-white/30 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-white/70" 
              type="password" 
              placeholder="Confirm Password" 
            />

          <button 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md p-2 mb-4 transition">
            Login
          </button>

          <div className="text-center">
            <button 
              className="bg-white/20 text-white border border-white/30 rounded-md py-2 px-4 transition hover:bg-white/30"
            >
              Login Here
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login



