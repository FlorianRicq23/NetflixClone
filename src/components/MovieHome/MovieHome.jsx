import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"

function MovieHome({ filmHome }) {
  return (
    <Flex backgroundPosition={'center'} backgroundSize={'cover'} h={'100vh'} bgImage={`url(https://image.tmdb.org/t/p/original${filmHome.backdrop_path})`}
    flexDirection={'column'} justifyContent={'center'} pl={30} pb={150} pt={70} >
      <Heading fontWeight={'bold'} fontSize={70}>{ filmHome.title }</Heading>
      <Flex fontSize={18} mt={15} fontWeight='bold'>
        <Text mr={15} color='#46d363'>{filmHome.vote_average.toFixed(2)}</Text>
        <Text>{filmHome.release_date}</Text>
      </Flex>
      <Text maxW='70%' mt={15} fontSize={20} color='#999'>{filmHome.overview}</Text>
    </Flex>
  )
}

export default MovieHome