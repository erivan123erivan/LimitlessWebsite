import React, { useState } from 'react';
import Select from 'react-select';
import { useTranslation } from "react-i18next";
import HomeSectionTwo from "./HomeSectionTwo";
import { Search, MapPin, Disc } from "react-feather"; // Import the Feather Search icon
import Testimonial from "./Testemonial";
import TestimonialPeople from './TestemonialPeople';
import FaqHome from "./FaqHome";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";





function HomeContainer() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    navigate(`/search?query=${searchValue}`);
  };

  const cities = [
    { value: 'Doha', label: 'Doha' },
    { value: 'New York', label: 'New York' },
    { value: 'Dubai', label: 'Dubai' },
    { value: 'Paris', label: 'Paris' },
  ];

  const [selectedCity, setSelectedCity] = useState(null);
  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
    setSearchValue(selectedOption.value); // Set searchValue based on the selected city value
  };
  
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-8 divrounded lg:bg-[#F3F3F3] bg-[#F3F3F3]  dark:bg-gray-900 rounded-[0px] sm:rounded-[45px] flex flex-col items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 lg:flex-row lg:items-stretch lg:justify-center lg:px-32 lg:mt-24">
        <div className="lg:w-1/2 lg:mr-8">
          <h2 className="mb-10 mt-4  lg:mt-24 lg:text-[69px] text-3xl leading-normal tracking-tight font-extrabold text-black lg:text-black text-black dark:text-white">
            {t("home.text1")}
          </h2>

          <div className="flex flex-col lg:flex-row lg:justify-start lg:items-center">

            <div className="relative flex items-center pl-4 bg-white border rounded-lg lg:ml-0">
              <span className="absolute items-center mr-4 text-gray-500 transform -translate-y-1/2 left-4 top-1/2">
                <MapPin size={20} />
              </span>
              <div className="w-full lg:w-96">
                <Select
                  value={selectedCity}
                  onChange={handleCityChange}
                  options={cities}
                  styles={{
                    control: styles => ({ ...styles, border: "none", minHeight: "2.5rem",fontFamily: "Circular" }),
                    menu: styles => ({ ...styles, marginTop: 0 }) // Reset menu marginTop
                  }}
                  placeholder={<span className="text-gray-500">Select a city</span>}
                  className="w-full px-6 py-2 text-gray-900 border-0 rounded-lg"
                />
              </div>
            </div>

            <button onClick={handleSearch} className="relative w-full px-6 py-6 mt-4 ml-0 font-semibold text-white bg-gray-800 rounded-full lg:ml-4 lg:mt-0 lg:w-auto lg:rounded-full hover:bg-gray-700 focus:outline-none">
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <Search className="app-sms" size={18} color="white" />
                <p style={{ fontFamily: "bodyfont" }} className="lg:hidden">
                  {t("home.searchbtn")}
                </p>
              </span>
            </button>

            </div>




          <div className="flex items-center justify-center mt-12">
            <p style={{ fontFamily: "bodyfont" }}  className="text-2xl text-black dark:text-white lg:text-black lg:hidden">
              {t("home.middletext")}
            </p>
          </div>
          <div class="items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-4">
            <Link
            
              to="/hosting"
              class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              <svg
                class="mr-3 w-7 h-7"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="apple"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                ></path>
              </svg>
              <div class="text-left">
                <div class="mb-1 text-xs">Download on the</div>
                <div class="-mt-1 font-sans text-sm font-semibold">
                   App Store
                </div>
              </div>
            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=com.erivan.couttolenc.AppTwo&pli=1"
              class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              <svg
                class="mr-3 w-7 h-7"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google-play"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                ></path>
              </svg>
              <div class="text-left">
                <div class="mb-1 text-xs">Get it on</div>
                <div class="-mt-1 font-sans text-sm font-semibold">
                  Google Play
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            className="h-auto max-w-full"
            src={require("../assets/Color=Deep Purple (4).png")}
            className="hidden w-full md:w-64 lg:block lg:ml-12"
            alt="Group 4"
          />
        </div>
      </div>

      <Testimonial/>
      <HomeSectionTwo />

      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1  style={{ fontFamily: "bodyfont" }} class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              {t("home.text2")}
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {t("home.paragraph2")}
            </p>
            <Link to="/dowloadlimitles"
              class="inline-flex bg-black text-white border-black items-center justify-center px-24 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 hover:text-black hover:bg-white app-sms "
            >
              {t("Hosting.btn")}
            </Link>
          </div>
          <div class="mt-4 lg:mt-0 lg:col-span-5 lg:flex">
            <img
              className="h-auto max-w-full"
              height={270}
              width={270}
              src={require("../assets/Color=Deep Purple (3).png")}
              alt="mockup"
            />
          </div>
        </div>
      </section>

      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="order-last lg:order-first lg:mt-0 lg:col-span-5 lg:flex">
            <img
              className="h-auto max-w-full"
              height={270}
              width={270}
              src={require("../assets/Group 7.png")}
              alt="mockup"
            />
          </div>

          <div class="order-first lg:order-last mr-auto place-self-center lg:col-span-7">
            <h1  style={{ fontFamily: "bodyfont" }} class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              {t("home.paragraph5")}
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {t("home.text5")}
            </p>
            <Link
            to="/dowloadlimitles"
              class="inline-flex bg-black text-white border-black items-center justify-center px-24 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 hover:text-black hover:bg-white app-sms"
            >
              {t("Hosting.btn")}
            </Link>
          </div>
        </div>
      </section>

      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1  style={{ fontFamily: "bodyfont" }} class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              {t("home.text3")}
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {t("home.paragraph3")}
            </p>
            <Link
            to="/dowloadlimitles"
              class="inline-flex bg-black text-white border-black items-center justify-center px-24 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 hover:text-black hover:bg-white app-sms"
            >
              {t("Hosting.btn")}
            </Link>
          </div>
          <div class="lg:mt-0 lg:col-span-5 lg:flex">
            <img
              className="h-auto max-w-full"
              height={270}
              width={270}
              src={require("../assets/Hosting/Silver.png")}
              alt="mockup"
            />
          </div>
        </div>
      </section>

      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="order-last lg:order-first lg:mt-0 lg:col-span-5 lg:flex">
            <img
              height={270}
              width={270}
              src={require("../assets/Group 7 (1).png")}
              alt="mockup"
            />
          </div>

          <div class="order-first lg:order-last mr-auto place-self-center lg:col-span-7">
            <h1  style={{ fontFamily: "bodyfont" }} class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              {t("home.paragraph8")}
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {t("home.paragraph9")}
            </p>
            <Link
               to="/dowloadlimitles"
              class="inline-flex bg-black text-white border-black items-center justify-center px-24 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 hover:text-black hover:bg-white app-sms"
            >
              {t("Hosting.btn")}
            </Link>
          </div>
        </div>
      </section>
      <FaqHome/>
      <TestimonialPeople/>
  
    </section>
  );
}

export default HomeContainer;
