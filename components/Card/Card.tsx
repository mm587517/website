import { Flex, Img, Text, useBreakpointValue } from '@chakra-ui/react';
import { CardProps } from './Card.props';
import { useState } from 'react';

export const Card: React.FC<CardProps> = ({
  image,
  name,
  title,
  organization,
}) => {
  const [isJumping, setIsJumping] = useState(false);

  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });

  return (
    <Flex flexDirection={flexDirection} w={96} minW={16} align='center'>
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
