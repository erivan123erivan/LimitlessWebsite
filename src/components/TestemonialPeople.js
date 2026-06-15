import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
import Testemonial from './Testemonial';

const TestimonialPeople = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      text: t('home.testemonialtextTrois'),
      author: t('home.testemonialAuthorTrois'),
      position: t('home.testemonialPositionTrois'),
      image: 'https://tse1.mm.bing.net/th?id=OIP.6DBd_iqtj1Mj9W13u3bccwHaKf&pid=Api&P=0&h=180',
    },
    {
      text: t('home.testemonialtext'),
      author: t('home.testemonialAuthor'),
      position: t('home.testemonialPosition'),
      image: 'https://tse3.mm.bing.net/th?id=OIP.Nx7dIW6LNjNH-g_iIuu5yQHaGW&pid=Api&P=0&h=180',
    },
    {
      text: t('home.testemonialtextDeux'),
      author: t('home.testemonialAuthorDeux'),
      position: t('home.testemonialPositionDeux'),
      image: 'https://tse3.mm.bing.net/th?id=OIP.gNTpWUJsGMdT2QV69ASUtAAAAA&pid=Api&P=0&h=180',
    }
    
    // Add more testimonials as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div key={index}>
          <div className='flex items-center justify-center dark:bg-gray-900 '>
              <h2 className='text-4xl dark:text-white'>
             {t("home.testemonialBigText")}
              </h2>
            </div>
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center bg-white dark:bg-gray-900 lg:py-16 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <blockquote>
                <p className="text-2xl font-medium text-gray-900 dark:text-white">{testimonial.text}</p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img className="w-6 h-6 rounded-full" src={testimonial.image} alt="profile picture" />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">{testimonial.author}</div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{testimonial.position}</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialPeople;
