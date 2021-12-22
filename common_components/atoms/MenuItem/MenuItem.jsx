import React, { useState, useEffect, useRef } from "react";
import { Wrapper, ImageOuterWrapper, ImageWrapper } from "./MenuItem.style";
import { anims } from "./MenuItem.anims";
import { TextAnimation } from "common_components/atoms";

const MenuItem = ({
  projectData,
  x,
  y,
  imageWidth,
  imageHeight,
  status,
  updatePage,
}) => {
  let menuItemRef = useRef();
  const [hoverState, setHoverState] = useState(false);
  const [listPosition, setListPosition] = useState({
    top: 0,
    left: 0,
  });
  const [animationDirection, setAnimationDirection] = useState("in");

  const projectTitle = projectData.node.projectTitle;
  const imgSrc = projectData.node.projectImages.localFile.childImageSharp.fluid;

  useEffect(() => {
    const { top, left } = menuItemRef.current.getBoundingClientRect();
    setListPosition({
      top: top,
      left: left,
    });

    animationDirection === "in"
      ? setAnimationDirection("out")
      : setAnimationDirection("in");
  }, [hoverState]);

  // useEffect(() => {
  // }, [status])

  const { title } = anims;

  return (
    <>
      <Wrapper
        ref={menuItemRef}
        onHoverStart={() => setHoverState(true)}
        onHoverEnd={() => setHoverState(false)}
        hoverState={hoverState}
        onClick={() => updatePage(projectTitle)}
      >
        <TextAnimation status={status} text={projectTitle} byLetter={false} />
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
        <ImageWrapper imageWidth={imageWidth} imageHeight={imageHeight}>
          <BackgroundImage id={`img`} alt={"title"} fluid={imgSrc} />
        </ImageWrapper>
      </ImageOuterWrapper>
    </>
  );
};

export default MenuItem;
