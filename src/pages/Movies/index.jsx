import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Box, Heading } from '@chakra-ui/react'

function Movies() {
  return (
    <Box>
      <Header />
      <Box className="fond-noir" mt={70}>
        <Box>
          <Heading>Movies</Heading>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default Movies
