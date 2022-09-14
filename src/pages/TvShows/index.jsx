import ApiMovie from '../../ApiMovie'
import MovieSection from '../../components/MovieSection/MovieSection'
import { useQuery } from 'react-query'
import { Box, Heading, Image } from '@chakra-ui/react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TvShowHome from '../../components/TvShowHome/TvShowHome'
import LoadingNetflix from '../../assets/loading-netflix.jpeg'
import { useEffect } from 'react'
import MoviesList from '../../components/MoviesList'

function TvShows() {
  const { status, error, data } = useQuery(['allTvShows'], () =>
    ApiMovie.getTvShows()
  )
  const {
    status: statusDetails,
    error: errorDetails,
    data: dataDetails,
  } = useQuery(
    ['tvShowDetails'],
    () => ApiMovie.getHomeMovieDetails(data[0]?.items.results[0].id, 'tv'),
    { enabled: status === 'success' }
  )


  useEffect(() => {
    document.title = `Tv Shows - Netflix clone`
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [])

  if (status === 'loading' || statusDetails === 'loading')
    return <Image h='100vh' w='100%' src={LoadingNetflix} alt="Logo" />
  return (
    <Box>
      <Header />
      <Box className="fond-noir">
        <TvShowHome filmHome={dataDetails} />
        <MoviesList data={data}/>
      </Box>
      <Footer />
    </Box>
  )
}

export default TvShows
