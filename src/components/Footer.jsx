import { Box, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { logo } from '../assets'
import { FaFacebookSquare, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaSquareTwitter } from 'react-icons/fa6'

export default function Footer() {
    return (
        <Box className='Footer' p='50px' height={{ xl: '30vh', md: '100%', base: '100%' }} flexDir={{ xl: 'row', md: 'column', base: 'column' }} textAlign={{ md: 'start', base: 'center' }} gap='30px' display='flex' alignItems='center' justifyContent={{ xl: 'space-around', md: 'center', base: 'center' }} px={{ xl: '88px', md: '40px', base: '10px' }} mt='180px'>
            {/* 1 */}
            <Box display='flex' flexDir='column' gap='7px' alignItems='start'>
                <Image src={logo} />
                <Text width={{ xl: '400px', md: '100%', base: '100px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi sit amet neque tortor. </Text>
                <Box display='flex' alignItems='center' gap='10px'>
                    <FaInstagram size={'40'} />
                    <FaFacebookSquare size={'40'} />
                    <FaSquareTwitter size={'40'} />
                    <FaYoutube size={'40'} />
                </Box>
            </Box>

            {/* 2 */}
            <Box display='flex' flexDir='column' gap='7px'>
                <Text fontSize='20px' fontWeight='600'>Quick Links</Text>
                <Text>Our Service</Text>
                <Text>About Us</Text>
                <Text>Pricing</Text>
                <Text>Testimonial</Text>
            </Box>
            {/* 3 */}
            <Box display='flex' flexDir='column' gap='7px'>
                <Text fontSize='20px' fontWeight='600'>Contact Us</Text>
                <Text>hello@website.com</Text>
                <Text>838 Cantt Sialkot, ENG</Text>
                <Text>+02 5421234560</Text>
            </Box>

            {/* 4 */}
            <Box display='flex' flexDir='column' gap='7px'>
                <Text fontSize='20px' fontWeight='600'>Newsletter</Text>
                <Input placeholder='Enter your email' width={{ md: '350px', base: '90%' }} height='60px' />
            </Box>
        </Box>
    )
}
