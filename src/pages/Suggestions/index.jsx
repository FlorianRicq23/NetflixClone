import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Select,
  SelectField,
  Text,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useState } from 'react'
import ApiMovie from '../../ApiMovie'
import { Link } from 'react-router-dom'

function Suggestions() {
  const [movieTypes, setMovieTypes] = useState([
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' },
  ])

  const [selectedType, setSelectedType] = useState(null)
  const [movieRandom, setMovieRandom] = useState(null)

  const choseMovie = () => {
    const loadAllMovies = async () => {
      if (selectedType !== null) {
        let movie = await ApiMovie.getRandomMovieDetails(selectedType)

        let chosen =
          movie.results[Math.floor(Math.random() * (movie.results.length - 1))]
        let chosenInfo = await ApiMovie.getHomeMovieDetails(chosen.id, 'movie')

        setMovieRandom(chosenInfo)
      }
    }

    loadAllMovies()
  }

  useEffect(() => {
    document.title = `Suggestions - Netflix clone`
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    choseMovie()
  }, [selectedType])



  return (
    <Box>
      <Header />
      <Box className="fond-noir" mt={30} p={10} minH='100vh'>
          <Heading>Suggest me movie</Heading>
          <Select
            id="typeFilter"
            w="100%"
            onChange={(e) => {
              setSelectedType(e.target.value)
            }}
          >
            <option className="option-type" value={'Random'}>
              Random
            </option>
            {movieTypes?.map((type, index) => (
              <option className="option-type" key={index} value={type.id}>
                {type.name}
              </option>
            ))}
          </Select>

          {movieRandom ? (
            <Flex
              flexDirection={'column'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Heading fontWeight={'bold'} fontSize={35}>
                {movieRandom.title}
              </Heading>

              <Image
                width={200}
                rounded={'lg'}
                alt={movieRandom.original_title}
                src={`https://image.tmdb.org/t/p/w300/${movieRandom.poster_path}`}
              />

              <Flex fontSize={15} mt={15} fontWeight="bold">
                <Text mr={15} color="#46d363">
                  {movieRandom.vote_average.toFixed(2)}
                </Text>
                <Text>{movieRandom.release_date}</Text>
              </Flex>

              <Text>{movieRandom.overview}</Text>
              <Flex mt={15}>
              <Link key={`details-movie-${movieRandom.id}`} to={`/details-movie/${movieRandom.id}`}>

                <Button
                  fontSize={{ base: 16, md: 16, lg: 20 }}
                  fontWeight="bold"
                  borderRadius={5}
                  mr={11}
                  bg="#fff"
                  color="#000"
                  _hover={{
                    opacity: '0.7',
                  }}
                >
                  Détails
                </Button>
                </Link>
                <Button
                  _hover={{
                    opacity: '0.7',
                  }}
                  fontSize={{ base: 16, md: 16, lg: 20 }}
                  fontWeight="bold"
                  borderRadius={5}
                  bg="#333"
                  color="#fff"
                  onClick={choseMovie}
                >
                  Next
                </Button>
              </Flex>
            </Flex>
          ) : (
            <Box>Choisir un type </Box>
          )}
      </Box>
      <Footer />
    </Box>
  )
}

export default Suggestions
