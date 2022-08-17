import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Box, Heading } from '@chakra-ui/react'

function MyList() {
  return (
    <Box>
      <Header />
      <Box className="fond-noir" mt={70}>
        <Box>
          <Heading>My list</Heading>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default MyList
