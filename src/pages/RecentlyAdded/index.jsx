import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Box, Heading } from '@chakra-ui/react'
import { useEffect } from 'react'

function RecentlyAdded() {

  useEffect(() => {
    document.title = `Recently Added - Netflix clone`
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [])

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
