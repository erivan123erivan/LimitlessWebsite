import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { dbFirebase } from '../firebase';
import {Link} from 'react-router-dom';


function SearchComponent() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading state


  
 // Inside the useEffect hook
useEffect(() => {
  // Fetch data from Firebase based on the searchQuery
  if (searchQuery) {
    // Perform actions using the searchQuery, e.g., fetch data from Firebase
    dbFirebase
      .collection('carspeople')
      .where('city', '==', searchQuery)
      .get()
      .then((querySnapshot) => {
        const results = [];
        querySnapshot.forEach((doc) => {
          // Access specific fields from the fetched data
          const data = doc.data();
          const { assuranceName, country, city, pricePerDay, name, carModel, carName, profilePicture, carPhotos } = data; // Replace with your actual field names
          // Construct an object containing the desired fields
          const result = {
            assuranceName,
            country,
            carModel,
            carName,
            carPhotos,
            profilePicture,
            name,
            pricePerDay,
            city
            // Add other fields as needed
          };
          results.push(result);
        });
        
        // Set the searchResults state with the extracted fields
        setSearchResults(results);

        // Check if no cars were found
        if (results.length === 0) {
          alert('No cars found in this city.'); // Trigger an alert if no cars are found
        }
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      })
      .finally(() => {
        setLoading(false); // Update loading state after fetching data
      });
  }
}, [searchQuery]);


  return (

    
 


      <Link to="/dowloadlimitles" className='w-full h-full'>
       <div className='bg-white mt-[120px] dark:bg-gray-900'>
        
    {searchResults.map((result, index) => (
  <div key={index} className='mx-4 sm:mx-8 md:mx-16 lg:mx-[450px] bg-[#F5F5F5] rounded-[20px] py-8 px-6 sm:px-8 md:px-10 lg:px-24 '>
    
    <div className='flex flex-row items-center justify-between lg:flex-row sm:flex-row sm:justify-between'>

     
      <div className='flex items-center mb-4 sm:mb-0'>
        <div className='flex items-center px-2 bg-white w-[137px] h-[44px] rounded-full py-[16px]'>
          <img className='w-[36px] h-[36px] mr-3 rounded-full'src={result.profilePicture} alt='Profile' />
          <div className='flex flex-col'>
            <p className='text-sm font-bold'>
            {result.name}
            </p>
            <p className='text-[#BDBDBD] text-xs'>
            {result.city}
              </p>
          </div>
        </div>
      </div>

     
      <div className='flex items-center'>
        <img className='w-[133px] h-[19px] mr-3 lg:h-5' src={require('../assets/stars.png')} alt='Stars' />
      </div>

    </div>

    
    <div className='flex items-center justify-center mt-4 sm:mt-6'>
      <img className='w-[330px] h-[126px] lg:w-[490px] lg:h-auto rounded-lg sm:w-96' src={result.carPhotos[0]}  alt='Car' />
    </div>

    
    <div className='flex justify-between mt-4'>
      <p className='text-sm font-bold'>
      {result.pricePerDay}   {t('App.perDay')}
      </p>
      <p className='font-bold text-[#BDBDBD] text-xs'>
      {result.carName}, {result.carModel}
      </p>
    </div>

  </div> 
     ))}
</div>
      
      </Link>
   

);}

export default SearchComponent;
