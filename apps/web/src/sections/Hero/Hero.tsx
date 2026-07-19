import { Box, Button, Container, SectionHeading, Stats } from '@peregrine-commit/ui';

import { useNavigate } from 'react-router';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <Box id="home" background="bg">
      <Container flex flexDirection="column" justifyContent="center" gap="space-6" py="space-24">
        <SectionHeading
          gap="space-6"
          heading={{ size: 'xl', weight: 800 }}
          eyebrow="PEREGRINE COMMIT - SENIOR FULL-STACK ENGINEER"
          title="Seven years of shipping code that has to work."
          description="I'm Bobby Carelse - I take on senior full-stack and mobile engagements end to end: architecture, delivery, and the parts agencies skip. Always honest scoping, always a working commit to show for it."
        />
        <Box flex gap="space-3">
          <Button onClick={() => navigate('/contact')}>Start a Project</Button>
          <Button variant="secondary" onClick={() => navigate('/explore')}>
            See my work
          </Button>
        </Box>
        <Box flex gap="space-6">
          <Stats stat="7+ yrs" description="In production" />
          <Stats stat="6" description="Industries" />
          <Stats stat="Solo" description="No handoffs" />
        </Box>
      </Container>
    </Box>
  );
};
