import * as yup from 'yup';

export const contactFormValidationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  description: yup.string().required('Project details is required'),
  phoneNumber: yup.string().optional(),
  hearAboutMe: yup.string().optional(),
});
