import { Box } from "@chakra-ui/react"
import React from "react"
import { Header } from "./Header"

export const PageLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  )
}