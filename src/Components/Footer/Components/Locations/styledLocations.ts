import styled from "styled-components";

export const StyledLocations = styled.div`
  width: 100%;
  height: fit-content;
  background-color: var(--main-blue);

  .locations_wrapper {
    width: fit-content;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0 20px 40px;

    @media (max-width: 576px) and (orientation: portrait) {
     padding: 20px;
    }


    .locations_content-container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 50px;

      @media (min-width: 992px) and (max-width: 1440px) {
        gap: 32.5px;
      }

      @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
       gap: 20px;
      }

      @media (max-width: 576px) and (orientation: portrait) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 30px;
      }
      
      .locations_content-single-container {
        width: fit-content;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        cursor: var(--common-cursor);
        text-decoration: none;

        @media (max-width: 576px) and (orientation: portrait) {
          height: fit-content;
          width: fit-content;
          justify-content: start;
        }


        .svg {
          width: 20px;
          height: 20px;
          fill: var(--common-light);
          display: flex;
          justify-content: center;
          align-items: center;

          @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
            width: 17.5px;
            height: 17.5px;
          }

          @media (max-width: 576px) and (orientation: portrait) {
            width: 17.5px;
            height: 17.5px;
          }
        }

        .active-svg {
          fill: var(--light-blue);
        }

        .locations_content-single-title {
          color: var(--common-light);
          font-size: 18px;

          @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
            font-size: 16px;
          }

          @media (max-width: 576px) and (orientation: portrait) {
            font-size: 14px;
          }
        }

        .active {
          color: var(--light-blue);
        }
      }
    }
  }
`