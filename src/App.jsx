import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import FetchingBoy from './components/FetchingBoy'
import { Flex } from '@chakra-ui/react'
import Footer from './components/Footer'
function App() {
  const [auth, setAuth] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    setAuth(window.localStorage.getItem('auth'));
  },[])


  return (
    <div className="App">
      <Navbar email={email} setEmail={setEmail} password={password} setPassword={setPassword} setAuth={setAuth} token={auth} />
      <Flex justify='center'>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        </Flex>
      {auth ? <FetchingBoy /> : <Home />}
      <Footer />
    </div>
  )
}

export default App
