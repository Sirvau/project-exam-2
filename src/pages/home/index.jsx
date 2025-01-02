import SignInModal from '../../modals/sign-in';
import RegisterModal from '../../modals/register';
import VenueList from '../../components/venues/venue-list';
import HeroSection from '../../components/hero';
import ToTopButton from '../../components/buttons/to-top-button';

function HomePage() {
  return (
    <div className="mb-44 overflow-visible">
      <SignInModal />
      <RegisterModal />
      <HeroSection />
      <section>
        <VenueList />
      </section>
      <div className="flex justify-center mt-36">
        <ToTopButton />
      </div>
    </div>
  );
}

export default HomePage;
