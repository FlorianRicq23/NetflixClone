import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Box, Heading } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useMyList } from '../../utils/hooks'

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
      <Box className="fond-noir" mt={70}>
        <Box>
          <Heading>My list</Heading>
          {myList.map((l, index) => (
            <Box key={index}>{l.title}</Box>
          ))}
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default MyList
