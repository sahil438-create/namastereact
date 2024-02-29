import { Link } from 'react-router-dom';
import CDN_url, { Localurl } from '/src/components/utils/url';

const Restaurantcard = (props) => {
  const { restData } = props;
  const { cloudinaryImageId, name, costForTwo, avgRating, cuisines, sla, id } =
    restData?.info;

  return (
    <div className=' rounded-lg m-4 p-4   w-[250px] bg-gray   hover:bg-gray-400 '>
      <Link to={'/ResName/' + id}>
        <img
          className='flex w-[250px] h-[200px] rounded-lg'
          src={CDN_url + cloudinaryImageId}
          width='250px'
        />

        <h3 className='font-bold py-4 text-lg'>{name}</h3>
        <h4>{costForTwo}</h4>
        <h5>{avgRating}</h5>
        <h5>{sla.slaString}</h5>
        <h5>{cuisines.join('     ,    ')}</h5>
      </Link>
    </div>
  );
};

export default Restaurantcard;
