import { Flex } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'

const AuthLayout = ({children}: PropsWithChildren) => {
  return (
    <Flex>{children}</Flex>
  )
}

export default AuthLayout