import { Link } from "react-router-dom";

function SoMeIcons() {
    return (
   <div>
      <Link to="https://www.instagram.com/"><i className="fa-brands fa-square-instagram scale-125 hover:scale-150 duration-300 mx-4"></i></Link>
      <Link to="https://www.facebook.com/"> <i className="fa-brands fa-square-facebook scale-125 hover:scale-150 duration-300 mx-4"></i></Link>
      <Link to="https://x.com/"> <i className="fa-brands fa-square-x-twitter scale-125 hover:scale-150 duration-300  mx-4"></i></Link>
   </div>
      
    );
  }
  export default SoMeIcons;

