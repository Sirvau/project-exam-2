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
        header="Register"
        subtitle="as new customer"
        subText="...and book an venue of your dreams"
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
