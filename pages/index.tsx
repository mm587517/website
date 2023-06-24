import { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Card } from '../components/Card/Card';
import { PageLayout } from '../components/PageLayout';

const Home = () => {
  const [showReal, setShowReal] = useState(true);

  const myImage =
    'https://media.licdn.com/dms/image/C4D03AQG44sxS35Tj-A/profile-displayphoto-shrink_800_800/0/1600367396787?e=2147483647&v=beta&t=P1fmf7DnE7rtSz0wVaU9ckzIJDeuK1d8R7678BvLsMY';
  const zenitsu =
    'https://i.pinimg.com/originals/1d/3d/bf/1d3dbf048330590da90564fc6404451a.gif';
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
          // style={{ cursor: 'url(zenitsu_cur.png), auto' }}
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
          >
            <Card
              name='Zenitsu Agatsuma'
              title='Kanoe'
              organization='Demon Slayer Corps'
              image={zenitsu}
            />
          </Box>
        </Box>
      </Flex>
    </PageLayout>
  );
};

export default Home;
