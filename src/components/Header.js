import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './Themetoggle';
import './App.css';


function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const [selectedLanguage, setSelectedLanguage] = useState('en'); // State to manage selected language

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    const lng = savedLanguage || navigator.language;
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng); // Set the selected language in state
  }, [i18n, location.pathname]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng); // Set the selected language in state
    localStorage.setItem('selectedLanguage', lng); // Store selected language in local storage
  };


  const handleLanguageChange = (event) => {
    const selectedValue = event.target.value;
    changeLanguage(selectedValue);
  };
 

  return (
  
      <nav className="fixed top-0 z-20 w-full bg-white dark:bg-gray-900 start-0 dark:border-gray-600 ">
<div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
  
  <Link to="/" className="flex items-center">
        <img src={require('../assets/logowhitebow.png')} alt='imaged' className="h-20 lg:hidden sm:hidden dark:block" />
        <img src={require('../assets/Logo.png')} alt='images' className="h-16 sm:visible lg:visible dark:hidden" />
  </Link>
    
  <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
    <Link to="/faq" className='flex items-center justify-center'>
    <button type="button" className="hidden px-6 mr-4 text-black bg-white dark:hover:text-white hover:text-black dark:bg-gray-900 dark:text-white sm:block">
    {t('link.linkFour')}
    </button>  
    </Link>
    
   

    <select
     style={{ fontFamily: "bodyfont" }} 
        className="px-3 py-1 text-black bg-white border border-gray-300 rounded-md dark:bg-gray-900 dark:text-white"
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        <option value="en">English</option>
        <option value="ar">Arabic</option>
        {/* Add more languages if needed */}
      </select>

    <ThemeToggle/>
    

    
    <button
      data-collapse-toggle="navbar-sticky"
      type="button"
      className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-sticky"
      aria-expanded="false"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
  </div>

  <div  className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
          isMenuOpen ? '' : 'hidden'
        }`} // Use hidden class based on isMenuOpen state
        id="navbar-sticky">
    <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    <li>
        <Link to="/" className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
        {t('link.linkOne')}
        </Link>
      </li>
      
   
     
      
      <li>
        <Link to="/hosting" className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
        {t('link.linkTwo')}
        </Link>
      </li>

     


     
      <li>
        <Link to="/faq" className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
        {t('link.linkThree')}
        </Link>
      </li>
      <li>
        <Link to="/assurance" className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
        {t('link.linkOther')}
        </Link>
      </li>

      <li>
        <Link to="/contact" className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
        {t('link.linkSix')}
        </Link>
      </li>

      

    </ul>

  

   
  </div>
</div>
</nav>


  
  )
}

export default Header;
