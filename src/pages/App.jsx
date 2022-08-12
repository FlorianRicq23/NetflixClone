import ApiMovie from '../ApiMovie'
import MovieSection from '../components/MovieSection/MovieSection'
import { useQuery } from 'react-query'
import { Box } from '@chakra-ui/react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import MovieHome from '../components/MovieHome/MovieHome'

function App() {
  const { status, error, data } = useQuery(['allMovies'], () =>
    ApiMovie.getHomeMovies()
  )

  const { status : statusDetails, error: errorDetails, data: dataDetails } = useQuery(['movieDetails'], () =>
    ApiMovie.getHomeMovieDetails(data[0]?.items.results[2].id, "movie"),{enabled:status === 'success'}
  )

  if (status === 'loading' || statusDetails === 'loading') return <p>loading</p>
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
