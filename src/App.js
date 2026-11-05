import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./App.css";

import slide1 from "./img/slide1.jpg";
import slide2 from "./img/slide2.jpg";
import slide3 from "./img/slide3.jpg";
import slide4 from "./img/slide4.jpg";
import slide5 from "./img/slide5.jpg";
import slide6 from "./img/slide6.jpg";
import slide7 from "./img/slide7.jpg";
import slide8 from "./img/slide8.jpg";
import slide9 from "./img/slide9.jpg";
import slide10 from "./img/slide10.jpg";
import slide11 from "./img/slide11.jpg";
import slide12 from "./img/slide12.jpg";
import slide13 from "./img/slide13.jpg";
import slide14 from "./img/slide14.jpg";
import slide15 from "./img/slide15.jpg";

const slides = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
  slide11,
  slide12,
  slide13,
  slide14,
  slide15,
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
  slide11,
  slide12,
  slide13,
  slide14,
  slide15,
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
  slide11,
  slide12,
  slide13,
  slide14,
  slide15,
];

const withSlider = (BaseComponent, getData) => {
  return (props) => {
    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false);

    useEffect(() => {
      setSlide(getData());
    }, []);

    function changeSlide(i) {
      setSlide((slide) => slide + i);
    }

    return (
      <BaseComponent
        {...props}
        slide={slide}
        autoplay={autoplay}
        setSlide={setSlide}
        setAutoplay={setAutoplay}
        changeSlide={changeSlide}
      />
    );
  };
};

const getDataFromFirstFetch = () => {
  return 10;
};
const getDataFromSecondFetch = () => {
  return 20;
};

const SliderFirst = (props) => {
  return (
    <Container>
      <div className="slider w-50 m-auto">
        <img className="d-block w-100" src={slides[props.slide]} alt="slide" />
        <div className="text-center mt-5">Active slide {props.slide}</div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => props.changeSlide(-1)}
          >
            -1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => props.changeSlide(1)}
          >
            +1
          </button>
        </div>
      </div>
    </Container>
  );
};

const SliderSecond = (props) => {
  return (
    <Container>
      <div className="slider w-50 m-auto">
        <img className="d-block w-100" src={slides[props.slide]} alt="slide" />
        <div className="text-center mt-5">
          Active slide {props.slide} <br />
          {props.autoplay ? "auto" : null}{" "}
        </div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => props.changeSlide(-1)}
          >
            -1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => props.changeSlide(1)}
          >
            +1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => props.setAutoplay((autoplay) => !props.autoplay)}
          >
            toggle autoplay
          </button>
        </div>
      </div>
    </Container>
  );
};

const SliderWithFirstFetch = withSlider(SliderFirst, getDataFromFirstFetch);
const SliderWithSecondFetch = withSlider(SliderSecond, getDataFromSecondFetch);

function App() {
  return (
    <>
      <SliderWithFirstFetch />
      <SliderWithSecondFetch />
    </>
  );
}

export default App;
