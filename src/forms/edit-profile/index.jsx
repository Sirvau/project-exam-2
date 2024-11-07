import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SubmitButton from '../../components/buttons/submit-button';
import CustomInput from '../../components/inputs';
import useApi from '../../hooks/api/index';
import { useUserStore } from '../../stores/user-store';
import { EDIT_PROFILE_URL } from '../../constants';

// Validation schema
const schema = yup.object({
  banner: yup
    .string()
    .matches(
      /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/\S*)?$/,
      'Please enter a fully formed URL that links to a live, publicly accessible image.'
    ),
  avatar: yup
    .string()
    .matches(
      /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/\S*)?$/,
      'Please enter a fully formed URL that links to a live, publicly accessible image.'
    ),
  bio: yup.string().max(160, 'Please use less than 160 characters in your bio')
});

// Edit profile form with prefilled user information
export function EditProfileForm() {
  const { userData } = useUserStore();
  const userName = userData?.data?.name;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      banner: userData?.data?.banner?.url || '',
      avatar: userData?.data?.avatar?.url || '',
      bio: userData?.data?.bio || ''
    }
  });

  const { PUT, error, loading } = useApi(userName ? `${EDIT_PROFILE_URL}/${userName}` : null);

  const onSubmit = async (data) => {
    const { banner, avatar, bio } = data;

    const requestBody = {
      banner: {
        url: banner,
        alt: ''
      },
      avatar: {
        url: avatar,
        alt: ''
      },
      bio: bio
    };

    console.log('Request body:', requestBody);

    try {
      await PUT(requestBody);

      console.log('Submitted from edit profile form:', requestBody);

      useUserStore.getState().setUserData({
        data: {
          ...userData.data,
          avatar: { url: avatar, alt: '' },
          banner: { url: banner, alt: '' },
          bio: bio
        }
      });
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="edit-profile-form"
        method="PUT"
        action=""
        className="mt-6 flex flex-col mx-auto"
      >
        <div className="relative">
          <label className="label text-xs font-semibold tracking-wider absolute ms-6">Banner</label>
          <CustomInput
            id="banner"
            name="banner"
            type="url"
            placeholder="Banner image URL"
            register={register}
          />
          <p className="text-xs text-orange-500 opacity-80 mt-1 mx-8 sm:mx-20">
            {errors.banner?.message}
          </p>
        </div>

        <div className="relative">
          <label className="label text-xs font-semibold tracking-wider absolute ms-6">Avatar</label>
          <CustomInput
            id="avatar"
            name="avatar"
            type="url"
            placeholder="Avatar image URL"
            register={register}
          />
          <p className="text-xs text-orange-500 opacity-80 mt-1 mx-8 sm:mx-20">
            {errors.avatar?.message}
          </p>
        </div>

        <div className="relative">
          <label className="label text-xs font-semibold tracking-wider absolute ms-6">Bio</label>
          <CustomInput
            id="bio"
            name="bio"
            type="textarea"
            placeholder="Share something about yourself in your bio."
            register={register}
            className="h-36"
          />
          <p className="text-xs text-orange-500 opacity-80 mt-1 mx-8 sm:mx-20">
            {errors.bio?.message}
          </p>
        </div>

        <div className="flex justify-center">
          <SubmitButton buttonText="Submit edit" />
        </div>

        {loading && <p className="text-xs text-secondary ms-6">Submitting...</p>}
        {error && <p className="text-xs text-orange-500 ms-6">Error: {error}</p>}
      </form>
    </div>
  );
}

export default EditProfileForm;
