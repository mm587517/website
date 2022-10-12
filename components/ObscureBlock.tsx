import React, { useState } from "react";
import {
  Box,
  Button,
  Collapse,
  Fade,
  Heading,
  useColorModeValue,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

export const ObscureBlock: React.FC<{
  children: React.ReactElement<{
    className: string;
    children: string;
  }>;
}> = (props) => {
  const { isOpen, onToggle } = useDisclosure();

  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <>
      <Button
        colorScheme="teal"
        variant="ghost"
        onClick={handleToggle}
        w="10em"
      >
        {show ? "Hide" : "Show"} Answer
      </Button>

      <Collapse startingHeight={0} in={show}>
        <Text fontSize="lg">{props.children}</Text>
      </Collapse>

      {/* <Fade in={isOpen}>
        <Box w="100%" p={4}>
          {props.children}
        </Box>
      </Fade> */}
    </>
  );
};
