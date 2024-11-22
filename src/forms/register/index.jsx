import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SubmitButton from '../../components/buttons/submit-button';
import CustomInput from '../../components/inputs';
import { emailIcon, nameIcon, passwordIcon } from '../../components/icons';
import ApiManager from '../../api-manager/api-manager.js';

// Validation schema
const schema = yup
  .object({
    name: yup
      .string()
      .min(3, 'Please enter a name with at least 3 characters.')
      .max(35, 'Please enter a name with less than 35 characters.')
      .required('Please enter your full name'),
    email: yup
      .string()
      .matches(
        /^[\w\-.]+@(stud\.noroff\.no|noroff\.no)$/,
        'Please register with a stud.noroff.no or noroff.no email.'
      )
      .required('Please enter your email address.'),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]*$/,
        'Please register a password containing a special character and upper- and lowercase letters.'
      )
      .min(8, 'Please enter a password with at least 8 characters.')
      .max(16, 'Please enter a password not longer than 16 characters.')
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

  const onSubmit = async (data) => {
    const registerModal = document.getElementById('register-modal');
    const signInModal = document.getElementById('sign-in-modal');
    try {
      await ApiManager.register(data);
      registerModal.close();
      signInModal.showModal();
      console.log('Submitted from register form:', data);
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="register-form"
        method="POST"
        action=""
        className="mt-6 flex flex-col mx-auto">
        <div className="mb-1">
          <label className="label hidden">Full Name</label>
          <CustomInput
            id="name"
            name="name"
            icon={nameIcon}
            type="text"
            placeholder="Enter your full name"
            register={register}
          />
          <p className="text-xs text-orange-500 opacity-80 mt-1 mx-8 sm:mx-20">
            {errors.name?.message}
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
