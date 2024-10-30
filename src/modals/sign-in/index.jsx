import { EmailInput} from "../../components/forms/inputs/email";
import Modal from "../../components/modal";

function SignInModal() {
  const SignInFormProps = {
    id: "login-form",
    method: "post",
    buttonText: "Login",
    children: (
      <>
        <EmailInput id="email" label="E-mail" placeholder="Enter your email" />
      </>
    ),
  };

  return (
    <div>
      <Modal id="sign-in-modal" header="Sign In" subtitle="excisting customer" formProps={SignInFormProps}/>
    </div>
  );
}
export default SignInModal;