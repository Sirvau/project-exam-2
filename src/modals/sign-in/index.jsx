import SignInForm from '../../forms/sign-in';
import Modal from '../../components/modal';
import SubtileButton from '../../components/buttons/subtile-button';
import DeviderLine from '../../components/devider-line';
import { signInImg } from '../../images';

function SignInModal() {
  return (
    <div>
      <Modal
        id="sign-in-modal"
        header="Sign In"
        subtitle="excisting customer"
        modalImg={signInImg}
        form={<SignInForm />}
        button={
          <SubtileButton
            onClick={() => {
              const signInModal = document.getElementById('sign-in-modal');
              const registerModal = document.getElementById('register-modal');

              if (signInModal && registerModal) {
                signInModal.close();
                registerModal.showModal();
              }
            }}
            buttonText="Register"
          />
        }
        bodyText="Are you a new customer?"
        deviderLine={<DeviderLine />}
      />
    </div>
  );
}
export default SignInModal;
