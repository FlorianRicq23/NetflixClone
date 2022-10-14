import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Box, Heading, Input } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import DataSearch from '../../components/DataSearch'

function Search() {
  const { search } = window.location
  const query = new URLSearchParams(search).get('s')
  const [searchQuery, setSearchQuery] = useState(query || '')

  useEffect(() => {
    document.title = `Search - Netflix clone`
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }, [])

  return (
    <Box>
      <Header />
      <Box className="fond-noir" mt={63} minH="100vh">
        <Box bgGradient="linear(to-t, gray.600, gray.900)" p={6}>
          <Input
            value={searchQuery}
            onInput={(e) => setSearchQuery(e.target.value)}
            variant="unstyled"
            placeholder="Enter a name"
            fontSize={{base:26, md:40}}
            fontWeight="bold"
          />
        </Box>
        <Box p={10}>
          <Heading mb={10}>Results :</Heading>
          <DataSearch keyword={searchQuery} />
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default Search
