import styled from "styled-components";


export const StyledSearch = styled.div`
  width: 100%;
  position: relative;
  height: fit-content;
  max-height: 800px;
  overscroll-behavior: contain;
  box-shadow: var(--boxshadow-blue);
  
  .close-icon-wrapper {
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .close-icon-container {
    width: fit-content;
    height: fit-content;
    cursor: pointer;

    @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
      position: relative;
      z-index: 6;
      transform: translate(-2px, 4px);
    }

    @media (max-width: 576px) and (orientation: portrait) {
      z-index: 6;
      transform: translate(2px, 4px);
    }

    svg {
      width: 40px;
      height: 40px;
      fill: var(--main-blue);

      &:hover {
        fill: var(--light-blue);
      }
    }
  }

  .data-container {
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    font-size: 20px;
    gap: 10px;
    overflow: auto;
    max-height: 800px;

    @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
      width: 504px;
      height: 504px;
    }

    @media (max-width: 576px) and (orientation: portrait) {
      max-height: 454px;
    }

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      box-shadow: var(--boxshadow-blue);
      background-color: var(--light-blue);
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--main-blue);
    }


    .empty-search-container {
      height: 250px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 90%;
      text-align: center;
      gap: 30px;
      color: var(--main-blue);

      @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
        width: 504px;
        height: 504px;
      }

      @media (max-width: 576px) and (orientation: portrait) {
        height: 454px;
      }

      .paragraph-one {
        font-size: 18px;
        font-weight: 500;

        span {
          font-weight: 300;
          color: var(--light-blue);
        }
      }

      .paragraph-two {
        font-size: 18px;
        font-weight: 500;

        a {
          text-decoration: none;
          font-weight: 600;
          color: var(--light-blue);
          cursor: pointer;
        }
      }
    }

    .single_product-container {
      text-decoration: none;
      width: 100%;
      border-bottom: 1px solid var(--light-blue);
      padding: 10px 0;
      height: 250px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }


      .title-container {
        font-size: 20px;
        text-align: center;
        font-weight: 600;
        color: var(--main-blue);
      }

      img {
        width: 150px;
        height: 150px;
      }
    }
  }

`