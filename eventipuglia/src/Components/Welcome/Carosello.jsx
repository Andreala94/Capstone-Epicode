import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../Welcome/Carosello.css'



function Carosello() {
  return (
    <div className="container dimensione">
      <div className="justify-content-center">
        <Carousel className="m-lg-5 p-lg-3  ">
          <Carousel.Item className="carosello">
            <img
              className=" img-fluid "
              src="https://siviaggia.it/wp-content/uploads/sites/2/2019/08/puglia_poster.jpg" //1
              alt="First slide"
            />
            <Carousel.Caption>


            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carosello">
            <img
              className=" img-fluid "
              src="https://turismo.puglia.it/wp-content/uploads/sites/124/castel-del-monte-hd.jpg" //2
              alt="Second slide"
            />

            <Carousel.Caption>


            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carosello">
            <img
              className=" img-fluid"
              src="https://www.boatsharingpuglia.com/wp-content/uploads/2022/05/1-punta-prosciutt.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>


            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );



}

export default Carosello