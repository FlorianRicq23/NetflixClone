import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import { QueryClient, QueryClientProvider } from 'react-query'
import Header from './components/Header'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles.css'
import Footer from './components/Footer'


const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Router>
        <ChakraProvider>
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="*" element={<App />} />
          </Routes>
        </ChakraProvider>
      </Router>
    </React.StrictMode>
  </QueryClientProvider>
)
