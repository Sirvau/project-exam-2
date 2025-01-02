import PropTypes from 'prop-types';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SubmitButton from '../../components/buttons/submit-button';
import CustomInput from '../../components/inputs';
import ApiManager from '../../api-manager/api-manager';
import useVenueStore from '../../stores/venue-store';

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
export function UpdateVenueForm({ venueData, onSubmit }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { updateProfileVenue } = useVenueStore();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: venueData?.name || '',
      city: venueData?.location?.city || '',
      description: venueData?.description || '',
      maxGuests: venueData?.maxGuests || '',
      price: venueData?.price || '',
      media: venueData?.media?.[0]?.url || ''
    }
  });

  useEffect(() => {
    if (venueData) {
      setValue('name', venueData.name);
      setValue('city', venueData.location?.city);
      setValue('description', venueData.description);
      setValue('maxGuests', venueData.maxGuests);
      setValue('price', venueData.price);
      setValue('media', venueData.media?.[0]?.url);
    }
  }, [venueData, setValue]);

  const _onSubmit = async (data) => {
    if (!venueData?.id) {
      setError('Venue ID is missing.');
      return;
    }

    const requestBody = {
      name: data.name,
      description: data.description,
      price: data.price,
      maxGuests: data.maxGuests,
      media: [{ url: data.media, alt: `${data.name} image` }],
      meta: venueData.meta,
      location: {
        ...venueData.location,
        city: data.city
      }
    };

    setLoading(true);
    setError(null);

    try {
      const response = await ApiManager.updateVenue(venueData.id, requestBody);
      updateProfileVenue(venueData.id, response);
      if (onSubmit) onSubmit();
      console.log('Venue updated successfully:', response);
    } catch (err) {
      setError(err.response?.data?.message || 'Error updating venue. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(_onSubmit)}
      className="flex flex-col items-center gap-1 w-full max-w-lg p-6">
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
        className="h-36"
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
        type="text"
        placeholder="Media URL"
        register={register}
        error={errors.media?.message}
      />
      <SubmitButton buttonText={loading ? 'Updating...' : 'Update Venue'} disabled={loading} />
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}

UpdateVenueForm.propTypes = {
  venueData: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    maxGuests: PropTypes.number,
    media: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
        alt: PropTypes.string
      })
    ),
    location: PropTypes.shape({
      city: PropTypes.string
    }),
    meta: PropTypes.object
  }),
  onSubmit: PropTypes.func
};

export default UpdateVenueForm;
