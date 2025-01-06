import { 
    Box, 
    Flex, 
    HStack, 
    IconButton, 
    useDisclosure, 
    useColorMode, 
    useColorModeValue, 
    Stack, 
    Button, 
    Link 
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as ReachLink } from 'react-router-dom'
import logo from './../../Assets/logo.png';
import FeedbackForm from '../FeedBackForm';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
} from '@chakra-ui/react';



export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box id='navbar' bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <ReachLink to='/'>
                        <Box><img style={{ height: '44px' }} className='logo' src={logo} alt="logo" /></Box>
                    </ReachLink>

                    <HStack spacing={8} alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            <ReachLink px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'gray.200' }} to="/" >Home </ReachLink>
                            <ReachLink px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'gray.200' }} to="/about"> About</ReachLink>
                            <Link
                                px={2}
                                py={1}
                                rounded={'md'}
                                as="button"
                                onClick={onOpen}
                                _hover={{ textDecoration: 'none', bg: 'gray.200' }}>
                                Feedback
                            </Link>
                        </HStack>
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </HStack>

                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />

                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            <ReachLink px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'gray.200' }} to={'/'} >Home </ReachLink>
                            <ReachLink px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'gray.200' }} to={'/about'}> About</ReachLink>
                            <Link
                                px={2}
                                py={1}
                                rounded={'md'}
                                as="button"
                                onClick={onOpen}
                                _hover={{ textDecoration: 'none', bg: 'gray.200' }}>
                                Feedback
                            </Link>
                        </Stack>
                    </Box>
                ) : null}
            </Box>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Feedback</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FeedbackForm />
                    </ModalBody>
                    <ModalFooter>
                        <Link variant="ghost" as="button" onClick={onClose}>Close</Link>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    );
}