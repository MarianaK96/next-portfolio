import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Wrapper,
  ImageWrapper,
  ImageOuterWrapper,
} from "./MenuItem.styles";
import { AnimateTextIn } from "animations";
import Link from "next/link";
import useMouse from "@react-hook/mouse-position";

const MenuItem = ({
  href,
  key,
  title,
  x,
  y,
  imageWidth,
  imageHeight,
  image,
}) => {
  let menuItemRef = useRef();

  const [hoverState, setHoverState] = useState(false);
  const [listPosition, setListPosition] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    const { top, left } = menuItemRef.current.getBoundingClientRect();
    setListPosition({
      top: top,
      left: left,
    });
  }, [hoverState]);

  return (
    <>
      <Wrapper
        ref={menuItemRef}
        onHoverStart={() => setHoverState(true)}
        onHoverEnd={() => setHoverState(false)}
        hoverState={hoverState}
      >
        <Link href={href}>
          <Container key={key}>
            <AnimateTextIn title={title} color={`var(--grey)`} />
          </Container>
        </Link>
      </Wrapper>

      <ImageOuterWrapper
        hoverState={hoverState}
        initial={{ opacity: 0, scaleX: 0.75 }}
        animate={{
          opacity: hoverState ? 1 : 0,
          scaleX: hoverState ? 1 : 0.75,
          width: hoverState ? imageWidth * 1.6 : imageWidth,
          x: x - listPosition.left,
          y:
            y -
            listPosition.top -
            imageHeight / 2 +
            (hoverState ? 0 : imageHeight * 0.75),
          rotate: 5,
        }}
        transition={{ ease: [0.5, 1, 0.89, 1], duration: 0.2 }}
      >
        <ImageWrapper
          imageWidth={imageWidth}
          imageHeight={imageHeight}
          image={image}
        ></ImageWrapper>
      </ImageOuterWrapper>
    </>
  );
};

export default MenuItem;
