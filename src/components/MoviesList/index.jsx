import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import MovieSection from '../MovieSection/MovieSection'

function MoviesList({ data }) {
  return (
    <Box>
      {data.map((item, key) => (
        <MovieSection key={key} title={item.title} items={item.items} />
      ))}
    </Box>
  )
}

export default MoviesList
