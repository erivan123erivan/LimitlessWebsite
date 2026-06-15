import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t, i18n } = useTranslation();
  
  return (
    <footer className="bg-white dark:bg-gray-800 app-sms">
    <div className="max-w-screen-xl p-4 py-6 mx-auto md:p-8 lg:p-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            <div>
                
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    {t('Footer.text1')}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                        <Link style={{ fontFamily: "bodyfont" }} style={{ fontFamily: "Circular" }}   to="/assurance" className=" hover:underline">
                        {t('Footer.textassurance')}
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link style={{ fontFamily: "Circular" }}  to="/assurance" className=" hover:underline">
                        {t('Footer.textassurancedeux')}
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link style={{ fontFamily: "Circular" }}  to="/terms" className=" hover:underline">
                        {t('Footer.text1')}
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link style={{ fontFamily: "Circular" }}  to="/terms" className=" hover:underline">
                        {t('Footer.text2')}
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link style={{ fontFamily: "Circular" }}  to="/assurance" className=" hover:underline">
                        {t('Footer.text3')}
                        </Link>
                        
                    </li>
                </ul>
            </div>
            <div>
                <h2 style={{ fontFamily: "bodyfont" }}  className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {t('Footer.text14')}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400">

                    
                    <li className="mb-4">
                    <Link style={{ fontFamily: "Circular" }}  to="/faq" className=" hover:underline">
                        {t('Footer.text11')}
                        </Link>
                    </li>

                    <li className="mb-4">
                    <Link style={{ fontFamily: "Circular" }}  to="/faq" className=" hover:underline">
                        {t('Footer.text6')}
                        </Link>
                    </li>

                    <li className="mb-4">
                    <Link style={{ fontFamily: "Circular" }}  to="/hosting" className=" hover:underline">
                        {t('Footer.text7')}
                        </Link>
                    </li>


                    <li className="mb-4">
                    <Link style={{ fontFamily: "Circular" }}  to="/hosting" className=" hover:underline">
                        {t('Footer.text16')}
                        </Link>
                    </li>

                    <li className="mb-4">
                    <Link style={{ fontFamily: "Circular" }}  to="/hosting" className=" hover:underline">
                        {t('Footer.text17')}
                        </Link>
                    </li>

                    <li className="mb-4">
                    <Link style={{ fontFamily: "Circular" }}  to="/faq" className=" hover:underline">
                        {t('Footer.text18')}
                        </Link>
                    </li>

                   
                   
                </ul>
            </div>
           
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {t('Footer.text10')}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400">
                    <li className="mb-4">
                    <Link style={{ fontFamily: "Circular" }}  to="/faq" className=" hover:underline">
                        {t('Footer.text10')}
                        </Link>
                    </li>
                    <li className="mb-4">
                    <Link style={{ fontFamily: "Circular" }}  to="/faq" className=" hover:underline">
                        {t('Footer.text19')}
                        </Link>
                    </li>

                    <li className="mb-4">
                    <Link style={{ fontFamily: "Circular" }}  to="/faq" className=" hover:underline">
                        {t('Footer.text20')}
                        </Link>
                    </li>

                    
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {t('Footer.text4')}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400">
                    <li className="mb-4">
                        <Link to="/dowloadlimitles" className="hover:underline">
                        {t('Footer.text4')}
                        </Link>
                        
                    </li>

                    <li className="mb-4">
                        <Link  to="/dowloadlimitles" className="hover:underline">
                        {t('Footer.text5')}
                        </Link>
                        
                    </li>
                  
                </ul>
            </div>
        </div>
       
        <div className="text-center">
            <Link to="/" href="#" className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
            <img src={require('../assets/logowhitebow.png')}  className="h-16 dark:bg-black"/>
           
            <img src={require('../assets/Logo.png')} className="h-16 sm:visible lg:visible dark:hidden" />
            </Link>
            <span className="block text-sm text-center text-gray-500 dark:text-gray-400">© 2023 <a href="#" className="hover:underline">limitles™</a>. All Rights Reserved.
            </span>
            <ul className="flex justify-center mt-5 space-x-5">
                <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z" fill="rgba(0,0,0,1)"></path></svg>                    </a>
                </li>
               
                <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path></svg>                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path></svg>                    </a>
                </li>
            </ul>
        </div>
    </div>
  </footer>



  )
}
