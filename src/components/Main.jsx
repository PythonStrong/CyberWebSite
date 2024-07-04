import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { cardMain, cardMain1, cardMain2, image, mainTop } from '../assets'

export default function Main() {
    return (
        <Box>
            {/* first  */}
            <Box mt='180px' display='flex' alignItems='center' justifyContent='center' gap={{ xl: '130px', md: '50px', base: '30px' }} flexDirection={{ md: 'row', base: 'column' }}>
                <Image src={image} width={{ xl: '580px', md: '70%', base: '95%' }} />
                <Box width={{ md: '700px', base: '100%' }} display='flex' flexDir='column' alignItems='start'>
                    <Text color='#3ED5DD' fontSize='20px'>FEATURE POINT</Text>
                    <Text fontSize={{ xl: '70px', md: '50px', base: '40px' }} fontWeight='600'>Key Service Features Protecting You</Text>
                    <Text fontSize='23px' textAlign='start'>Lorem ipsum dolor sit amet, consectetur  adipiscingadipiscing adipiscingad elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa. </Text>
                    <Image src={mainTop} />
                </Box>
            </Box>

            {/* second  */}
            <Box>
                <Box mt='180px' display='flex' alignItems='center' flexDirection='column' justifyContent='center' textAlign='center' gap='40px'>
                    <Box width={{ md: '1000px', base: '100%' }}>
                        <Text color='#3ED5DD' fontSize='25px'>OUR GOALS</Text>
                        <Text fontSize={{ xl: '80px', md: '50px', base: '40px' }} fontWeight='600'>Securing Your Digital World Together</Text>
                        <Text fontSize='23px' textAlign='start'>Lorem ipsum dolor sit amet, consectetur  adipiscingadipiscing adipiscingad elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa. </Text>
                    </Box>
                    <Box display='flex' alignItems='center' justifyContent={{ xl: "space-between", md: "center", base: 'center' }} flexWrap='wrap' gap={{ md: '80px', base: '30px' }} pt={{ md: '80px', base: '30px' }}>
                        <Image width='500px' src={cardMain2} />
                        <Image width='500px' src={cardMain1} />
                        <Image width='500px' src={cardMain} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
