import logoImg from '../../../images/Logo-Holidaze.png';
import { NavLink } from 'react-router-dom';

function Logo() {
  return (
    <NavLink to="/">
      <div className="pt-6">
        <img src={logoImg} alt="Holidaze Logo" className="w-full h-[100px] object-contain " />
      </div>
    </NavLink>
  );
}

export default Logo;
