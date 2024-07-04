import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { hero, logo } from '../assets'

export default function Header() {
    return (
        <Box>
            {/* navbar  */}
            <Box pt='40px' display={{md:'flex', base:'none'}} alignItems='center' justifyContent='space-between'>
                <Image src={logo} />

                <Box display='flex' alignItems='center' gap='30px'>
                    <Text fontSize='24px' cursor='pointer'>Home</Text>
                    <Text fontSize='24px' cursor='pointer'>FAQ</Text>
                    <Text fontSize='24px' cursor='pointer'>Contact us</Text>
                    <Text fontSize='24px' cursor='pointer'>Our Menu</Text>
                </Box>
            </Box>

            {/* mobile navbar  */}
            <Box pt='40px' display={{md:'none', base:'flex'}} alignItems='center' justifyContent='space-between'>
            <Image src={logo} />
        
            </Box>

            {/* hero  */}
            <Box mt='220px' display='flex' alignItems='center' justifyContent='space-between' flexDirection={{ md: 'row', base: 'column' }}>
                <Box display='flex' flexDirection='column' alignItems='start' gap='45px' width={{ md: '800px', base: '100%' }}>
                    <Text fontSize={{ xl: '90px', md: '60px', base: '50px' }} fontWeight='600'>Empowering You in the Digital Age</Text>
                    <Text fontSize='23px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa. Proin ipsum nunc, lacinia ac faucibus quis, ullamcorper non metus. </Text>
                    <Button bg='#0A667B' fontSize='25px' _hover='none' color='white' width={{ md: '320px', base: '160px' }} height={{ md: '74px', base: '50px' }}>Purchase</Button>
                </Box>
                <Box className='hero'>
                    <Image src={hero} />
                </Box>
            </Box>
        </Box>
    )
}
