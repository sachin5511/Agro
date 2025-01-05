import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css'; // Optional custom CSS

const ResponsiveCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://plus.unsplash.com/premium_photo-1661907005604-cec7ffb6a042?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Agriculture & Farming</h1>
          <p>Some representative placeholder content for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1658955291/photo/the-sight-of-golden-barley-or-wheat-field-waving-in-the-wind.jpg?s=612x612&w=0&k=20&c=HcpIvu67GkRC7tM-lNKHFBwLNWvu7hwwdWhWK4bzr-4="
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Slide Label</h3>
          <p>Some representative placeholder content for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2015/04/27/15/01/vegetables-742095_1280.jpg"
          alt="Third slide"
        />
        <Carousel.Caption >
          <h1 >Fresh Food and Vegetable</h1>
          <p>Some representative placeholder content for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ResponsiveCarousel;
