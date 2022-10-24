import React, { useState } from "react";
import { Fade, IconButton, useDisclosure } from "@chakra-ui/react";

import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

interface CarouselProps {
  children: string[];
}

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
    <div>
      <Fade in={open}>{children[active]}</Fade>
      <IconButton
        variant="outline"
        colorScheme="teal"
        aria-label="Left"
        icon={<ArrowLeftIcon />}
        onClick={onLeft}
      />
      <IconButton
        variant="outline"
        colorScheme="teal"
        aria-label="Right"
        icon={<ArrowRightIcon />}
        onClick={onRight}
      />
    </div>
  );
};
