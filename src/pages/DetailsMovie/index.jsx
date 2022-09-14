import ApiMovie from '../../ApiMovie'
import { useParams } from 'react-router-dom'
import MovieSection from '../../components/MovieSection/MovieSection'
import { useQuery } from 'react-query'
import { Box, Heading, Image, Text } from '@chakra-ui/react'
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
      <Box mt={100} className="fond-noir">
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
