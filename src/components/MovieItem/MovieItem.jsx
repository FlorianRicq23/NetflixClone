import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'

function MovieItem({ item }) {
  return (
    <Box mr={5}>
      <Image
        alt={item.original_title}
        src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
      />
    </Box>
  )
}

export default MovieItem
