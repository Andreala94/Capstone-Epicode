import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../Welcome/Carosello.css'



function Carosello() {
    return (
<div className="container ">
  <div className="justify-content-center">
        <Carousel className="m-lg-5 p-lg-3  ">
      <Carousel.Item className="carosello">
        <img
          className=" w-75 h-50 "
          src="https://img.freepik.com/premium-vector/online-library-digital-bookstore-bookshop-concept-bookshelves-background-laptop-cup-tea-books-screen-reading-technology-literature-read-education-learning-vector-illustration_345238-1260.jpg" //1
          alt="First slide"
        />
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carosello">
        <img
          className=" w-75 h-75 "
          src="https://www.repstatic.it/content/nazionale/img/2023/06/30/130736003-8e9769ab-2095-4363-b36f-72762842fd62.jpg" //2
          alt="Second slide"
        />

        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carosello">
        <img
          className=" w-75 h-75"
          src="https://www.gedistatic.it/content/gedi/img/huffingtonpost/2020/05/06/092141828-6d8b7944-eed5-4bf5-a7c5-2e3c8b17879d.jpeg"
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