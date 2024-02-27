import { Link } from 'react-router-dom';
import CDN_url, { Localurl } from '/src/components/utils/url';

const Restaurantcard = (props) => {
  const { restData } = props;
  const { cloudinaryImageId, name, costForTwo, avgRating, cuisines, sla, id } =
    restData?.info;

  return (
    <div className='res-card'>
      <Link to={'/ResName/' + id}>
        <img className='rest-logo' src={CDN_url + cloudinaryImageId} />

        <h3>{name}</h3>
        <h4>{costForTwo}</h4>
        <h5>{avgRating}</h5>
        <h5>{sla.slaString}</h5>
        <h5>{cuisines.join('     ,    ')}</h5>
      </Link>
    </div>
  );
};

export default Restaurantcard;
