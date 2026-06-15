// Home.js
import React from 'react';
import Header from '../components/Header';
import HomeContainer from '../components/HomeContainer';
import Footer from '../components/Footer';
import BottomNavigationBar from '../components/BottomNav';


function Home() {
  return (
    <div>
      <Header/>
      <HomeContainer/> 
      <BottomNavigationBar/>
      <Footer/>
    </div> 
  )
  ; 
}

export default Home;
