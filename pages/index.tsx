import { useState } from 'react';
import { Box, Flex, Link, Text, useMediaQuery } from '@chakra-ui/react';
import { Card } from '../components/Card/Card';
import { PageLayout } from '../components/PageLayout';

const Home = () => {
  const [showReal, setShowReal] = useState(true);
  const [isSmallerScreen] = useMediaQuery('(max-width: 768px)');

  const myImage =
    'https://media.licdn.com/dms/image/C4D03AQG44sxS35Tj-A/profile-displayphoto-shrink_800_800/0/1600367396787?e=2147483647&v=beta&t=P1fmf7DnE7rtSz0wVaU9ckzIJDeuK1d8R7678BvLsMY';
  const other =
    'https://media.discordapp.net/attachments/673301910433955850/969675945181065257/marcelo.png?width=1227&height=1227';
  const clickGif =
    'https://media2.giphy.com/media/QAsu4cugSWDOo7JI8Y/giphy.gif?cid=ecf05e47hpsgvpao0pfpws5s2oz4939h2q3isp7rnr4vhvhm&ep=v1_stickers_search&rid=giphy.gif&ct=s';

  const handleMouseEnter = () => {
    setShowReal(false);
  };

  const handleMouseLeave = () => {
    setShowReal(true);
  };

  return (
    <PageLayout>
      <Flex justifyContent={'center'} alignItems={'center'}>
        <Box
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          position='relative'
          backgroundImage={!showReal ? `url('${clickGif}')` : 'none'}
          backgroundSize='cover'
          backgroundPosition='center'
          w={96}
          cursor={'url(zenitsu_cur.png), auto'}
        >
          <Box
            opacity={showReal ? 1 : 0}
            transition='opacity 0.5s ease-in-out'
            top={0}
            left={0}
            right={0}
            bottom={0}
            zIndex={showReal ? 10 : 0}
          >
            <Card
              name='Marcelo Morales'
              title='Ph.D Student'
              organization='The Ohio State University'
              image={myImage}
            />
          </Box>

          <Box
            opacity={!showReal ? 1 : 0}
            transition='opacity 0.5s ease-in-out'
            position='absolute'
            top={0}
            left={0}
            right={0}
            bottom={0}
            zIndex={!showReal ? 10 : 0}
            fontFamily='cursive'
          >
            <Card
              name='Marcelo Morales'
              title='Ph.D Student'
              organization='The Ohio State University'
              image={other}
            />
          </Box>
        </Box>
      </Flex>

      <Box ml={isSmallerScreen ? 16 : 64} mr={isSmallerScreen ? 16 : 64}>
        <Text fontSize={18} mt={8}>
          Hello there! I&apos;m Marcelo, currently in my second year of pursuing
          a PhD at <i>The</i> Ohio State University. In 2022, I earned my
          bachelor&apos;s degree from Ohio University, under the insightful
          guidance of{' '}
          <Link
            fontWeight={'bold'}
            href='https://www.ohio.edu/engineering/about/people/chenji'
            _hover={{ textDecoration: 'none', color: 'teal.300' }}
          >
            Dr. Harsha Chenji
          </Link>
          .
        </Text>

        <br />
        <Text fontSize={18}>
          Welcome to my notes! I plan to gather everything that represents my
          career journey. This space is designed to be a central hub for a range
          of content – from class notes to research findings and just about any
          interesting tidbits. Don&apos;t miss the publications tab, where
          I&apos;ll be sharing my academic adventures as they unfold!
        </Text>
      </Box>
    </PageLayout>
  );
};

export default Home;
