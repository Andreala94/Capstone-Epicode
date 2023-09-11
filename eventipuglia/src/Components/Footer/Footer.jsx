import React from 'react'
import '../Footer/Footer.css'

export const Footer = () => {
  return (
    <footer >
         <div className='bgcolor'>
        <div className="content mt-5 ">
         
            <div className="upper">
              <div className="topic text-center">About us</div>
              <p>CodingLab is a channel where you can learn HTML,
                CSS, and also JavaScript along with creative CSS Animations and Effects.</p>
            </div>
            <div className="lower">
              <div className="topic">Contatti</div>
              <div className="phone">
                <a href="#"><i className="fas fa-phone-volume" />+007 9089 6767</a>
              </div>
              <div className="email">
                <a href="#"><i className="fas fa-envelope" />abc@gmail.com</a>
              </div>
            </div>
             
        </div>
        <div className="bottom">
          <p>Copyright © 2020 <a href="#">CodingLab</a> All rights reserved</p>
        </div>
      </div>
      </footer>
  )
}
