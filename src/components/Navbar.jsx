import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logo } from '../assets/images';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <Flex as="nav" alignItems={'center'} justify="space-between" bg="white">
      <Flex>
        <Image src={logo} maxH={['80px', '90px']}></Image>
      </Flex>
      <Button
        variant="ghost"
        colorScheme="transparent"
        onClick={() => {
          navigate('/');
        }}
      >
        <Text pr={9} as="b" fontSize={['md', '3xl']} flexDirection={'row'}>
          RAYAMEL TRAVEL
        </Text>
      </Button>
      <Flex mr={5} justifyContent="flex-end">
        <IconButton
          aria-label="Menu"
          variant="ghost"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          display={{ base: 'block', md: 'none' }}
        />
        <ButtonGroup variant="ghost" display={{ base: 'none', md: 'flex' }}>
          <Button
            as={Button}
            onClick={() => {
              navigate('/');
            }}
            _hover={{ bg: '#ECB939' }}
          >
            HOME PAGE
          </Button>
          <Button
            as={Button}
            _hover={{ bg: '#ECB939' }}
            onClick={() => {
              navigate('/Ourservices');
            }}
          >
            OUR SERVICES
          </Button>
          <Button
            as={Button}
            _hover={{ bg: '#ECB939' }}
            onClick={() => {
              navigate('/Booking');
            }}
          >
            BOOKING
          </Button>
          <Button
            as={Button}
            _hover={{ bg: '#ECB939' }}
            onClick={() => {
              navigate('/Aboutus');
            }}
          >
            ABOUT US
          </Button>
          <Button
            as={Button}
            _hover={{ bg: '#ECB939' }}
            onClick={() => {
              navigate('/Privacy');
            }}
          >
            PRIVACY POLICY
          </Button>
        </ButtonGroup>
      </Flex>

      <Menu isOpen={isOpen} onClose={onClose} placement="bottom-end">
        <MenuButton
          aria-label="Menu"
          icon={<ChevronDownIcon />}
          variant="ghost"
          display={{ base: 'block', md: 'none' }}
        />
        <MenuList>
          <MenuGroup>
            <MenuItem
              onClick={() => {
                navigate('/');
              }}
            >
              HOME PAGE
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate('/Ourservices');
              }}
            >
              OUR SERVICES
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate('/Booking');
              }}
            >
              BOOKING
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate('/Aboutus');
              }}
            >
              ABOUT US
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate('/Privacy');
              }}
            >
              PRIVACY POLICY
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Flex>
  );
}
