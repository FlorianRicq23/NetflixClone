import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles.css'
import TvShows from './pages/TvShows'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MyList from './pages/MyList'
import Suggestions from './pages/Suggestions'
// 1. Import the utilities
import { extendTheme } from '@chakra-ui/react'
import DetailsMovie from './pages/DetailsMovie'
import DetailsTvShow from './pages/DetailsTvShow'
import { MyListProvider } from './utils/context'

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  sm: '480px',
  md: '768px',
  lg: '992px',
  xl: '1280px',
  '2xl': '1536px',
}

// 3. Extend the theme
const theme = extendTheme({ breakpoints })

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Router>
        <ChakraProvider theme={theme}>
          <MyListProvider>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/tv-shows" element={<TvShows />} />
              <Route exact path="/movies" element={<Movies />} />
              <Route exact path="/suggestions" element={<Suggestions />} />
              <Route exact path="/my-list" element={<MyList />} />
              <Route
                path="/details-movie/:id"
                element={<DetailsMovie />}
                render={(props) => <DetailsMovie {...props} />}
              />
              <Route
                path="/details-tvshow/:id"
                element={<DetailsTvShow />}
                render={(props) => <DetailsTvShow {...props} />}
              />
              <Route exact path="*" element={<Home />} />
            </Routes>
          </MyListProvider>
        </ChakraProvider>
      </Router>
    </React.StrictMode>
  </QueryClientProvider>
)
