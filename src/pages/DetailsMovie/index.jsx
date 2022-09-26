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
import { useEffect } from 'react'
import { FaThumbsUp } from 'react-icons/fa'

function DetailsMovie() {
  let genres = []
  let companies = []
  let countries = []

  const { id: query } = useParams()
  const { status, error, data } = useQuery([`details-movie-${query}`], () =>
    ApiMovie.getHomeMovieDetails(query, 'movie')
  )

  useEffect(() => {
    document.title = `Details movie - Netflix clone`
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }, [])

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

  return (
    <Box>
      <Header />
      <Box mt={16} className="fond-noir">
        <Box
          backgroundPosition={'center'}
          backgroundSize={'cover'}
          h={{
            base: '40vh',
            md: '70vh',
          }}
          bgImage={{
            base: `url(https://image.tmdb.org/t/p/original/${data.poster_path})`,
            sm: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
          }}
        >
          <Box
            w="inherit"
            h="inherit"
            bgGradient="linear(to-t, #111 10%, transparent 70%)"
          >
            <Flex
              flexDirection={'column'}
              justifyContent={'flex-end'}
              pl={30}
              pb={70}
              pt={70}
              w="inherit"
              h="inherit"
              //bgGradient="linear(to-r, #111 10%, transparent 70%)"
            >
              <Heading
                fontWeight={'bold'}
                fontSize={{ base: 25, md: 35, lg: 70 }}
              >
                {data.title}
              </Heading>
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
                >
                  + Ma Liste
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Box>

        <Flex
          w="100%"
          p={10}
          flexDirection={'row'}
          justifyContent={'space-between'}
        >
          <Box w={'65%'}>
            <Flex
              fontSize={{ base: 14, md: 14, lg: 18 }}
              fontWeight="bold"
              mb={5}
            >
              <Text mr={15} color="#46d363">
                {data.vote_average.toFixed(2)}
              </Text>
              <Text mr={15}>{data.release_date}</Text>
              <Text>
                {(data.runtime - (data.runtime % 60)) / 60} h{' '}
                {data.runtime % 60} min
              </Text>
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

            <Text>{data.overview}</Text>
          </Box>
          <Box w="30%">
            <Text mb={5}>
              <chakra.span color="#999">Production companies : </chakra.span>
              {companies.join(', ')}
            </Text>
            <Text mb={5}>
              <chakra.span color="#999">Production countries : </chakra.span>
              {countries.join(', ')}
            </Text>
            <Text>
              <chakra.span color="#999">Genres : </chakra.span>
              {genres.join(', ')}
            </Text>
          </Box>
        </Flex>
      </Box>
      <Footer />
    </Box>
  )
}

export default DetailsMovie
