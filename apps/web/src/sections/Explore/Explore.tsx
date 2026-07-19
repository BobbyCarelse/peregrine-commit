import { Box, Container, SectionHeading } from '@peregrine-commit/ui';

export const Explore = () => {
  return (
    <Box id="explore" background="surface-sunken">
      <Container gap="space-6" py="space-24">
        <SectionHeading
          eyebrow="EXPLORE"
          title="Selected work"
          description="A sample of production systems I've built or rebuilt for clients."
        />
      </Container>
    </Box>
  );
};
