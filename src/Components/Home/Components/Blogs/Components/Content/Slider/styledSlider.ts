import styled from "styled-components";

type StyledSliderTypes = {
    isUrl?: boolean
}

export const StyledSlider = styled.div<StyledSliderTypes>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;


  .slider_wrapper {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 30px;

    @media (max-width: 576px) and (orientation: portrait) {
      gap: 20px;
    }


    .slider_arrow-container {
      width: fit-content;
      height: fit-content;

      svg {
        width: 75px;
        height: 75px;
        fill: var(--main-blue);
        cursor: var(--common-cursor);

        @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
          width: 50px;
          height: 50px;
        }

        @media (max-width: 576px) and (orientation: portrait) {
          width: 25px;
          height: 25px;
        }

        &:hover {
          fill: var(--light-blue);
        }

      }
    }

    .slider_content-container {
      width: 80%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;


      .slider_container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 40px;
        box-shadow: var(--boxshadow-light-secondary);
        text-decoration: none;

        @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
          gap: 5px;
        }

        @media (max-width: 576px) and (orientation: portrait) {
          width: 425px;
          gap: 0;
        }

        &:hover {
          box-shadow: var(--boxshadow-blue);
        }


        .slider_img-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;

          img {
            width: 100%;
            height: 580px;
            cursor: pointer;


            @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
              height: 300px;
            }

            @media (max-width: 576px) and (orientation: portrait) {
              width: 100%;
              height: 200px;
            }
          }
        }
      }

      .slider_title-container {
        height: fit-content;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .slider_title {
          width: 70%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 36px;
          font-weight: 600;
          color: var(--main-blue);
          cursor: var(--common-cursor);
          letter-spacing: var(--letter-spacing-title);
          text-align: center;
          height: 100px;

          @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
            font-size: 24px;
          }

          @media (max-width: 576px) and (orientation: portrait) {
            font-size: 14px;
            width: 90%;
            height: 75px;
          }

        }

      }

      .slider_description-container {
        height: 150px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: start;


        .slider_description {
          color: var(--main-blue);
          width: 80%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          font-size: 20px;
          font-weight: 300;

          @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
            font-size: 16px;
          }

          @media (max-width: 576px) and (orientation: portrait) {
            font-size: 11px;
            width: 95%;
          }
        }
      }
    }
  }

}
`