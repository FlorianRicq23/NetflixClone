import React from 'react'
import ApiMovie from '../../ApiMovie'
import { useQuery } from 'react-query'
import { Box, Heading, Text } from '@chakra-ui/react'

function TvSeason({ id, season }) {
  const { status, error, data } = useQuery([`tv-season-${id}-${season}`], () =>
    ApiMovie.getTvSeason(id, season)
  )

  if (status === 'loading') return <Text>Loading</Text>

  return (
    <>
      <Heading>Saison {season}</Heading>
      <Box>
        {data.episodes.map((episode, index) => 
        <Text key={index}>{episode.name}</Text>
      
      )}
      </Box>
    </>
  )
}

export default TvSeason
