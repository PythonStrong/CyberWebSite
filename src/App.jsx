import { Box } from "@chakra-ui/react"
import Header from "./components/Header"
import MainTop from "./components/MainTop"
import Main from "./components/Main"
import MainBottom from "./components/MainBottom"
import Footer from "./components/Footer"

function App() {

  return (
<Box>
<Box px={{xl:'88px', md:'40px', base:'10px'}}>
    <Header />
    <MainTop />
    <Main />
    <MainBottom />
  </Box>
    <Footer />
</Box>
  )
}

export default App
