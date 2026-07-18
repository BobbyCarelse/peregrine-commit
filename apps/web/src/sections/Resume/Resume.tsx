import { Box, Container, SectionHeading } from "@peregrine-commit/ui"

export const Resume = () => {

    return <Box background="surface-sunken">
        <Container  gap="space-6" py="space-24" flex justifyContent="center" alignItems="center">
        <SectionHeading 
        centered
        eyebrow="RESUME"
        title="Want the full paper trail?"
        description="Every role, stack, and engagement in one document."
      />
    </Container>
    </Box>
}