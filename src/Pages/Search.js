// Home.js
import React from 'react';
import Header from '../components/Header';
import { useTranslation } from 'react-i18next';
import SearchComponent from '../components/SearchComponent';
import Footer from '../components/Footer';
import BottomNavTwo from '../components/BottomNavTwo';

function Search() {
  const { t, i18n } = useTranslation();
  return (
    <div>
         <Header/>
         <SearchComponent/>
         <BottomNavTwo/>
        <Footer/>
    </div> 
   
   
  );
}

export default Search;
