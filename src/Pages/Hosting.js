// Home.js
import React from 'react';
import Header from '../components/Header';
import { useTranslation } from 'react-i18next';
import HostingContainer from '../components/Hosting';
import Footer from '../components/Footer';
import BottomNavTwo from '../components/BottomNavTwo';

function Hosting() {
  const { t, i18n } = useTranslation();
  return (
    <div>
         <Header/>
         <HostingContainer/>
         <BottomNavTwo/>
         <Footer/>
    </div> 
   
   
  );
}

export default Hosting;
