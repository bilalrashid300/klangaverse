import React, { useEffect, useRef, useMemo, useState } from "react";
import gsap, { Power0 } from "gsap";
import styled from "styled-components";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const WaveContainer = styled.div`
  position: relative;
  height: 150px;
  overflow: hidden;
  .inner_container {
    position: absolute;
    display: flex;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    transform: rotate(-180deg);
  }
  .bar {
    padding: 0;
    margin: 0 1px;
    position: relative;
    bottom: 0;
    height: 130px;
    width: 4px;
    background-color: rgba(0, 0, 0, 0.2);
    background-blend-mode: multiply;
  }
`;

const Waves = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const containerRef = useRef();
  const wavesList = useMemo(
    () => Math.round(windowDimensions.width / 6),
    [windowDimensions]
  );
  const getContent = () => {
    const array = [];
    for (let i = 1; i < wavesList + 1; i += 1) {
      array.push(i);
    }
    return array;
  };

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      const bars = containerRef?.current?.querySelectorAll(".bar") || [];
      bars.forEach((bar) => {
        gsap.to(bar, 0.4, {
          height: Math.floor(Math.random() * 121) + 30,
          ease: Power0.easeNone,
          yoyo: true,
        });
      });
    }, 200);
    // interval();
    return () => window.clearInterval(interval);
  }, []);
  return (
    <div style={{ width: "100%", height: "150px", overflow: "hidden" }}>
      <WaveContainer>
        <div className="inner_container" ref={containerRef}>
          {getContent().map((item) => (
            <div className="bar" key={item} />
          ))}
        </div>
      </WaveContainer>
    </div>
  );
};

export default Waves;
