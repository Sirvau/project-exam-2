import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SubmitButton from '../../components/buttons/submit-button';
import CustomInput from '../../components/inputs';
import { emailIcon, nameIcon, passwordIcon } from '../../components/icons';

// Validation schema
const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, 'Your full name should be at least 3 characters.')
      .max(50, 'Your full name cannot be longer than 50 characters.')
      .required('Please enter your full name'),
    email: yup
      .string()
      .matches(/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'Invalid email format.')
      .required('Please enter your email address.'),
    password: yup
      .string()
      .min(8, 'Your password should be at least 8 characters.')
      .max(16, 'Your password cannot be longer than 16 characters.')
      .required('Please enter your password')
  })
  .required();

// Register Form
export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    /*Do the post request here*/
    console.log('Submitted from register form:', data);
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="register-form"
        method="POST"
        action=""
        className="mt-6 flex flex-col mx-auto"
      >
        <div className="mb-1">
          <label className="label hidden">Full Name</label>
          <CustomInput
            id="fullName"
            name="fullName"
            icon={nameIcon}
            type="text"
            placeholder="Enter your full name"
            register={register}
          />
          <p className="text-xs text-orange-500 opacity-80 mt-1 mx-8 sm:mx-20">
            {errors.fullName?.message}
          </p>
        </div>

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
          <SubmitButton buttonText="Register" />
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
