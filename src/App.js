import axios from 'axios';
import { useEffect, useState } from 'react';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {

  const [ details, set_details ] = useState({});

  const BASE_URL = 'https://randomuser.me/api/?page=1&results=1&seed=abc';

  useEffect(() =>
  {
    const fetch_details = async () =>
    {
      try
      {
        const response = await axios.get(BASE_URL);
        console.log(response.data.results[0]);
        set_details(response.data.results[0]);
      }
      catch(err)
      {
        console.log(err.message);
      }      
    };

    fetch_details();
  }, []);

  return (
    <main>
      <div className='card'>
        <p className='card_header'>marketing and sales professional</p>
        <div className='card_body'>
          <img src={details.picture?.large} className='card_body_image' />
          <div className='card_body_basic_info'>
            <p className='card_body_basic_info_name'>{details.name?.title} {details.name?.first} {details.name?.last}</p>
            <p className='card_body_basic_info_gender'>{details.gender}</p>
            <p className='card_body_basic_info_age'>{details.dob?.age} years old</p>
            <p className='card_body_basic_info_phone_number'>phone: {details.phone}</p>
            <div className='card_body_basic_info_location'>
              <FontAwesomeIcon icon={faLocationDot} />
              <p>{details.nat}</p>
            </div>     
            <div className='card_body_basic_info_email'>
              <button>email</button>   
            </div>                 
          </div>          
        </div>                     
      </div>
      <div className='description'>

      </div>
    </main>
  );
}

export default App;
