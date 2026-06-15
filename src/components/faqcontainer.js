// FaqContainer.js

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search } from 'react-feather'; // Assuming 'Search' is the Feather icon component


function FaqContainer() {
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useTranslation();

  const faqs = [
    {
      question: t('faq.question1'),
      answer: t('faq.answer1'),
    },
    {
      question: t('faq.question2'),
      answer: t('faq.answer2'),
    },
    {
      question: t('faq.question3'),
      answer: t('faq.answer3'),
    },
    {
      question: t('faq.question4'),
      answer: t('faq.answer4'),
    },
    {
      question: t('faq.question5'),
      answer: t('faq.answer5'),
    },
    {
      question: t('faq.question6'),
      answer: t('faq.answer6'),
    },
    {
      question: t('faq.question7'),
      answer: t('faq.answer7'),
    },
    {
      question: t('faq.question8'),
      answer: t('faq.answer8'),
    },
    {
      question: t('faq.question9'),
      answer: t('faq.answer9'),
    },
    {
      question: t('faq.question10'),
      answer: t('faq.answer10'),
    },
    {
      question: t('faq.question11'),
      answer: t('faq.answer11'),
    },
    {
      question: t('faq.question12'),
      answer: t('faq.answer12'),
    },
    {
      question: t('faq.question13'),
      answer: t('faq.answer13'),
    },
    {
      question: t('faq.question14'),
      answer: t('faq.answer14'),
    },
    {
      question: t('faq.question15'),
      answer: t('faq.answer15'),
    },
    {
      question: t('faq.question16'),
      answer: t('faq.answer16'),
    },
    {
      question: t('faq.question17'),
      answer: t('faq.answer17'),
    },
    {
      question: t('faq.question18'),
      answer: t('faq.answer18'),
    },
  ];

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="mt-12 bg-white dark:bg-gray-900">
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6">
      <div className="text-left mt-6">
        <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
          {t('faq.title')}
        </h2>
        <div className="p-4 mb-8">
          <div className="relative mb-4">
            <div className="absolute inset-y-0 flex items-center left-4">
             <Search/>
            </div>
            <input
              type="text"
              placeholder={t('faq.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-10 py-4 text-gray-900 placeholder-gray-500 border border-gray-300 lg:rounded-[10px] rounded-full bg-gray-50 pl-14 focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
  
          {/* Questions and Answers */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="p-6 bg-white border rounded-md shadow-md border-gray-50 dark:bg-gray-800"
                >
                  <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">{faq.answer}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 dark:text-gray-400">{t('faq.noResults')}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
  );
}

export default FaqContainer;
