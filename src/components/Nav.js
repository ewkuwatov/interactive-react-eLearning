import React from "react";
import styled from "styled-components";

const Nav = () => {
    return <StyledNav>
        <h1>
            <a id="logo" href="#!">e-Learning</a>
        </h1>
        <ul>
            <li><a href="#!">About us</a></li>
            <li><a href="#!">Courses</a></li>
            <li><a href="#!">Contact us</a></li>
        </ul>
    </StyledNav>;
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #383e47;
  a {
    text-decoration: none;
    color: #fff;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-family: 'Silkscreen', serif;
    font-weight: lighter;
    font-size: 1.5rem;
  }
  li {
    padding-left: 10rem;
    position: relative;
    
  }
` 
 
export default Nav;