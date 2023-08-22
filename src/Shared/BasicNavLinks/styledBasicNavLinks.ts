import styled from "styled-components";


export const StyledBasicNavLinks = styled.div`
  position: absolute;
  width: fit-content;
  z-index: 0;
  height: 100%;
  display: flex; 
  flex-direction: column; 
  justify-content: space-between;
  right: 25%;

  @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
    right: 2.5%;
  }
  @media (max-width: 576px) and (orientation: portrait) {
    right: 2.5%;
  }

  .svg-top-container {
    width: fit-content;
    display: flex;
    gap: 10px;
    position: relative;

    .svg-top-scroll-container {
   
      svg {
        width: 25px;
        height: 25px;
        fill: var(--main-blue);
        cursor: var(--common-cursor);

        &:hover {
          fill: var(--light-blue);
        }
      }
    }

    .svg-top-home-container {
   
      svg {
        width: 25px;
        height: 25px;
        fill: var(--main-blue);
        cursor: var(--common-cursor);

        &:hover {
          fill: var(--light-blue);
        }
      }
    }
  }

  .svg-bottom-container {
    width: fit-content;
    display: flex;
    gap: 10px;
  

    .svg-bottom-scroll-container {
      svg {
        width: 25px;
        height: 25px;
        fill: var(--main-blue);
        cursor: var(--common-cursor);

        &:hover {
          fill: var(--light-blue);
        }
      }
    }

    .svg-bottom-home-container {

      svg {
        width: 25px;
        height: 25px;
        fill: var(--main-blue);
        cursor: var(--common-cursor);

        &:hover {
          fill: var(--light-blue);
        }
      }
    }
  }
`