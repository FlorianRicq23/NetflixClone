import { ReactNode } from 'react'
import LogoUrl from '../../assets/logo-netflix.png'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  AccordionIcon,
  Icon,
  Text,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  SearchIcon,
  BellIcon,
  QuestionIcon,
  QuestionOutlineIcon,
  TriangleDownIcon,
} from '@chakra-ui/icons'
import { FaUser } from 'react-icons/fa'

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
)

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box
        className="couleur-header"
        px={4}
        position="fixed"
        top={0}
        w="100%"
        mb={0}
        zIndex={5}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            {/* <Box>NETFLIX</Box> */}
            <Image h="35px" pl={35} pr={15} src={LogoUrl} alt="Logo" />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <NavLink><Text fontSize={{ base: '11px', lg: '15px' }}>Home</Text></NavLink>
              <NavLink><Text fontSize='15px'>TV Shows</Text></NavLink>
              <NavLink><Text fontSize='15px'>Movies</Text></NavLink>
              <NavLink><Text fontSize='15px'>Recently Added</Text></NavLink>
              <NavLink><Text fontSize='15px'>My List</Text></NavLink>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <IconButton
              size={'md'}
              bg="none"
              icon={<SearchIcon height="50%" width="50%" color="white" />}
              aria-label={'Search bar'}
            />
            <IconButton
              size={'md'}
              mr={3}
              bg="none"
              icon={<BellIcon height="70%" width="70%" color="white" />}
              aria-label={'Search bar'}
            />
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar
                  size={'sm'}
                  borderRadius="20%"
                  src={
                    'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                  }
                />
                <TriangleDownIcon m={2} color='white' />
              </MenuButton>
              <MenuList bg={'#141414'} border="#141414">
                <MenuItem>
                  <Avatar
                    height={'30px'}
                    width={'30px'}
                    mr={5}
                    borderRadius="20%"
                    src={
                      'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                    }
                  />
                  Link 1
                </MenuItem>
                <MenuItem>
                  <Avatar
                    height={'30px'}
                    width={'30px'}
                    mr={5}
                    borderRadius="20%"
                    src={
                      'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                    }
                  />
                  Link 2
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <Icon as={FaUser} height={'30px'} width={'30px'} mr={5} />
                  Account
                </MenuItem>
                <MenuItem>
                  <QuestionOutlineIcon height={'30px'} width={'30px'} mr={5} />
                  Help Center
                </MenuItem>
                <MenuDivider />
                <MenuItem>Disconnect</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <NavLink>Home</NavLink>
              <NavLink>TV Shows</NavLink>
              <NavLink>Movies</NavLink>
              <NavLink>Recently Added</NavLink>
              <NavLink>My List</NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}
