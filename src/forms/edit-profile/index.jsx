import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import SubmitButton from '../../components/buttons/submit-button';
import CustomInput from '../../components/inputs';
import ApiManager from '../../api-manager/api-manager';
import { useUserStore } from '../../stores/user-store';

// Validation schema
const schema = yup.object({
  bannerUrl: yup
    .string()
    .matches(
      /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/\S*)?$/,
      'Please enter a valid URL for the banner image.'
    ),
  avatarUrl: yup
    .string()
    .matches(
      /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/\S*)?$/,
      'Please enter a valid URL for the avatar image.'
    ),
  bio: yup.string().max(160, 'Bio must be under 160 characters.')
});

const EditProfileForm = () => {
  const { userProfile, setUserProfile } = useUserStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      bannerUrl: '',
      avatarUrl: '',
      bio: '',
      venueManager: false
    }
  });

  useEffect(() => {
    if (userProfile) {
      reset({
        bio: userProfile.bio || '',
        avatarUrl: userProfile.avatar?.url || '',
        bannerUrl: userProfile.banner?.url || '',
        venueManager: userProfile.venueManager || false
      });
    }
  }, [userProfile, reset]);

  const onSubmit = async (data) => {
    const { bio, avatarUrl, bannerUrl, venueManager } = data;

    const payload = {
      bio,
      avatar: { url: avatarUrl },
      banner: { url: bannerUrl },
      venueManager
    };

    try {
      const response = await ApiManager.editProfile(userProfile.name, payload);
      setUserProfile(response.data);
      window.location.reload();
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="edit-profile-form"
        className="mt-6 flex flex-col mx-auto">
        {/* Banner URL Input */}
        <div className="relative">
          <label className="label text-xs font-semibold tracking-wider absolute ms-6">Banner</label>
          <CustomInput
            id="bannerUrl"
            name="bannerUrl"
            type="url"
            placeholder="Banner image URL"
            register={register}
          />
          <p className="text-xs text-orange-500 opacity-80 mt-1 mx-8 sm:mx-20">
            {errors.bannerUrl?.message}
          </p>
        </div>

        {/* Avatar URL Input */}
        <div className="relative">
          <label className="label text-xs font-semibold tracking-wider absolute ms-6">Avatar</label>
          <CustomInput
            id="avatarUrl"
            name="avatarUrl"
            type="url"
            placeholder="Avatar image URL"
            register={register}
          />
          <p className="text-xs text-orange-500 opacity-80 mt-1 mx-8 sm:mx-20">
            {errors.avatarUrl?.message}
          </p>
        </div>

        {/* Bio Input */}
        <div className="relative">
          <label className="label text-xs font-semibold tracking-wider absolute ms-6">Bio</label>
          <CustomInput
            id="bio"
            name="bio"
            type="textarea"
            placeholder="Share something about yourself in your bio."
            register={register}
            className="h-24"
          />
          <p className="text-xs text-orange-500 opacity-80 mt-1 mx-8 sm:mx-20">
            {errors.bio?.message}
          </p>
        </div>

        {/* Venue Manager Toggle */}
        <div className="form-control">
          <label className="label cursor-pointer flex justify-center gap-4">
            <span className="label-text text-tBase">I want to be a venue manager</span>
            <input
              type="checkbox"
              {...register('venueManager')}
              className="toggle hover:bg-tBase bg-primary"
            />
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <SubmitButton buttonText="Update Profile" />
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
