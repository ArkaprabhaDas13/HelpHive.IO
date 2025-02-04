import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Components/Card'
import App from './App';
import List from './Components/List'
import Payment from './Components/Payment'
import Home from './Components/Home'
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, Route, Link, RouterProvider} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import Register from './Components/Register'
import User from './Components/User'
import AllServices from './Components/AllServices';
import Profile from './Components/Profile'
import About from './Components/About'
import Contact from './Components/Contact'
import { Provider } from 'react-redux';
import store from './utils/store';
import Group from './Components/Group';
import Map from './Components/Map';
import Admin from './Components/Admin';


const Login = lazy(()=>(import('./Components/Login')))


const router = createBrowserRouter([
  {
    path: '/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path:'/list/:category',
        element:<List/>
      },
      {
        path:'/payment',
        element:<Payment/> 
      },
      {
        path:'/login',
        element:(
          <Suspense fallback={<h1>Loading .....</h1>}>
            <Login/>
          </Suspense>
        )
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/profile',
        element:<Profile/>
      },
      {
        path:'/user',
        element:<User/>
      },
      {
        path:'/services/:service',
        element:<AllServices/> 
      },
      {
        path:'/group',
        element:<Group/>
      },
      {
        path:'/map',
        element:<Map/>
      },
      {
        path:'/admin',
        element:<Admin/>
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
