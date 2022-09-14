import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function MovieHome({ filmHome }) {
  let genres = []
  for (let genre of filmHome.genres) {
    genres.push(genre.name)
  }
  return (
    <Box
      backgroundPosition={'center'}
      backgroundSize={'cover'}
      h={'100vh'}
      bgImage={{ base: `url(https://image.tmdb.org/t/p/w500/${filmHome.poster_path})`, sm: `url(https://image.tmdb.org/t/p/original${filmHome.backdrop_path})` }}
    >
      <Box
        w="inherit"
        h="inherit"
        bgGradient="linear(to-t, #111 10%, transparent 70%)"
      >
        <Flex
          flexDirection={'column'}
          justifyContent={'flex-end'}
          pl={30}
          pb={150}
          pt={70}
          w="inherit"
          h="inherit"
          bgGradient="linear(to-r, #111 10%, transparent 70%)"
        >
          <Heading fontWeight={'bold'} fontSize={{ base: 25, md: 35, lg: 70 }}>
            {filmHome.name}
          </Heading>
          <Flex fontSize={{ base: 14, md: 14, lg: 18 }} mt={15} fontWeight="bold">
            <Text mr={15} color="#46d363">
              {filmHome.vote_average.toFixed(2)}
            </Text>
            <Text>{filmHome.first_air_date}</Text>
          </Flex>
          <Text maxW="70%" mt={15} display={{ base: 'none', sm: 'block' }} fontSize={{ base: 16, md: 16, lg: 20 }} color="#999">
            {filmHome.overview}
          </Text>
          <Flex mt={15}>
            <Button
               fontSize={{ base: 16, md: 16, lg: 20 }}
              fontWeight="bold"
              borderRadius={5}
              mr={11}
              bg="#fff"
              color="#000"
              _hover={{
                opacity: '0.7',
              }}
            >
              Lecture
            </Button>
            <Button
              _hover={{
                opacity: '0.7',
              }}
              fontSize={{ base: 16, md: 16, lg: 20 }}
              fontWeight="bold"
              borderRadius={5}
              bg="#333"
              color="#fff"
            >
              + Ma Liste
            </Button>
          </Flex>
          <Text mt={15} fontSize={{ base: 14, md: 14, lg: 18 }} color="#999">
            Genre : {genres.join(', ')}
          </Text>
        </Flex>
      </Box>
    </Box>
  )
}

export default MovieHome
