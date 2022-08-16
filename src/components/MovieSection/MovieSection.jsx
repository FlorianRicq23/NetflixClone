import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel'
import MovieItem from '../MovieItem/MovieItem'
import LeftArrowIcon from '../LeftArrowIcon/LeftArrowIcon'
import RightArrowIcon from '../RightArrowIcon/RightArrowIcon'

function MovieSection({ title, items }) {
  return (
    <Box>
      <Heading as="h2" size="md">
        {title}
      </Heading>
      <Carousel show={8.5} slide={8} swiping={true} leftArrow={<LeftArrowIcon />} rightArrow={<RightArrowIcon />}>
        {items.results.length > 0 &&
          items.results.map((item, key) => <MovieItem key={key} item={item} />)}
      </Carousel>
    </Box>
  )
}

export default MovieSection
