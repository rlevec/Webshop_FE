import styled from "styled-components";

export const StyledTransactionLoader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .spinner-container {
    width: fit-content;
    height: fit-content;
    position: relative;

    .spinner-text-content {
      position: absolute;
      font-size: 24px;
      text-align: center;
      top: 42.5%;
      left: 24.5%;
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
      width: 150px;
      height: 150px;
      border: 10px solid #AFDBF5;
      border-top: 10px solid #002878;
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