import {
  Box,
  Button,
  Container,
  Input,
  SectionHeading,
  Text,
  Textarea,
} from '@peregrine-commit/ui';
import { Formik, type FormikHelpers } from 'formik';
import { useState } from 'react';
import { sendContactEmail } from '../../utils/email';
import { contactFormValidationSchema } from './Contact.validation';

interface ContactFormValues {
  name: string;
  email: string;
  description: string;
  phoneNumber: string;
  hearAboutMe: string;
}

export const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function handleSubmit(
    values: ContactFormValues,
    { resetForm }: FormikHelpers<ContactFormValues>,
  ) {
    setStatus('idle');
    try {
      await sendContactEmail({
        name: values.name,
        email: values.email,
        description: values.description,
        phoneNumber: values.phoneNumber,
        hearAboutMe: values.hearAboutMe,
      });
      setStatus('success');
      resetForm();
    } catch {
      setStatus('error');
    }
  }

  return (
    <Box id="contact" background="bg">
      <Container gap="space-6" py="space-24">
        <SectionHeading
          centered
          eyebrow="Get in touch"
          title="Start a project"
          description="Tell me what you're building — I'll reply within a day."
        />
        <Formik<ContactFormValues>
          onSubmit={handleSubmit}
          initialValues={{ name: '', email: '', description: '', phoneNumber: '', hearAboutMe: '' }}
          validationSchema={contactFormValidationSchema}
        >
          {({ handleSubmit, isSubmitting, getFieldHelpers, getFieldMeta }) => (
            <Box gap="space-6" flex flexDirection="column">
              <Input
                name="name"
                placeholder="Your Name"
                label="Name"
                {...getFieldHelpers('name')}
                {...getFieldMeta('name')}
              />
              <Input
                type="email"
                name="email"
                placeholder="you@company.com"
                label="Email"
                {...getFieldHelpers('email')}
                {...getFieldMeta('email')}
              />
              <Input
                name="phoneNumber"
                placeholder="+27 81 345 6789"
                label="Phone number (optional)"
                {...getFieldHelpers('phoneNumber')}
                {...getFieldMeta('phoneNumber')}
              />
              <Input
                name="hearAboutMe"
                placeholder="LinkedIn, Instagram etc"
                label="How did you hear about me? (optional)"
                {...getFieldHelpers('hearAboutMe')}
                {...getFieldMeta('hearAboutMe')}
              />
              <Textarea
                name="description"
                placeholder="Tell me about the project?"
                label="Project details"
                {...getFieldHelpers('description')}
                {...getFieldMeta('description')}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
              </Button>
              {status === 'success' && (
                <Text color="success">Thanks — your message is on its way to me.</Text>
              )}
              {status === 'error' && (
                <Text color="danger">
                  Something went wrong sending your message. Please try again.
                </Text>
              )}
            </Box>
          )}
        </Formik>
      </Container>
    </Box>
  );
};
