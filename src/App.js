import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route , Outlet} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
<div className="flex flex-col min-h-screen">
  {/* Navbar */}
  <header>
    <Navbar />
  </header>

  {/* Main Content */}
  <main className="flex-grow">
    <Outlet />
  </main>

  {/* Footer */}
  <footer>
    <Footer />
  </footer>
</div>

  );
}

export default App;
