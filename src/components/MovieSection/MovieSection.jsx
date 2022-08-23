import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel'
import MovieItem from '../MovieItem/MovieItem'
import LeftArrowIcon from '../LeftArrowIcon/LeftArrowIcon'
import RightArrowIcon from '../RightArrowIcon/RightArrowIcon'

function MovieSection({ title, items }) {
  return (
    <Box pb={14}>
      <Heading as="h2" size="md" pl={{base:2, md:12}} mb={4}>
        {title}
      </Heading>
      <Box display={{ base: 'none', md: 'block' }}>
        <Carousel
          show={8.5}
          slide={8}
          responsive={true}
          swiping={true}
          dynamic={true}
          leftArrow={<LeftArrowIcon />}
          rightArrow={<RightArrowIcon />}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <MovieItem key={key} item={item} />
            ))}
        </Carousel>
      </Box>
      <Box display={{ md: 'none' }} pl={2} className='lock-slide'>
        <Carousel
          show={3.5}
          slide={3}
          responsive={true}
          swiping={true}
          dynamic={true}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <MovieItem key={key} item={item} />
            ))}
        </Carousel>
      </Box>
    </Box>
  )
}

export default MovieSection
