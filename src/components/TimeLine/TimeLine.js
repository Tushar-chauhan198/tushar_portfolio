import React, { useState, useRef, useEffect } from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const Timeline = () => {
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="about">
      <br />
      <br />
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Logical and organized individual with a strong foundation in
software engineering. Proficient in JavaScript, C . Seeking to raise
coding KPIs by providing error-free codes. Ability to translate
business requirements into innovative software solutions. Excellent
teamwork, interpersonal and communication skills. Looking to start a
career as an entry-level professional with a reputed IT company.

      </SectionText>
    </Section>
  );
};

export default Timeline;
