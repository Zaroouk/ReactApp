import React from 'react'
import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
import { AiFillGitlab } from 'react-icons/ai'

function Footer() {
  return (
    <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
    <Stack xs={{backgroundColor: 'red'}} spacing={{ base: '4', md: '5' }}>
      <Stack justify="space-between" direction="row" align="center">

        <ButtonGroup variant="ghost">
          <IconButton as="a" href="https://gitlab.com/emanuel.menjivar11" aria-label="Gitlab" icon={<AiFillGitlab fontSize="1.25rem" />} />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="subtle">
        &copy; {new Date().getFullYear()} Disclaimer: Not all animes are listed here.
      </Text>
    </Stack>
  </Container>
  )
}

export default Footer