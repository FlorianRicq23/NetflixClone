import React from 'react'
import ApiMovie from '../../ApiMovie'
import { useQuery } from 'react-query'
import { Box, Text, Grid, Flex } from '@chakra-ui/react'
import MovieItem from '../MovieItem/MovieItem'
import { useEffect } from 'react'
import MovieSection from '../MovieSection/MovieSection'

function SimilarMovies({ id }) {

  const { status, error, data } = useQuery([`similarMovies-${id}`], () =>
    ApiMovie.getSimilarMovies(id)
  )

  if (status === 'loading') return <Text>Loading</Text>

  return (
    <>
    <MovieSection title={'Suggestions'} items={data} />
    </>
  )
}

export default SimilarMovies
