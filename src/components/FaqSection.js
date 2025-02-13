import React from "react";
import styled from 'styled-components'

const FaqSection = () => {
    return (
      <div className="faq">
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
      </div>
    )
}
 
export default FaqSection;