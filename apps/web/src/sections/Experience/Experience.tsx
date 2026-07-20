import { Box, Container, Heading, SectionHeading } from '@peregrine-commit/ui';

export const Experience = () => {
  return (
    <Box id="experience" background="bg">
      <Container gap="space-6" py="space-24">
        <SectionHeading
          eyebrow="EXPERIENCE"
          title="Seven years, six industires"
          description="Independent consulting through Peregrine Commit, plus the roles that came before it."
        />

        <Box flex justifyContent="center" alignItems="center">
          <Heading>Coming Soon...</Heading>
        </Box>
      </Container>
    </Box>
  );
};
