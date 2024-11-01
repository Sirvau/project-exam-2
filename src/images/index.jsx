import signInImage from '../images/sign-in-image.jpg';
import registerImage from '../images/register-img.jpg';

export const signInImg = (
  <img
    src={signInImage}
    alt="Sign in image"
    className="hidden md:block w-full h-full object-cover"
  />
);

export const registerImg = (
  <img
    src={registerImage}
    alt="register image"
    className="hidden md:block w-full h-full object-cover"
  />
);
