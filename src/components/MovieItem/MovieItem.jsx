import { Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function MovieItem({ item }) {
  return (
    <>
      <Link key={`details-movie-${item.id}`} to={item.first_air_date===undefined ? `/details-movie/${item.id}` : `/details-tvshow/${item.id}` }>
        <Image
          width={'95%'}
          rounded={'md'}
          alt={item.original_title}
          src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
        />
      </Link>
    </>
  )
}

export default MovieItem
