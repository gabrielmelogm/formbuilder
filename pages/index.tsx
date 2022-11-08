import { Box, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { Hello } from '../src/site/components/Hello'

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Hello World</title>
      </Head>
      <Hello />
    </Box>
  )
}
