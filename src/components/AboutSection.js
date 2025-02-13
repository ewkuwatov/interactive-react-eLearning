import React from "react";
import homeIntro from '../img/home_intro.jpg'

// import styled from 'styled-components'
import {About, Description, Hide, Image} from '../styles'

const AboutSection = () => {
    return (
      <About>
        <Description>
          <div className="title">
            <Hide>
              <h2>Be educated so that</h2>
            </Hide>
            <Hide>
              <h2>
                you <span>can change</span>
              </h2>
            </Hide>
            <Hide>
              <h2>the world.</h2>
            </Hide>
          </div>
          <p>
            An educated mind can teach many. An educated mind is better than
            empty one.
          </p>
          <button>About Us</button>
        </Description>
        <Image>
          <img src={homeIntro} alt="childs reading a book" />
        </Image>
      </About>
    )
}

export default AboutSection;