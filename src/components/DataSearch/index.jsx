import React from 'react'
import ApiMovie from '../../ApiMovie'
import { useQuery } from 'react-query'
import { Box, Text, Grid, Flex } from '@chakra-ui/react'
import MovieItem from '../MovieItem/MovieItem'
import { useEffect } from 'react'

function DataSearch({ keyword }) {

    const { status:sPop, error:ePop, data:dPop } = useQuery([`popularMovies`], () =>
    ApiMovie.getPopularMovies()
  )

  const { status, error, data } = useQuery([`searchMovies-${keyword}`], () =>
    ApiMovie.getSearchMovies(keyword)
  )

  if (error) return <Text>Error try to refresh</Text>
  if (ePop) return <Text>Error try to refresh</Text>
  if (status === 'loading') return <Text>Loading</Text>
  if (sPop === 'loading') return <Text>Loading</Text>

  return (
    <>
    {data.results ? <Grid
        justifyContent={'left'}
        templateColumns={{
          base: 'repeat(auto-fill, minmax(100px, 1fr))',
          md: 'repeat(auto-fill, minmax(150px, 1fr))',
        }}
        gridGap={5}
      >
        {data.results.map((movie, index) => (
          <MovieItem key={index} item={movie} />
        ))}
      </Grid> : <Grid
        justifyContent={'left'}
        templateColumns={{
          base: 'repeat(auto-fill, minmax(100px, 1fr))',
          md: 'repeat(auto-fill, minmax(150px, 1fr))',
        }}
        gridGap={5}
      >
        {dPop.results.map((movie, index) => (
          <MovieItem key={index} item={movie} />
        ))}
      </Grid> }
      
    </>
  )
}

export default DataSearch
