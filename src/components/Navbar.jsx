import React from "react";
import {
  Box,
  Heading,
  Flex,
  Spacer,
  ButtonGroup,
} from "@chakra-ui/react";
import MenuComponent from "./MenuComponent";
import Login from "../pages/Login";

function Navbar({ password, setPassword, email, setEmail, setAuth, token }) {
  return (
    <Flex w="95vw" alignItems="center" gap="2">
      <Box p="2">
        <Heading size="md">Anime Content</Heading>
      </Box>
      <Spacer />
      {token ? (
        <MenuComponent setAuth={setAuth} />
      ) : (
        <ButtonGroup gap="2">
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            setAuth={setAuth}
          />
        </ButtonGroup>
      )}
    </Flex>
  );
}

export default Navbar;
