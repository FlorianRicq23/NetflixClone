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
import RecentlyAdded from './pages/RecentlyAdded'
// 1. Import the utilities
import { extendTheme } from '@chakra-ui/react'

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
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/tv-shows" element={<TvShows />} />
            <Route exact path="/movies" element={<Movies />} />
            <Route exact path="/recently-added" element={<RecentlyAdded />} />
            <Route exact path="/my-list" element={<MyList />} />
            <Route exact path="*" element={<Home />} />
          </Routes>
        </ChakraProvider>
      </Router>
    </React.StrictMode>
  </QueryClientProvider>
)
