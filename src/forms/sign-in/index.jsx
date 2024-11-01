import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SubmitButton from '../../components/buttons/submit-button';
import CustomInput from '../../components/inputs';
import { emailIcon, passwordIcon } from '../../components/icons';

// Validation schema
const schema = yup
  .object({
    email: yup.string().required('Please enter your email address.'),
    password: yup.string().required('Please enter your password')
  })
  .required();

// Sign In Form
export function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log('Submitted from sign in form:', data);
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="sign-in-form"
        method="POST"
        action=""
        className="mt-12 flex flex-col mx-auto"
      >
        <div className="mb-1">
          <label className="label hidden">Email</label>
          <CustomInput
            id="email"
            name="email"
            icon={emailIcon}
            type="email"
            placeholder="Enter your Email"
            register={register}
          />
          <p className="text-xs text-orange-500 opacity-80 mt-1 mx-8 sm:mx-20">
            {errors.email?.message}
          </p>
        </div>
        <div className="mb-1">
          <label className="label hidden">Password</label>
          <CustomInput
            id="password"
            name="password"
            icon={passwordIcon}
            type="password"
            placeholder="Enter your password"
            register={register}
          />
          <p className="text-xs text-orange-500 opacity-80 mt-1 mx-8 sm:mx-20">
            {errors.password?.message}
          </p>
        </div>
        <div className="flex justify-center">
          <SubmitButton buttonText="Sign in" />
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
