import SignInModal from '../../modals/sign-in';
import RegisterModal from '../../modals/register';
import VenueList from '../../components/venues/venue-list';
import HeroSection from '../../components/hero';

function HomePage() {
  return (
    <div className="mb-44">
      <SignInModal />
      <RegisterModal />
      <HeroSection />
      <section className="">
        <VenueList />
      </section>
    </div>
  );
}

export default HomePage;
