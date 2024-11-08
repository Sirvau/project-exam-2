import { locationPlaceholderImg } from '../../images';
import DeviderLine from '../../components/devider-line';
import { personIcon } from '../icons';

export function TableTemplate() {
  return (
    <section className="sm:mt-4">
      <DeviderLine />
      <div className="content-container flex flex-col sm:flex-row justify-center sm:justify-evenly mt-2 sm:mt-4 mx-16 sm:mx-0 w-3/5 sm:w-full text-left">
        <div className="location-img h-32 w-48 sm:h-16 sm:w-24 lg:h-32 lg:w-44 mt-2">
          {locationPlaceholderImg}
        </div>
        <div className="title-and-description mt-2 sm:mt-0 sm:w-2/5 sm:mx-4">
          <h2 className="font-header text-base sm:text-sm lg:text-base mb-2 font-semibold">
            This is the location Name
          </h2>
          <p className="text-sm sm:text-xs lg:text-sm">
            This is the location description. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam.
          </p>
        </div>
        <div className="details mt-2 sm:mt-0 sm:w-1/5">
          <h3 className="text-secondary my-2 sm:my-0">Booked</h3>
          <p className="text-sm sm:text-xs lg:text-sm mb-2 mt-3 ">Date: xx.xx.xx</p>
          <div className="text-sm sm:text-xs lg:text-sm  mb-2">
            <div className="persons flex mb-2">
              <p className="icon-and-number">{personIcon} X </p>
              <p className="ms-2"> persons</p>
            </div>
            <p className="">
              Paid: <span className="amount">xxxx Kr.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TableTemplate;
