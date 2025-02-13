import React from "react";
import styled from 'styled-components'
import {About} from '../styles'

const FaqSection = () => {
    return (
      <Faq>
        <h2>
          Any Questions <span>FAQ</span>
        </h2>
        <div className="question">
          <h4>Can I learn programming from 0 on your platform?</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A,
              dolores..
            </p>
          </div>
        </div>
        <div className="faq-line"></div>
        <div className="question">
          <h4>How much do I have to pay per month?</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A,
              dolores..
            </p>
          </div>
        </div>
        <div className="faq-line"></div>
        <div className="question">
          <h4>Can I pay for everything at once?</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A,
              dolores..
            </p>
          </div>
        </div>
        <div className="faq-line"></div>
        <div className="question">
          <h4>If I buy the course, can I take it with my brother?</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A,
              dolores..
            </p>
          </div>
        </div>
        <div className="faq-line"></div>
      </Faq>
    )
}

const Faq = styled(About)`
  display: block;
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }


  .faq-line {
    background-color: #ccc;
    height: 0.2rem;
    width: 100%;
    margin: 2rem 0rem;
  }
`
 
export default FaqSection;