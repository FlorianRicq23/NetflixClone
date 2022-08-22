import { Box, Button, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

function MovieItem({ item }) {
  const [isVisible, setIsVisible] = useState(false)

  function over(e) {
    setIsVisible(true)
  }
  function out(e) {
    setIsVisible(false)
  }

  return (
    <>
    <Box         className='movieRow--item'
>
      <Image
        alt={item.original_title}
        src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
      /></Box>
    
    {/* <Box mr={5} onMouseOver={over} onMouseOut={out} h={'100%'} w={'100%'}>
      <Image
        display={isVisible ? 'none' : null}
        alt={item.original_title}
        src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
      />
      <Flex
        direction={'row'}
        h={'200%'}
        w={'200%'}
        rounded="md"
        display={isVisible ? null : 'none'}
      >
        <Image
          alt={item.original_title}
          src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
          w='50%'
        />
        <Box w='50%' color="white" bg="teal.500">
          Box
        </Box>
      </Flex>
    </Box> */}
    </>
  )
}

export default MovieItem
