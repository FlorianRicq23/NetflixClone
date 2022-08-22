import {
  Box,
  chakra,
  Container,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedinIn, FaUser } from 'react-icons/fa'


const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};


function Footer() {

  return (
    <Box className='fond-noir'
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text align={{ base: 'center' }}>© 2022 Designed and built by Florian Ricq. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Personnal website'} href={'http://www.florianricq.fr/'}>
            <FaUser />
          </SocialButton>
          <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/florian-ricq/'}>
            <FaLinkedinIn />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'https://github.com/FlorianRicq23'}>
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
