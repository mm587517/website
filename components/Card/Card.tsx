import { Flex, Img, Text, useBreakpointValue } from '@chakra-ui/react';
import { CardProps } from './Card.props';

export const Card: React.FC<CardProps> = ({
  image,
  name,
  title,
  organization,
}) => {
  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      w={96}
      minW={16}
      align='center'
    >
      <Img src={image} borderRadius='full' h={32} w={32} m={'4'} />
      <Flex flexDirection='column' align='center' m={2}>
        <Text fontSize='xl' fontWeight={'bold'}>
          {name}
        </Text>
        <Text fontSize='md'>{title}</Text>
        <Text fontSize='md'>{organization}</Text>
      </Flex>
    </Flex>
  );
};
