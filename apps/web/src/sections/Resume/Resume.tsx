import { Box, Button, Container, SectionHeading, Text } from '@peregrine-commit/ui';
import resumePdf from '../../utils/resume.pdf';

export const Resume = () => {
  function onDownloadResume(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Bobby-Carelse-Resume.pdf';
    link.click();
  }

  return (
    <Box id="resume" background="surface-sunken">
      <Container
        gap="space-6"
        py="space-24"
        flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <SectionHeading
          centered
          eyebrow="RESUME"
          title="Want the full paper trail?"
          description="Every role, stack, and engagement in one document."
        />
        <Box flex justifyContent="center" alignItems="center" gap="space-3" flexDirection="column">
          <Button onClick={onDownloadResume}>Download Resume</Button>
          <Text variant="body" size="sm" color="secondary">
            Bobby Carelse - Senior Fullstack Engineer
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
