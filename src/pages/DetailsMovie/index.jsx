import ApiMovie from '../../ApiMovie'
import { useParams } from 'react-router-dom'
import MovieSection from '../../components/MovieSection/MovieSection'
import { useQuery } from 'react-query'
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TvShowHome from '../../components/TvShowHome/TvShowHome'
import LoadingNetflix from '../../assets/loading-netflix.jpeg'
import { useEffect } from 'react'

function DetailsMovie() {
  let genres = []

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
  }

  return (
    <Box>
      <Header />
      <Box mt={16} className="fond-noir">
        <Box
          backgroundPosition={'center'}
          backgroundSize={'cover'}
          h={'80vh'}
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
              pb={150}
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
        <Text>MOVIE</Text>
        <Text>{data.title}</Text>
        <Text>{data.overview}</Text>
        <Text>{data.release_date}</Text>
        <Text>{data.vote_average}</Text>
        <Text>{data.runtime}</Text>
        <Text>{genres.join(', ')}</Text>
      </Box>
      <Footer />
    </Box>
  )
}

export default DetailsMovie
