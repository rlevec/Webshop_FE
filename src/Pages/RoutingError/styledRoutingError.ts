import styled from "styled-components";

export const StyledRoutingError = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  
  .routing_error-wrapper {
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    img {
      width: 50%;
      height: 75%;
    }
    
    .home_icon-container {
      position: absolute;
      top: 50px;
      right: 50px;
      cursor: pointer;
      width: fit-content;
      height: fit-content;
      
      svg {
        width: 50px;
        height: 50px;
        fill: #002878;
        
        &:hover {
          fill: #AFDBF5;
        }
      }
    }
  }
`