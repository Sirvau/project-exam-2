import logoImg from '../../../images/Logo-Holidaze.png';

function Logo() {
  return (
    <div className="pt-6">
      <img src={logoImg} alt="Holidaze Logo" className="w-full h-[100px] object-contain " />
    </div>
  );
}

export default Logo;
