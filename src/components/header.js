import { Link } from 'react-router-dom';
import { Logo_url } from './utils/url';

const Header = () => {
  return (
    <div>
      <div className='logo-conatiner'>
        <img className='w-24' src={Logo_url} />
      </div>

      <div className='navitems'>
        <ul>
          <li>
            <Link to='/Home'>Home</Link>
          </li>

          <li>
            <Link to='/Grocery'>Grocery</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/Contact'>Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
