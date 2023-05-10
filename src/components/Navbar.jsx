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
import { logo } from '../assets/images';
export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="nav"
      alignItems={'center'}
      justify="space-between"
      padding={4}
      bg="white"
    >
      <Flex>
        <Image src={logo} maxH={'100px'}></Image>
      </Flex>
      <Text as="b" fontSize={['3xl']} flexDirection={'row'}>
        RAYAMEL TRAVEL
      </Text>
      <Flex mr={5} justifyContent="flex-end">
        <IconButton
          aria-label="Menu"
          variant="ghost"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          display={{ base: 'block', md: 'none' }}
        />
        <ButtonGroup variant="ghost" display={{ base: 'none', md: 'flex' }}>
          <Button as={Button} _hover={{ bg: '#ECB939' }}>
            HOME PAGE
          </Button>
          <Button as={Button} _hover={{ bg: '#ECB939' }}>
            OUR SERVICES
          </Button>
          <Button as={Button} _hover={{ bg: '#ECB939' }}>
            BOOKING
          </Button>
          <Button as={Button} _hover={{ bg: '#ECB939' }}>
            ABOUT US
          </Button>
          <Button as={Button} _hover={{ bg: '#ECB939' }}>
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
            <MenuItem>HOME PAGE</MenuItem>
            <MenuItem>OUR SERVICES</MenuItem>
            <MenuItem>BOOKING</MenuItem>
            <MenuItem>ABOUT US</MenuItem>
            <MenuItem>PRIVACY POLICY</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Flex>
  );
}
