import React from "react";
import {
  SimpleGrid,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  HStack
} from "@chakra-ui/react";
import FieldComponent from "../components/FieldComponent";

const BASE_URL = "https://reqres.in/"
function Login({setAuth, email, password,setEmail,setPassword}) {
  return (
    <HStack>
      <SignIn setEmail={setEmail} setPassword={setPassword} email={email} password={password} setAuth={setAuth}/>
      <SignUp setEmail={setEmail} setPassword={setPassword} email={email} password={password} setAuth={setAuth}/>
    </HStack>
  );
}
function SignIn({setAuth, setEmail, setPassword, email, password}) {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const SignInHandler = (e) => {
    e.preventDefault()

    const json = JSON.stringify({
      username:email,
      email:email,
      password:password
    })

    const requestOptions = {
      method: 'POST',
      headers:{'Content-type':'application/json'},
      body: json
    }

    fetch(BASE_URL + "api/login", requestOptions)
    .then(res =>{
      if(res.ok){
        return res.json()
      }
      throw res
    })
    .then(data =>{
      console.log(data);
      setAuth(data.token)
      window.localStorage.setItem('auth', data.token)
    })
    .catch(err =>{
      console.log(err);
      alert(err)
    })
    onClose
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    SignInHandler
  }

  return (
    <div><Button
      onClick={onOpen}
    >Sign In</Button><Modal
    isOpen={isOpen}
    onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FieldComponent useHelper helperText={"eve.holt@reqres.in"} onChange={(e)=>setEmail(e.target.value)} placeholder={"Username"} label="Username" type="text" />
              <FieldComponent
              onChange={(e)=>setPassword(e.target.value)}
                label="Password"
                placeholder="Password"
                type="password"
                helperText={"cityslicka"}
                isPassword />
              <Button type="submit" onClick={SignInHandler} width="full" colorScheme="purple" mt="20px">
                Sign In
              </Button>
            </form>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal></div>

  );
}
function SignUp({setAuth, setEmail, setPassword, email, password}) {
  const { isOpen, onOpen, onClose } = useDisclosure()


  const SignUpHandler = (e) => {
    e.preventDefault()

    const json = JSON.stringify({
      username:email,
      email:email,
      password:password
    })

    const requestOptions = {
      method: 'POST',
      headers:{'Content-type':'application/json'},
      body: json
    }

    fetch(BASE_URL + "api/register", requestOptions)
    .then(res =>{
      if(res.ok){
        return res.json()
      }
      throw res
    })
    .then(data =>{
      console.log(data);
      setAuth(data.token)
    })
    .catch(err =>{
      console.log(err);
      alert(err)
    })
    onClose
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    SignUpHandler
  }
  return (
    <div><Button onClick={onOpen}
    >Sign Up</Button><Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <SimpleGrid columns={1}
                spacing="5px"
              >
                <FieldComponent useHelper helperText={"eve.holt@reqres.in"} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" label="Email" type="text" />
                <FieldComponent useHelper helperText={"eve.holt@reqres.in"} onChange={(e)=>setEmail(e.target.value)} placeholder="JonnyDoe23" label="Username" type="text" />
                <FieldComponent
                  label="Password"
                  placeholder="Password"
                  type="password"
                  helperText={"eve.holt@reqres.in"}
                  onChange={(e)=>setPassword(e.target.value)}
                  isPassword />
              </SimpleGrid>
              <Button  type="submit" onClick={SignUpHandler} width="full" colorScheme="purple" mt="20px">
                Sign Up
              </Button>
            </form>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal></div>

  );
}
export default Login;
