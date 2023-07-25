import React, { useState } from 'react';
import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { useSpring, animated } from 'react-spring';
import Confetti from 'react-dom-confetti';

interface GiftBoxProps {
  children?: React.ReactNode;
}

const gradientAnimation = keyframes`
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
`;

const GiftBox: React.FC<GiftBoxProps> = ({ children }) => {
  const [explode, setExplode] = useState(false);

  const props = useSpring({
    opacity: explode ? 0 : 1,
    transform: explode ? 'scale(0)' : 'scale(1)',
  });

  const bgGradient = 'linear-gradient(270deg, #7928CA, #FF0080)';

  const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 20,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: '10px',
    height: '10px',
    perspective: '500px',
    colors: ['#a864fd', '#29cdff', '#20b3ff', '#88d3ce', '#6236ff', '#f8ff00'],
  };

  const handleClick = () => {
    setExplode(true);
  };

  return (
    <Flex direction='column' alignItems='center'>
      <animated.div style={props}>
        <Box w='2px' h='25px' bg='#FFD700' />
        <Flex direction='column' alignItems='center' position='relative'>
          <Box
            bgGradient={bgGradient}
            w='200px'
            h='200px'
            rounded='md'
            boxShadow='lg'
            onClick={handleClick}
            sx={{
              backgroundSize: '200% 200%',
              animation: `${gradientAnimation} 3s linear infinite`,
            }}
          >
            <Box
              position='absolute'
              top='0'
              left='50%'
              transform='translateX(-50%)'
              w='10px'
              h='100%'
              bg='#FFD700'
              zIndex='1'
            />
            <Box
              position='absolute'
              top='50%'
              left='0'
              transform='translateY(-50%)'
              w='100%'
              h='10px'
              bg='#FFD700'
              zIndex='1'
            />
            {children}
          </Box>
          <Box
            position='absolute'
            top='-10px'
            bg='#FFD700'
            h='20px'
            w='70px'
            borderBottomRadius='10px'
          />
          <Box
            position='absolute'
            top='-10px'
            bg='#FFD700'
            h='20px'
            w='70px'
            borderBottomRadius='10px'
            transform='rotate(90deg)'
          />
        </Flex>
      </animated.div>
      {explode && (
        <Flex direction='column' alignItems='center'>
          <Heading as='h1' size='xl' mt={5}>
            Happy Birthday Twiggy!
          </Heading>
          <Image
            src='https://pbs.twimg.com/media/FOjBv0WVkAAQP-X?format=jpg&name=large'
            alt='Happy Birthday Image'
            boxSize='300px'
            objectFit='contain'
          />
        </Flex>
      )}
      <Confetti active={explode} config={confettiConfig} />
    </Flex>
  );
};

export default GiftBox;
