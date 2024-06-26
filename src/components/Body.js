import Restaurantcard from '../Restaurantcard';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import useOnlineStatus from './utils/useonlineStatus';

// Example CORS headers in Express (Node.js)

const Body = () => {
  const [resList, setnewList] = useState([]);
  const [filteredrestaurant, setfilteredrestaurant] = useState([]);

  const [searchtext, setsearchtext] = useState('');

  useEffect(() => {
    fetchData();
  }, []);
 const fetchData = async () => {
    const data = await fetch(process.env.API_URL);

    const json = await data.json();
    console.log(json, 'json');
    setnewList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilteredrestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const onlinestatus = useOnlineStatus();

  if (onlinestatus == false)
    return <h1>LOOks like your internet connection is not working fine</h1>;
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=''>
      <div className='flex items-center'>
        <div className='m-4 p-4'>
          <input
            type='text'
            className='border solid border-black'
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />
          <button
            className='px-4 bg-green-100  m-4 rounded-lg '
            onClick={() => {
              const filteredrestaurants = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setfilteredrestaurant(filteredrestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className='px-2 bg-green-100  m-6 rounded-lg'
            onClick={() => {
              (resList1 = resList.filter((abc) => abc.info.avgRating > 4)),
                setfilteredrestaurant(resList1);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className='flex flex-wrap'>
        {filteredrestaurant.map((infohh) => (
          <Restaurantcard restData={infohh} />
        ))}
      </div>
    </div>
  );
};
export default Body;
