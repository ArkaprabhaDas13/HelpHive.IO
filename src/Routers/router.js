import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import Card from '../Components/Card'
import App from '../App';
import List from '../Components/List'
import Payment from '../Components/Payment'
import Home from '../Components/Home'
import Login from '../Components/Login'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'
import Register from '../Components/Register'
import User from '../Components/User'
import AllServices from '../Components/AllServices';
import Profile from '../Components/Profile'
import About from '../Components/About'
import Contact from '../Components/Contact'
import { Provider } from 'react-redux';
import store from '../utils/store';
import Group from '../Components/Group';
import Map from '../Components/Map';
import Admin from '../Components/Admin';
import {createBrowserRouter, Route, Link, RouterProvider} from 'react-router-dom'

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
    ]}
])

export default router;