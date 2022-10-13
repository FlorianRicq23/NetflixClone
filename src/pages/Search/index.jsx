import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Box, Grid, Heading, Input } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import MovieItem from '../../components/MovieItem/MovieItem'
import ApiMovie from '../../ApiMovie'
import { useQuery } from 'react-query'
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


  const filterPosts = (posts, query) => {
    if (!query) {
      return posts
    }

    return posts.filter((post) => {
      const postName = post.title.toLowerCase()
      return postName.includes(query)
    })
  }
  //const filteredPosts = filterPosts(data.results, searchQuery)

  return (
    <Box>
      <Header />
      <Box className="fond-noir" mt={63} minH="100vh">
        <Box bgGradient="linear(to-t, gray.600, gray.900)" p={6}>
          {/* <form action="/" method="get">
            <label htmlFor="header-search">
              <span className="visually-hidden">Search blog posts</span>
            </label>
            <input
              value={searchQuery}
              onInput={(e) => setSearchQuery(e.target.value)}
              type="text"
              id="header-search"
              placeholder="Search blog posts"
              name="s"
            />
            <button type="submit">Search</button>
          </form>
          <ul>
            {filteredPosts.map((movie, index) => (
              <li key={index}>{movie.title}</li>
            ))}
          </ul> */}

          <Input
            value={searchQuery}
            onInput={(e) => setSearchQuery(e.target.value)}
            variant="unstyled"
            placeholder="Enter a name (design disneyplus)"
            fontSize={40}
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
