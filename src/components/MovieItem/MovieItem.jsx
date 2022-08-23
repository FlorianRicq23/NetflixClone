import { Box, Image } from '@chakra-ui/react'
import React from 'react'

function MovieItem({ item }) {
  return (
    <>
        <Image
          width={'95%'}
          rounded={'md'}
          alt={item.original_title}
          src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
        />
    </>
  )
}

export default MovieItem
