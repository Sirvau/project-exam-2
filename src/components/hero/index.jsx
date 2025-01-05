import { heroBackgroundImg } from '../../images';
import SearchVenues from '../venues/search-venues';
import useVenueStore from '../../stores/venue-store';

function HeroSection() {
  const { venues } = useVenueStore();

  return (
    <section className="w-full relative py-10 px-4 border-0 rounded-sm">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70 max-h-96"
        style={{
          backgroundImage: `url(${heroBackgroundImg})`
        }}></div>

      <form className="relative flex flex-col items-center sm:flex-row sm:items-end sm:justify-center w-full p-6 rounded-lg">
        <div className="text-center sm:text-left md:mt-4">
          <h2 className="font-header text-2xl sm:text-3xl text-primary font-semibold tracking-widest">
            {' '}
            Find Your Oasis
          </h2>
          <h1 className="font-header text-5xl sm:text-6xl text-primary font-semibold mt-6 mb-12 lg:mb-24 tracking-wide">
            Book Your Perfect Venue
          </h1>
          <SearchVenues venues={venues} />
        </div>
      </form>
    </section>
  );
}

export default HeroSection;
