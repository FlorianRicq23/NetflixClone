import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Box, Grid, Heading } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useMyList } from '../../utils/hooks'
import MovieItem from '../../components/MovieItem/MovieItem'

function MyList() {
  const { myList } = useMyList()
  console.log(myList)
  

  useEffect(() => {
    document.title = `My List - Netflix clone`
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }, [])


  return (
    <Box>
      <Header />
      <Box className="fond-noir" mt={30} p={10}>
          <Heading mb={{base:3, md:10}}>My list</Heading>
          <Grid justifyContent={'left'} templateColumns={{base:'repeat(auto-fill, minmax(100px, 1fr))', md:'repeat(auto-fill, minmax(150px, 1fr))'}} gridGap={5}>
          {myList.map((movie, index) => (
            <MovieItem key={index} item={movie} />
          ))}
          </Grid>
      </Box>
      <Footer />
    </Box>
  )
}

export default MyList
