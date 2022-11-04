import React, { useState } from "react";
import { Center, Fade, IconButton } from "@chakra-ui/react";

import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

export const Carousel: React.FC<any> = ({ children }) => {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(true);

  const time = 250;

  const onLeft = () => {
    setOpen(false);

    setTimeout(
      () =>
        setActive(
          (((active - 1) % children.length) + children.length) % children.length
        ),
      time
    );
    setTimeout(() => setOpen(true), time + 100);
  };

  const onRight = () => {
    setOpen(false);

    setTimeout(() => setActive((active + 1) % children.length), time);
    setTimeout(() => setOpen(true), time + 100);
  };

  return (
    <Center>
      <IconButton
        variant="outline"
        colorScheme="teal"
        aria-label="Left"
        icon={<ArrowLeftIcon />}
        onClick={onLeft}
        marginRight={8}
      />
      <Fade in={open}>
        <Center w="500px" h="200px">
          {children[active]}
        </Center>
      </Fade>

      <IconButton
        variant="outline"
        colorScheme="teal"
        aria-label="Right"
        icon={<ArrowRightIcon />}
        onClick={onRight}
        marginLeft={8}
      />
    </Center>
  );
};
