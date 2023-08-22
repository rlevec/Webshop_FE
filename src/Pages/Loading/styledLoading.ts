import styled from "styled-components";

export const StyledLoading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--common-light);
  z-index: 9;
  top: 0;
  position: fixed;
  
  .spinner-container {
    width: fit-content;
    height: fit-content;
    position: relative;
    
    .spinner-text-content {
      position: absolute;
      font-size: 48px;
      text-align: center;
      top: 42.5%;
      left: 34.5%;
      font-weight: 500;
      letter-spacing: 0.5px;
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      color: #AFDBF5;
    }

    .spinner-text-content::after {
      content: 'Loading';
      position: absolute;
      left: 0;
      top: 0;
      color: #002878;
      width: 100%;
      height: 100%;
      overflow: hidden;
      box-sizing: border-box;
      animation: animloader 3s linear infinite;
    }

    @keyframes animloader {
      0% {
        width: 0;
      }
      100% {
        width: 100%;
      }
    }

    .spinner {
      width: 500px;
      height: 500px;
      border: 25px solid #AFDBF5;
      border-top: 25px solid #002878;
      border-radius: 50%;
      animation: spin 3s linear infinite;
      box-shadow: var(--boxshadow-blue);
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`