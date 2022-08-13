import ApiMovie from '../ApiMovie'
import MovieSection from '../components/MovieSection/MovieSection'
import { useQuery } from 'react-query'
import { Box, Image } from '@chakra-ui/react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import MovieHome from '../components/MovieHome/MovieHome'
import LoadingNetflix from '../assets/loading-netflix.jpeg'

function App() {
  const { status, error, data } = useQuery(['allMovies'], () =>
    ApiMovie.getHomeMovies()
  )
  const { status : statusDetails, error: errorDetails, data: dataDetails } = useQuery(['movieDetails'], () =>
    ApiMovie.getHomeMovieDetails(data[0]?.items.results[~~(Math.random()*data[0].items.results.length)].id, "movie"),{enabled:status === 'success'}
  )

  if (status === 'loading' || statusDetails === 'loading') return (
    <Image w="100%" src={LoadingNetflix} alt="Logo" />
    )
  return (
    <Box>
      <Header />
      <Box className="page fond-noir">
        <MovieHome filmHome={dataDetails} />
        <section className="lists">
          {data.map((item, key) => (
            <MovieSection key={key} title={item.title} items={item.items} />
          ))}
        </section>
      </Box>
      <Footer />
    </Box>
  )
}

export default App
