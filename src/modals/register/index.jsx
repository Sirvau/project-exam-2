import RegisterForm from '../../forms/register';
import Modal from '../../components/modal';
import DeviderLine from '../../components/devider-line';
import { registerImg } from '../../images';
import SubtileButton from '../../components/buttons/subtile-button';

function RegisterModal() {
  return (
    <div>
      <Modal
        id="register-modal"
        className="w-3/4 sm:w-2/3 md:w-3/4 bg-primary md:flex lg:w-3/5 xl:w-1/2 max-h-[620px] relative"
        header="Register"
        subtitle="as new customer"
        subText="...and book a venue of your dreams"
        modalImg={registerImg}
        form={<RegisterForm />}
        bodyText="Already have an account?"
        deviderLine={<DeviderLine />}
        button={
          <SubtileButton
            onClick={() => {
              const signInModal = document.getElementById('sign-in-modal');
              const registerModal = document.getElementById('register-modal');

              if (signInModal && registerModal) {
                registerModal.close();
                signInModal.showModal();
              }
            }}
            buttonText="Sign in"
          />
        }
      />
    </div>
  );
}
export default RegisterModal;
