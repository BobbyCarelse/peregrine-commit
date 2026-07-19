import { Box, Button, Container, Input, SectionHeading, Textarea } from '@peregrine-commit/ui';
import { Formik } from 'formik';
import { contactFormValidationSchema } from './Contact.validation';

export const Contact = () => {
  function handleSubmit(values: any) {
    console.log(values);
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
        <Formik
          onSubmit={handleSubmit}
          initialValues={{ name: '', email: '', description: '', phoneNumber: '', hearAboutMe: '' }}
          validationSchema={contactFormValidationSchema}
        >
          {({ handleSubmit, getFieldHelpers, getFieldMeta }) => (
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
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                Send message
              </Button>
            </Box>
          )}
        </Formik>
      </Container>
    </Box>
  );
};
