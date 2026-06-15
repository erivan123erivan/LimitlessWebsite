import React from 'react'
import { useTranslation } from 'react-i18next';
import TestimonialPeopleTwo from './TestemonialPeopleTwo';
import FaqHostingApp from './FaqHosting';
import { Link } from "react-router-dom";


function HostingContainer() {
  const { t, i18n } = useTranslation();
  return (
    <div>
<div className="py-24  bg-[#F3F3F3] dark:bg-gray-900 sm:py-32 ">
      <div className="flex items-center justify-center px-6 mx-auto max-w-7xl lg:px-6">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-4xl pt-12 font-bold tracking-tight text-black dark:text-white sm:text-6xl ">
          {t('Hosting.hosttext')}
          </h2>
        
        </div>
      </div>
    </div>
    
<section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="order-last lg:order-first lg:mt-0 lg:col-span-5 lg:flex">
            <img className="h-auto max-w-full" height={270   } width={270} src={require('../assets/Hosting/Group 4.png')} alt="mockup"/>
        </div>

        <div class="order-first lg:order-last mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            {t('Hosting.text7')}
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                {t('Hosting.text8')}
            </p>
            <Link   class="inline-flex bg-black text-white border-black items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 hover:text-black hover:bg-white app-sms">
                {t('Hosting.btn')}
            </Link>
        </div>
    </div>
</section>

       <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            {t('Hosting.text3')}
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {t('Hosting.text4')}
            </p>
            <Link  to="/dowloadlimitles"  class="inline-flex bg-black text-white border-black items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 hover:text-black hover:bg-white app-sms ">
            {t('Hosting.btn')}
            </Link> 
        </div>
        <div class="mt-4 lg:mt-0 lg:col-span-5 lg:flex">
            <img className="h-auto max-w-full" height={270} width={270} src={require('../assets/Hosting/Group 2.png')} alt="mockup"/>
        </div>                
    </div>
</section>


<section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="order-last lg:order-first lg:mt-0 lg:col-span-5 lg:flex">
            <img className="h-auto max-w-full" height={270   } width={270} src={require('../assets/Hosting/Group 4.png')} alt="mockup"/>
        </div>

        <div class="order-first lg:order-last mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            {t('Hosting.text9')}
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                {t('Hosting.text11')}
            </p>
            <Link  to="/dowloadlimitles"  class="inline-flex bg-black text-white border-black items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 hover:text-black hover:bg-white app-sms">
                {t('Hosting.btn')}
            </Link>
        </div>
    </div>
</section>



      <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            {t('Hosting.text5')}
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {t('Hosting.text6')}
            </p>
            <Link  to="/dowloadlimitles" class="inline-flex bg-black text-white border-black items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 hover:text-black hover:bg-white app-sms ">
            {t('Hosting.btn')}
            </Link> 
        </div>
        <div class="mt-4 lg:mt-0 lg:col-span-5 lg:flex">
            <img className="h-auto max-w-full" height={270} width={270} src={require('../assets/Hosting/Silver.png')} alt="mockup"/>
        </div>                
    </div>
</section>


<TestimonialPeopleTwo/>
<FaqHostingApp />


    </div>
   





  )
}

export default HostingContainer;
