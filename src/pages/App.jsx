import ApiMovie from '../ApiMovie'
import MovieSection from '../components/MovieSection/MovieSection'
import { useQuery } from 'react-query'
import { Box } from '@chakra-ui/react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import MovieHome from '../components/MovieHome/MovieHome'

function App() {
  const [filmHome, setFilmHome] = useState(null)

  const { status, error, data } = useQuery(['allMovies'], () =>
    ApiMovie.getHomeMovies()
  )

  if (status === 'success' && filmHome===null) {
    var rand = ~~(Math.random()*data[0].items.results.length);
    var rValue = data[0].items.results[rand];
    setFilmHome(rValue)
  }

  if (status === 'loading') return <p>loading</p>

  return (
    <Box>
      <Header />
      <Box className="page fond-noir">
        <MovieHome filmHome={filmHome} />
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
