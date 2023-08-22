import styled from "styled-components";

export const StyledErrorBoundary = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  
  .error_boundary-wrapper {
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
  }
`