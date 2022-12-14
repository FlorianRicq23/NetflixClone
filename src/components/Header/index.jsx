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
  Input,
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
import { useState } from 'react'

const NavLinkComponent = ({ title, link }) => (
  <NavLink
    className={'navbar-header'}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      color: '#b7b7b7',
    }}
    to={'/' + link}
    style={({ isActive }) => (isActive ? { fontWeight: 'bold' } : null)}
  >
    {title}
  </NavLink>
)

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box
        bg={{ base: '#141414', md: '#141414b8' }}
        color={'#F3F3F3'}
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
            icon={
              isOpen ? <CloseIcon h={6} w={6} /> : <HamburgerIcon h={6} w={6} />
            }
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            _hover={{
              background: 'none',
            }}
            _focus={{ bg: 'none' }}
            bg="none"
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Image
              pl={{ base: 0, sm: 35 }}
              h={{ base: 25, sm: 35 }}
              pr={{ base: 0, sm: 15 }}
              src={LogoUrl}
              alt="Logo"
            />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <NavLinkComponent title={'Home'} link={''} />
              <NavLinkComponent title={'TV Shows'} link={'tv-shows'} />
              <NavLinkComponent title={'Movies'} link={'movies'} />
              <NavLinkComponent title={'My List'} link={'my-list'} />
              <NavLinkComponent title={'Suggestions'} link={'suggestions'} />
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <NavLink to={'/search'}>
              <IconButton
                size={'md'}
                _hover={{
                  background: 'none',
                }}
                _focus={{ bg: 'none' }}
                bg="none"
                icon={<SearchIcon h={6} w={6} color="white" />}
                mr={{ base: 3, sm: 0 }}
                aria-label={'Search bar'}
              />
            </NavLink>

            <IconButton
              size={'md'}
              _hover={{
                background: 'none',
              }}
              _focus={{ bg: 'none' }}
              mr={3}
              display={{ base: 'none', sm: 'block' }}
              bg="none"
              icon={<BellIcon h={8} w={8} color="white" />}
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
                <TriangleDownIcon
                  display={{ base: 'none', sm: 'inline' }}
                  m={2}
                  color="white"
                />
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
              <NavLinkComponent title={'Home'} link={''}>
                Home
              </NavLinkComponent>
              <NavLinkComponent title={'TV Shows'} link={'tv-shows'}>
                TV Shows
              </NavLinkComponent>
              <NavLinkComponent title={'Movies'} link={'movies'}>
                Movies
              </NavLinkComponent>
              <NavLinkComponent title={'My List'} link={'my-list'}>
                My List
              </NavLinkComponent>
              <NavLinkComponent title={'Suggestions'} link={'suggestions'}>
                Suggestions
              </NavLinkComponent>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}
