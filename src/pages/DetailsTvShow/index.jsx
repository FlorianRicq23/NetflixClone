import ApiMovie from '../../ApiMovie'
import { useParams } from 'react-router-dom'
import MovieSection from '../../components/MovieSection/MovieSection'
import { useQuery } from 'react-query'
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  chakra,
  Icon,
} from '@chakra-ui/react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TvShowHome from '../../components/TvShowHome/TvShowHome'
import LoadingNetflix from '../../assets/loading-netflix.jpeg'
import { useEffect, useState } from 'react'
import { FaThumbsUp } from 'react-icons/fa'
import { useMyList } from '../../utils/hooks'
import TvSeason from '../../components/TvSeason'

function DetailsTvShow() {
  const { id: query } = useParams()
  const [like, setLike] = useState(false)
  const { myList, setMyList } = useMyList()
  let genres = []
  let companies = []
  let countries = []

  const { status, error, data } = useQuery([`details-movie-${query}`], () =>
    ApiMovie.getHomeMovieDetails(query, 'tv')
  )

  useEffect(() => {
    document.title = `Details movie - Netflix clone`
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    const checkLike = () => {
      for (let i = 0; i < myList.length; i++) {
        if (myList[i].id == query) {
          return true
        }
      }
      return false
    }
    setLike(checkLike)
  }, [myList])

  if (status === 'error') return <Box>Erreur</Box>

  if (status === 'loading')
    return <Image h="100vh" w="100%" src={LoadingNetflix} alt="Logo" />
  else {
    for (let genre of data.genres) {
      genres.push(genre.name)
    }
    for (let companie of data.production_companies) {
      companies.push(companie.name)
    }
    for (let countrie of data.production_countries) {
      countries.push(countrie.name)
    }
  }

  const editLike = () => {
    setMyList((myList) => {
      let isAlreadyInList = false
      //On verifie si le film est dans la liste
      for (let i = 0; i < myList.length; i++) {
        //Il est dedans on mets a true
        if (myList[i].id === data.id) {
          isAlreadyInList = true
        }
      }

      //Si il est deja dedans on return la liste
      if (isAlreadyInList) {
        let newList = myList.filter((movie) => movie.id !== data.id)
        return newList
      }
      //Sinon on l'ajoute
      else {
        let newList = [data, ...myList]
        return newList
      }
    })
  }

  return (
    <Box>
      <Header />
      <Box mt={16} className="fond-noir">
        <Box
          backgroundPosition={'center'}
          backgroundSize={'cover'}
          h={{
            base: '30vh',
            sm: '40vh',
            md: '70vh',
            lg: '90vh',
          }}
          max-width="100%"
          bgImage={`url(https://image.tmdb.org/t/p/original${data.backdrop_path})`}
        >
          <Box
            w="inherit"
            h="inherit"
            bgGradient={{ md: 'linear(to-t, #111 5%, transparent 70%)' }}
          >
            <Flex
              flexDirection={'column'}
              justifyContent={'flex-end'}
              pl={30}
              pb={50}
              pt={70}
              w="inherit"
              h="inherit"
              //bgGradient="linear(to-r, #111 10%, transparent 70%)"
            >
              <Heading
                fontWeight={'bold'}
                fontSize={{ base: 25, md: 35, lg: 70 }}
                display={{ base: 'none', md: 'block' }}
              >
                {data.title}
              </Heading>
              <Flex mt={15} display={{ base: 'none', md: 'block' }}>
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
            </Flex>
          </Box>
        </Box>

        <Flex
          w="100%"
          p={{ base: 3, md: 10 }}
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent={'space-between'}
          fontSize={{ base: 12, md: 18 }}
        >
          <Box w={{ base: '100%', md: '65%' }}>
            <Heading
              fontWeight={'bold'}
              fontSize={{ base: 25, md: 35, lg: 70 }}
              display={{ md: 'none' }}
            >
              {data.title}
            </Heading>
            <Flex fontWeight="bold" mb={5}>
              <Text mr={15} color="#46d363">
                {data.vote_average.toFixed(2)}
              </Text>
              <Text mr={15}>{data.number_of_seasons} seasons</Text>
              <Text mr={15}>{data.number_of_episodes} episodes</Text>
            </Flex>
            {data.vote_count > 2000 ? (
              <Flex alignItems={'center'} fontWeight={'bold'} mb={5}>
                <Icon
                  as={FaThumbsUp}
                  color="red"
                  height={'18px'}
                  width={'18px'}
                  mr={2}
                />
                Parmi les plus aimés
              </Flex>
            ) : null}

            <Flex
              w="100%"
              flexDirection={'column'}
              display={{ md: 'none' }}
              mb={5}
            >
              <Button
                w="100%"
                fontSize={13}
                h={7}
                fontWeight="bold"
                borderRadius={5}
                bg="#fff"
                _hover={{
                  background: '#fff',
                }}
                _focus={{ bg: '#fff' }}
                color="#000"
              >
                Lecture
              </Button>
              <Button
                w="100%"
                mt={3}
                h={7}
                fontSize={13}
                fontWeight="bold"
                borderRadius={5}
                bg="#333"
                color="#fff"
                _hover={{
                  background: '#333',
                }}
                _focus={{ bg: '#333' }}
                onClick={editLike}
              >
                {like === true ? '- My List' : '+ My List'}
              </Button>
            </Flex>
            <Text>{data.overview}</Text>
          </Box>
          <Box w={{ base: '100%', md: '30%' }} mt={{ base: 5, md: 0 }}>
            <Text mb={{ md: 5 }}>
              <chakra.span color="#999">Production companies : </chakra.span>
              {companies.join(', ')}
            </Text>
            <Text mb={{ md: 5 }}>
              <chakra.span color="#999">Production countries : </chakra.span>
              {countries.join(', ')}
            </Text>
            <Text>
              <chakra.span color="#999">Genres : </chakra.span>
              {genres.join(', ')}
            </Text>
          </Box>

        </Flex>
          <Box>
            {data.seasons.map((season, index) => 
            <Box key={index}>
              {season.season_number>0 ? <TvSeason id={query} season={season.season_number}/> : null}
              </Box>
            )}
          </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default DetailsTvShow
