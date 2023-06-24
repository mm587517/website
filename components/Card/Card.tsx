import { Flex, Img, Text, useBreakpointValue } from '@chakra-ui/react';
import { CardProps } from './Card.props';

export const Card: React.FC<CardProps> = ({
  image,
  name,
  title,
  organization,
}) => {
  const direction = useBreakpointValue({ base: 'column', sm: 'row' }) || 'row';

  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      w={96}
      minW={16}
      align='center'
    >
      <Img src={image} borderRadius='full' h={28} w={28} m={'4'} />
      <Flex flexDirection='column' align='center' m={2}>
        <Text fontSize='lg' fontWeight={'bold'}>
          {name}
        </Text>
        <Text fontSize='sm'>{title}</Text>
        <Text fontSize='sm'>{organization}</Text>
      </Flex>
    </Flex>
  );
};
