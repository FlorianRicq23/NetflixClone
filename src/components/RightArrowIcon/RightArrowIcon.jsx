import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

function RighttArrowIcon() {
  return (
    <Box className="movieRow--left">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
    </Box>
  )
}

export default RighttArrowIcon
