import signInImage from '../images/sign-in-image.jpg';
import registerImage from '../images/register-img.jpg';
import editProfileImage from '../images/edit-profile-modal-img.jpg';
import heroBackgroundImage from '../images/hero-background.jpg';
import createVenueImage from '../images/create-venue-img.jpg';

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

export const editProfileImg = (
  <img
    src={editProfileImage}
    alt="Edit profile image"
    className="hidden md:block w-full h-full object-cover"
  />
);

export const createVenueImg = (
  <img
    src={createVenueImage}
    alt="Edit profile image"
    className="hidden md:block w-full h-full object-cover"
  />
);

export const heroBackgroundImg = heroBackgroundImage;
