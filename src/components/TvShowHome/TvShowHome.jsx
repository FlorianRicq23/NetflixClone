import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect, useState } from 'react'
import { useMyList } from '../../utils/hooks'

function MovieHome({ filmHome }) {
  let genres = []
  if (filmHome.genres) {
    for (let genre of filmHome.genres) {
      genres.push(genre.name)
    }
  }
  const [like, setLike] = useState(false)
  const { myList, setMyList } = useMyList()
  let backdropPoster = ''
  if (filmHome.backdrop_path == null) backdropPoster = filmHome.poster_path
  else backdropPoster = filmHome.backdrop_path

  useEffect(() => {
    const checkLike = () => {
      for (let i = 0; i < myList.length; i++) {
        if (myList[i].id == filmHome.id) {
          return true
        }
      }
      return false
    }
    setLike(checkLike)
  }, [myList])

  const editLike = () => {
    setMyList((myList) => {
      let isAlreadyInList = false
      //On verifie si le film est dans la liste
      for (let i = 0; i < myList.length; i++) {
        //Il est dedans on mets a true
        if (myList[i].id === filmHome.id) {
          isAlreadyInList = true
        }
      }

      //Si il est deja dedans on return la liste
      if (isAlreadyInList) {
        let newList = myList.filter((movie) => movie.id !== filmHome.id)
        return newList
      }
      //Sinon on l'ajoute
      else {
        let newList = [filmHome, ...myList]
        return newList
      }
    })
  }

  return (
    <Box
      backgroundPosition={'center'}
      backgroundSize={'cover'}
      h={'100vh'}
      bgImage={{
        base: `url(https://image.tmdb.org/t/p/w500/${filmHome.poster_path})`,
        sm: `url(https://image.tmdb.org/t/p/original${backdropPoster})`,
      }}
    >
      <Box
        w="inherit"
        h="inherit"
        bgGradient="linear(to-t, #111 10%, transparent 40%)"
      >
        <Flex
          flexDirection={'column'}
          justifyContent={'flex-end'}
          pl={30}
          pb={50}
          pt={70}
          w="inherit"
          h="inherit"
          bgGradient="linear(to-r, #111 10%, transparent 70%)"
        >
          <Heading fontWeight={'bold'} fontSize={{ base: 25, md: 35, lg: 70 }}>
            {filmHome.name}
          </Heading>
          <Flex
            fontSize={{ base: 14, md: 14, lg: 18 }}
            mt={15}
            fontWeight="bold"
          >
            <Text mr={15} color="#46d363">
              {filmHome.vote_average.toFixed(2)}
            </Text>
            <Text>{filmHome.first_air_date}</Text>
          </Flex>
          <Text
            maxW="70%"
            mt={15}
            display={{ base: 'none', sm: 'block' }}
            fontSize={{ base: 16, md: 16, lg: 20 }}
            color="#999"
          >
            {filmHome.overview}
          </Text>
          <Flex mt={15}>
            <Button
              fontSize={{ base: 16, md: 16, lg: 20 }}
              fontWeight="bold"
              borderRadius={5}
              mr={11}
              bg="#fff"
              color="#000"
              _hover={{
                opacity: '0.7',
              }}
            >
              Lecture
            </Button>
            <Button
              _hover={{
                opacity: '0.7',
              }}
              fontSize={{ base: 16, md: 16, lg: 20 }}
              fontWeight="bold"
              borderRadius={5}
              bg="#333"
              color="#fff"
              onClick={editLike}
            >
              {like === true ? '- My List' : '+ My List'}
            </Button>
          </Flex>
          <Text mt={15} fontSize={{ base: 14, md: 14, lg: 18 }} color="#999">
            Genre : {genres.join(', ')}
          </Text>
        </Flex>
      </Box>
    </Box>
  )
}

export default MovieHome
