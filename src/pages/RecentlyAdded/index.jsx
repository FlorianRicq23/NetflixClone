import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Box, Heading } from '@chakra-ui/react'

function RecentlyAdded() {
  return (
    <Box>
      <Header />
      <Box className="fond-noir" mt={70}>
        <Box>
          <Heading>Recently Added</Heading>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default RecentlyAdded
