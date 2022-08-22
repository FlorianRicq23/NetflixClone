import ApiMovie from '../../ApiMovie'
import MovieSection from '../../components/MovieSection/MovieSection'
import { useQuery } from 'react-query'
import { Box, Image } from '@chakra-ui/react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MovieHome from '../../components/MovieHome/MovieHome'
import LoadingNetflix from '../../assets/loading-netflix.jpeg'
import { useEffect } from 'react'

function Home() {
  const { status, error, data } = useQuery(['allMoviesHome'], () =>
    ApiMovie.getHomeMovies()
  )
  /* const { status : statusDetails, error: errorDetails, data: dataDetails } = useQuery(['movieDetails'], () =>
    ApiMovie.getHomeMovieDetails(data[0]?.items.results[~~(Math.random()*data[0].items.results.length)].id, "movie"),{enabled:status === 'success'}
  ) */
  const { status : statusDetails, error: errorDetails, data: dataDetails } = useQuery(['movieHomeDetails'], () =>
    ApiMovie.getHomeMovieDetails(data[0]?.items.results[0].id, "movie"),{enabled:status === 'success'}
  )

  useEffect(() => {
    document.title = `Home - Netflix clone`
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [])

  if (status === 'loading' || statusDetails === 'loading') return (
    <Image w="100%" src={LoadingNetflix} alt="Logo" />
    )
  return (
    <Box>
      <Header />
      <Box className="fond-noir">
        <MovieHome filmHome={dataDetails} />
        <Box>
          {data.map((item, key) => (
            <MovieSection key={key} title={item.title} items={item.items} />
          ))}
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default Home
