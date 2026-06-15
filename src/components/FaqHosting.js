import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const FaqHostingApp= () => {
  const { t } = useTranslation();

  const faqItemsHosting = [
    {
      question: t('faq.question6'),
      answer:  t('faq.answer6'),
    },
    {
      question:  t('faq.question10'),
      answer:  t('faq.answer10'),
    },
    {
      question:  t('faq.question19'),
      answer:  t('faq.answer19'),
    },
    {
      question:  t('faq.question20'),
      answer:  t('faq.answer20'),
    },
  ];

  return (
    <div className="container px-4 py-8 mx-auto mb-4 sm:px-6 lg:px-8 dark:bg-gray-900 ">
      <div className="mb-6 text-center">
        <h2 className="mb-4 text-3xl font-semibold dark:text-white">
        {t("Hosting.hostingTitles")}
        </h2>
        <p className="mb-4 text-gray-600 dark:text-white">
        {t("Hosting.hostingtext")}
        </p>
        <Link to="/faq" className="inline-block px-6 py-3 text-white transition duration-300 bg-black rounded-full hover:bg-gray-600">
        {t("Hosting.btndeux")}
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {faqItemsHosting.map((item, index) => (
          <div key={index} className="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-900">
            <div className="p-6">
              <h3 className="mb-3 text-lg font-semibold dark:text-white">{item.question}</h3>
              <p className="text-gray-700 dark:text-white">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqHostingApp;
