import React from 'react'
import { About, Description, Image } from '../styles'
import homeIntro2 from '../img/home-intro2.jpg'
import styled from 'styled-components'

const BenefitsSection = () => {
  return (
    <Benefits>
      <Description>
        <h2>High-Quality learning system</h2>
        <div className="benefit">
          <h3>Online platform</h3>
          <h3>High experienced mentors</h3>
          <h3>Fast learning system</h3>
          <h3>Offline school for child</h3>
        </div>
      </Description>
      <Image>
        <img src={homeIntro2} alt="happy men reading a book" />
      </Image>
    </Benefits>
  )
}

const Benefits = styled(About)`
  flex-direction: row-reverse;
  h2 {
    color: #30bee1;
    padding-bottom: 5rem;
    margin: 0rem 0rem 0rem 5rem;
  }
  h3 {
    font-size: 1.4rem;
    padding: 1rem;
    background-color: #fff;
    font-weight: 400;
    color: #000;
    margin: 1rem 0rem 0rem 5rem;
    width: 70%;
    clip-path: polygon(0 10%, 100% 0, 100% 91%, 0% 100%);
    border-left: 10px solid #30bee1;
  }
`

export default BenefitsSection
