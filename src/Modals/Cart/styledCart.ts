import styled from "styled-components";

export const StyledCart = styled.div`
  width: 504px;
  height: 504px;
  box-shadow: var(--boxshadow-blue);
  background-color: var(--common-light);
  position: relative;
  z-index: 2;

  @media (min-width: 992px) and (max-width: 1440px) {
    width: 480px;
    height: 480px
  }

  @media (max-width: 576px) and (orientation: portrait) {
    width: 100vw;
  }

  .cart_wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    text-align: center;

    .close-icon-container {
      width: fit-content;
      height: fit-content;
      transform: translate(230px, -120px);

      @media (max-width: 576px) and (orientation: portrait) {
        transform: translate(45.5vw, -120px);
      }

      svg {
        width: 40px;
        height: 40px;
        fill: var(--main-blue);
      }
    }

    .cart_title {
      font-size: var(--font-size-title-monitor);
      color: var(--main-blue);
      letter-spacing: var(--letter-spacing-title);
      margin: var(--margin-zero);
      padding: var(--padding-zero);
      font-weight: 700;

      @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
        transform: translateY(-45px);
      }

      @media (max-width: 576px) and (orientation: portrait) {
        transform: translateY(-45px);
      }
    }

    .cart_empty {
      font-size: 28px;
      color: var(--dark-blue);

      @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
        transform: translateY(-45px);
      }

      @media (max-width: 576px) and (orientation: portrait) {
        transform: translateY(-45px);
      }
    }

    .cart_warning {
      width: 90%;
      font-size: 20px;
      color: var(--dark-blue);
      font-weight: 300;

      @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
        transform: translateY(-45px);
      }

      @media (max-width: 576px) and (orientation: portrait) {
        transform: translateY(-45px);
      }

      span {

        a {
          text-decoration: none;
          color: var(--main-blue);
          font-weight: 700;
          cursor: var(--common-cursor);

          &:hover {
            color: var(--light-blue);
          }
        }

      }
    }
  }
`