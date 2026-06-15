  import React from 'react'
  import { useTranslation } from "react-i18next";
  import { Link, useLocation } from 'react-router-dom';

  
  export default function TermsConditions() {
      const { t, i18n } = useTranslation();
      
  
      const downloadPDF = () => {
        const pdfPath = '../App.pdf'; // Relative path to your PDF file
        window.open(pdfPath); // Opens the PDF in a new tab
      };
    
    return (
      <div>
      <div className="py-24 bg-[#F3F3F3] dark:bg-gray-900 sm:py-32">
      <div className="flex items-center justify-center px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
          {t("Conditions.text1")}
          </h2>
          <p className='mt-4 dark:text-white'>
          {t("Conditions.text2")}
          </p>

          <a
          href="https://www.canva.com/design/DAF2jvql0WE/-Zin6NT0E7fit-1uYEvC3Q/edit?utm_content=DAF2jvql0WE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          download="App.pdf" // Specify the filename for the download
          className="inline-flex items-center justify-center px-5 py-3 mt-4 text-base font-medium text-center text-white text-gray-900 bg-black border border-black border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 hover:text-black hover:bg-white"
        >
           {t("Conditions.BtnText")}
        </a>

        
        
        </div>
      </div>
    </div>

      <div className="container max-w-4xl px-6 py-12 mx-auto dark:bg-gray-900">
      
        <h2 className="mt-16 mb-8 text-4xl font-bold lg:text-center dark:text-white">
            
        </h2>
        
      </div>


    

    
    
    
    
    </div>
    )
  }



