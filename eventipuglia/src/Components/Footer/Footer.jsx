import React from 'react'
import '../Footer/Footer.css'

export const Footer = () => {
  return (
    <footer >
         <div className='bgcolor'>
        <div className="content mt-5">
         
            <div className="upper">
              <div className="topic text-center text-dark ">About us</div>
              <p className='text-dark'>CodingLab is a channel where you can learn HTML,
                CSS, and also JavaScript along with creative CSS Animations and Effects.</p>
            </div>
            <div className="lower ">
              <div className="topic text-dark">Contatti</div>
              
              <div className="email text-dark">
                <a href="#"><i className="fas fa-envelope" />andrea.lauro94@gmail.com</a>
              </div>
            </div>
             
        </div>
        <div className="bottom text-dark">
          <p>Copyright © 2023 Andrea Lauro</p>
        </div>
      </div>
      </footer>
  )
}
