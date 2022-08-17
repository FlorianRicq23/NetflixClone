import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Box, Heading } from '@chakra-ui/react'

function TvShows() {
  return (
    <Box>
      <Header />
      <Box className="fond-noir" mt={70}>
        <Box>
          <Heading>TV Shows</Heading>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default TvShows
