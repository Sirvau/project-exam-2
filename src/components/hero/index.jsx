import SubtileButton from '../buttons/subtile-button';
import { heroBackgroundImg } from '../../images';
import { searchIcon } from '../icons';

function HeroSection() {
  return (
    <section className="w-full relative py-10 px-4 border-0 rounded-sm overflow-hidden">
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
          <h3></h3>
        </div>
        <SubtileButton buttonText="Search" icon={searchIcon} />
      </form>
    </section>
  );
}

export default HeroSection;
