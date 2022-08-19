import LogoUrl from '../../assets/logo-netflix.png'
import { Link, NavLink } from 'react-router-dom'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Image,
  Icon,
  Text,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  SearchIcon,
  BellIcon,
  QuestionOutlineIcon,
  TriangleDownIcon,
} from '@chakra-ui/icons'
import { FaUser } from 'react-icons/fa'

const NavLinkComponent = ({ title, link }) => (
  <NavLink
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      color: '#b7b7b7',
    }}
    to={'/' + link}
    style={({ isActive }) => (isActive ? {'fontWeight': 'bold'} : null)}
  >
    {title}
  </NavLink>
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
            <Image h="35px" pl={35} pr={15} src={LogoUrl} alt="Logo" />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <NavLinkComponent title={'Home'} link={''}>
                <Text fontSize={{ base: '11px', lg: '15px' }}>Home</Text>
              </NavLinkComponent>
              <NavLinkComponent title={'TV Shows'} link={'tv-shows'}>
                <Text fontSize="15px">TV Shows</Text>
              </NavLinkComponent>
              <NavLinkComponent title={'Movies'} link={'movies'}>
                <Text fontSize="15px">Movies</Text>
              </NavLinkComponent>
              <NavLinkComponent title={'Recently Added'} link={'recently-added'}>
                <Text fontSize="15px">Recently Added</Text>
              </NavLinkComponent>
              <NavLinkComponent title={'My List'} link={'my-list'}>
                <Text fontSize="15px">My List</Text>
              </NavLinkComponent>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <IconButton
              size={'md'}
              _hover={{ background: 'none' }}
              bg="none"
              icon={<SearchIcon height="50%" width="50%" color="white" />}
              aria-label={'Search bar'}
            />
            <IconButton
              size={'md'}
              _hover={{ background: 'none' }}
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
                <TriangleDownIcon m={2} color="white" />
              </MenuButton>
              <MenuList bg={'#141414'} border="#141414">
                <MenuItem
                  _hover={{
                    background: 'none',
                    textDecoration: 'underline',
                  }}
                  _focus={{ bg: 'none' }}
                >
                  <Avatar
                    height={'30px'}
                    width={'30px'}
                    mr={5}
                    borderRadius="20%"
                    src={
                      'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                    }
                  />
                  User 1
                </MenuItem>
                <MenuItem
                  _hover={{
                    background: 'none',
                    textDecoration: 'underline',
                  }}
                  _focus={{ bg: 'none' }}
                >
                  <Avatar
                    height={'30px'}
                    width={'30px'}
                    mr={5}
                    borderRadius="20%"
                    src={
                      'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                    }
                  />
                  User 2
                </MenuItem>
                <MenuDivider />
                <MenuItem
                  _hover={{
                    background: 'none',
                    textDecoration: 'underline',
                  }}
                  _focus={{ bg: 'none' }}
                >
                  <Icon as={FaUser} height={'30px'} width={'30px'} mr={5} />
                  Account
                </MenuItem>
                <MenuItem
                  _hover={{
                    background: 'none',
                    textDecoration: 'underline',
                  }}
                  _focus={{ bg: 'none' }}
                >
                  <QuestionOutlineIcon height={'30px'} width={'30px'} mr={5} />
                  Help Center
                </MenuItem>
                <MenuDivider />
                <MenuItem
                  _hover={{
                    background: 'none',
                    textDecoration: 'underline',
                  }}
                  _focus={{ bg: 'none' }}
                >
                  Disconnect
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <NavLinkComponent title={'Home'} link={''}>Home</NavLinkComponent>
              <NavLinkComponent title={'TV Shows'} link={'tv-shows'}>TV Shows</NavLinkComponent>
              <NavLinkComponent title={'Movies'} link={'movies'}>Movies</NavLinkComponent>
              <NavLinkComponent title={'Recently Added'} link={'recently-added'}>Recently Added</NavLinkComponent>
              <NavLinkComponent title={'My List'} link={'my-list'}>My List</NavLinkComponent>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}
