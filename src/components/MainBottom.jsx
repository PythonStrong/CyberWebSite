import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Bottom, Bottom1, Price } from '../assets'

export default function MainBottom() {
  return (
    <Box>
      <Box display='flex' flexDir='column' alignItems='center' justifyContent='center' textAlign='center' mt='180px'>
        <Box width={{ md: '1000px', base: '100%' }}>
          <Text color='#3ED5DD' fontSize='25px'>PRICING TABLE</Text>
          <Text fontSize={{ xl: '80px', md: '50px', base: '40px' }} fontWeight='600'>Start using cyber security protect </Text>
          <Text fontSize='23px' textAlign='start'>Lorem ipsum dolor sit amet, consectetur  adipiscingadipiscing adipiscingad elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa. </Text>
          <Image src={Price} width='100%' />
        </Box>
      </Box>

      {/* second  */}
      <Box display='flex' flexDir='column' alignItems='center' justifyContent='center' textAlign='center' mt='180px'>
        <Box width={{ md: '1000px', base: '100%' }}>
          <Text color='#3ED5DD' fontSize='25px'>TESTIMONIAL</Text>
          <Text textTransform='capitalize' fontSize={{ xl: '80px', md: '50px', base: '40px' }} fontWeight='600'>see what others people are saying</Text>
          <Text fontSize='23px' textAlign='start'>Lorem ipsum dolor sit amet, consectetur  adipiscingadipiscing adipiscingad elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa. </Text>
          <Box display='flex' flexDir='column' gap='35px' mt='40px'>
            <Image width='1200px' src={Bottom} />
            <Image width='1200px' src={Bottom1} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
