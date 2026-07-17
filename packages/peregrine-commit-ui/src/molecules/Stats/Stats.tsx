import { Heading } from '../../atoms/Heading';
import { Text } from '../../atoms/Text';
import { Box } from '../../primitives/Box';

export interface StatsProps {
  stat: string;
  description: string;
}

export const Stats = ({ stat, description }: StatsProps) => {
  return (
    <Box flex flexDirection="column" gap="space-0">
      <Heading variant="display" weight={800} size="sm">
        {stat}
      </Heading>
      <Text variant="body" size="sm" color="secondary">
        {description}
      </Text>
    </Box>
  );
};
