import ApiMovie from "../ApiMovie"
import MovieSection from "../components/MovieSection/MovieSection"
import { useQuery } from 'react-query'
import { Box } from '@chakra-ui/react'

function App() {

  const { status, error, data } = useQuery(['allMovies'], () =>
  ApiMovie.getHomeMovies()
  )

  if (status==='loading') return (<p>loading</p>)

  return (
    <Box className="page fond-noir" mt={30}>
      <section className="lists">
        {data.map((item, key) => (
          <MovieSection key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </Box>
  );
}

export default App;
