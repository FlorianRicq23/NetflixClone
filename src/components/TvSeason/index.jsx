import React from 'react'
import ApiMovie from '../../ApiMovie'
import { useQuery } from 'react-query'
import { Box, Text, Image, Flex } from '@chakra-ui/react'

function TvSeason({ id, season }) {
  const { status, error, data } = useQuery([`tv-season-${id}-${season}`], () =>
    ApiMovie.getTvSeason(id, season)
  )

  if (status === 'loading') return <Text>Loading</Text>

  return (
    <>
      <Box display={{ base: 'none', md: 'block' }}>
        {data.episodes.map((episode, index) => (
          <Box
            key={index}
            bg="#333"
            h={150}
            pr={10}
            pl={10}
            mb={3}
            borderRadius={10}
            _hover={{
              background: "#4a4a4a",
            }}
          >
            <Flex flexDirection={'row'} alignItems="center">
              <Flex
                w={{ base: '10%', xl: '5%' }}
                p={5}
                justifyContent={'center'}
              >
                <Text fontWeight={'bold'} fontSize={25}>
                  {episode.episode_number}
                </Text>
              </Flex>
              <Flex
                w={{ base: '20%', xl: '20%' }}
                p={5}
                justifyContent={'center'}
                h={150}
              >
                <Image
                  maxW={{ base: 180, xl: 200 }}
                  maxHeight={'100%'}
                  rounded={'md'}
                  alt={episode.name}
                  src={`https://image.tmdb.org/t/p/w500/${episode.still_path}`}
                />
              </Flex>
              <Flex
                flexDirection={'column'}
                justifyContent="space-between"
                w={{ base: '70%', xl: '75%' }}
                p={5}
                h={150}
              >
                <Flex flexDirection={'row'} justifyContent="space-between">
                  <Text fontWeight={'bold'}>{episode.name}</Text>
                  <Text>{episode.runtime} min</Text>
                </Flex>
                <Text noOfLines={3} color="lightgray">
                  {episode.overview}
                </Text>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Box>

      <Box display={{ md: 'none' }}>
        {data.episodes.map((episode, index) => (
          <Flex key={index} mb={3} flexDirection={'column'} h={{base:100, sm:150}}>
            <Flex flexDirection={'row'} h={'60%'}>
              <Image
                w="30%"
                rounded={'md'}
                alt={episode.name}
                src={`https://image.tmdb.org/t/p/w500/${episode.still_path}`}
              />
              <Flex flexDirection={'column'} alignItems="left" justifyContent={'center'} p={5}>
                <Text fontWeight={'bold'} fontSize={{ base: 14, md: 18 }}>
                  {episode.episode_number}. {episode.name}
                </Text>
                <Text color="lightgray" fontSize={{ base: 12, md: 18 }}>
                  {episode.runtime} min
                </Text>
              </Flex>
            </Flex>
            <Flex
              flexDirection={'column'}
              justifyContent="space-between"
              h={'40%'}
            >
              <Text
                fontSize={{ base: 12, md: 18 }}
                noOfLines={2}
                color="lightgray"
              >
                {episode.overview}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Box>
    </>
  )
}

export default TvSeason
