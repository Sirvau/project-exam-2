import * as yup from 'yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SubmitButton from '../../components/buttons/submit-button';
import CustomInput from '../../components/inputs';
import ApiManager from '../../api-manager/api-manager';

// Validation schema
const schema = yup
  .object({
    name: yup.string().required('Please enter the venue name'),
    city: yup.string().required('Please enter the city'),
    description: yup.string().required('Please enter a description'),
    maxGuests: yup
      .number()
      .typeError('Max guests must be a number')
      .required('Please enter the maximum number of guests'),
    price: yup.number().typeError('Price must be a number').required('Please enter the price'),
    media: yup.string().url('Please enter a valid URL').required('Please provide an image URL')
  })
  .required();

export function CreateVenueForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    const requestBody = {
      name: data.name,
      description: data.description,
      price: data.price,
      maxGuests: data.maxGuests,
      media: [{ url: data.media, alt: `${data.name} image` }],
      meta: {
        wifi: true,
        parking: true,
        breakfast: true,
        pets: true
      },
      location: {
        city: data.city
      }
    };

    setLoading(true);
    setError(null);

    try {
      const response = await ApiManager.createVenue(requestBody);
      console.log('Venue created successfully:', response);
    } catch (err) {
      setError('Error creating venue. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 w-full max-w-lg p-6">
        <CustomInput
          id="name"
          name="name"
          type="text"
          placeholder="Venue Name"
          register={register}
          error={errors.name?.message}
        />
        <CustomInput
          id="city"
          name="city"
          type="text"
          placeholder="City"
          register={register}
          error={errors.city?.message}
        />
        <CustomInput
          id="description"
          name="description"
          type="textarea"
          placeholder="Description"
          register={register}
          error={errors.description?.message}
        />
        <CustomInput
          id="maxGuests"
          name="maxGuests"
          type="number"
          placeholder="Max Guests"
          register={register}
          error={errors.maxGuests?.message}
        />
        <CustomInput
          id="price"
          name="price"
          type="number"
          placeholder="Price"
          register={register}
          error={errors.price?.message}
        />
        <CustomInput
          id="media"
          name="media"
          type="url"
          placeholder="Image URL"
          register={register}
          error={errors.media?.message}
        />
        <div className="text-center">
          <SubmitButton buttonText={loading ? 'Creating...' : 'Create Venue'} disabled={loading} />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
      </form>
    </div>
  );
}

export default CreateVenueForm;
