import React from 'react'

import Carousel from 'react-bootstrap/Carousel'

const Carousal = () => (
    <div class='container'>
    <Carousel>
        <Carousel.Item>
            <img className='c_home'
              src="https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?cs=srgb&dl=adventure-alberta-alpine-533769.jpg&fm=jpg"
              alt="First slide"
            />
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
            <img className='c_home'
              src="https://i.ibb.co/ZYW3VTp/brown-brim.png"
              alt="Third slide"
            />
        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
            <img className='c_home'
            src="https://i.ibb.co/ZYW3VTp/brown-brim.png"
            alt="Third slide"
            />
        <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    </div>
)

export default Carousal;
