import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { card, card1, card2, main } from '../assets'

export default function MainTop() {
  return (
    <Box mt='180px'>
      {/* first  */}
      <Box display='flex' alignItems='center' justifyContent='space-between' flexDirection={{ md: 'row', base: 'column-reverse' }}>
        <Image src={main} width={{ xl: '40%', md: '50%', base: '100%' }} />

        <Box display='flex' flexDirection='column' alignItems='start' gap='45px' width={{ md: '800px', base: '100%' }}>
          <Text color='#3ED5DD'>ABOUT US</Text>
          <Text fontSize={{ xl: '60px', md: '50px', base: '40px' }} fontWeight='600'>Discover Our Journey Protecting Your Digital World with Expertise and Care</Text>
          <Text fontSize='20px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa. Proin ipsum nunc, lacinia ac faucibus quis, ullamcorper non metus. Aliquam viverra volutpat feugiat. Donec fringilla aliquam mollis. Sed cursus quam nibh, quis placerat metus dapibus sed.
            Nam varius nisi in nisi maximus blandit sit amet ac tellus.</Text>
          <Button bg='#0A667B' fontSize='25px' _hover='none' color='white' width={{ md: '320px', base: '160px' }} height={{ md: '74px', base: '50px' }}>Read More</Button>
        </Box>
      </Box>

      {/* second  */}
      <Box>
        <Box mt='180px' display='flex' alignItems='center' flexDirection='column' justifyContent='center' textAlign='center' gap='20px'>
          <Box width={{md:'1300px', base:'100%'}}>
            <Text color='#3ED5DD' fontSize='25px'>OUR SERVICE</Text>
            <Text fontSize={{ xl: '80px', md: '50px', base: '40px' }} fontWeight='600'>Protecting Your Digital Assets Expertly</Text>
            <Text fontSize='23px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa. </Text>
          </Box>
         <Box display='flex' alignItems='center' justifyContent={{ xl: "space-between", md: "center", base: 'center' }} flexWrap='wrap' gap={{md:'80px', base:'30px'}} pt={{md:'80px', base:'30px'}}>
            <Image width='500px' src={card} />
            <Image width='500px' src={card1} />
            <Image width='500px' src={card2} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
