import React from 'react';
import "./Home.css";
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';


const Home = () => {
  return (
    <main>
        <Header />
      
        <Outlet />
        <div className='list'>
       <ul  >
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>ANGULAR</li>
        <li>RAECT</li>
      </ul>
       </div>
    </main>
  )
}

export default Home
