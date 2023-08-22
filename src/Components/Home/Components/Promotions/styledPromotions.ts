import styled from "styled-components";

export const StyledPromotions = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0 100px 0;
  border-bottom: var(--home-border);

  @media (max-width: 576px) and (orientation: portrait) {
    padding: 50px 0 50px 0;
  }

  .promotions_wrapper {
    height: 900px;
    width: 90%;
    background-color: var(--main-blue);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 25px;
    box-shadow: var(--boxshadow-light-secondary);


    @media (min-width: 992px) and (max-width: 1440px) {
      height: 700px;
    }

    @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
      height: 550px;
      width: 750px;
    }

    @media (max-width: 576px) and (orientation: portrait) {
      height: 275px;
    }

    .promotions_container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;

      @media (max-width: 576px) and (orientation: portrait) {
        gap: 5px;
      }


      .promotions_arrow-container {
        cursor: var(--common-cursor);
        height: fit-content;
        width: fit-content;

        svg {
          width: 75px;
          height: 75px;
          fill: var(--light-blue);

          @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
            width: 50px;
            height: 50px;
          }

          @media (max-width: 576px) and (orientation: portrait) {
            width: 25px;
            height: 25px;
          }

        }
      }


      .promotions_image-content-container {
        width: fit-content;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;

        .promotions_image-container {
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: fit-content;

            @media (min-width: 992px) and (max-width: 1440px) {
              width: 95%;
            }

            @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
              height: 400px;
              width: 600px;
            }

            @media (max-width: 576px) and (orientation: portrait) {
              height: 200px;
              width: 300px;
            }
          }
        }
      }
    }


    .promotions_slider-bar-wrapper {
      position: absolute;
      top: 1130px;

      @media (min-width: 992px) and (max-width: 1440px) {
        top: 940px;
      }

      @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
        top: 685px;
      }

      @media (max-width: 576px) and (orientation: portrait) {
        top: 40%;
        z-index: 0;
      }

      .promotions_slider-bar-container {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;

        @media (max-width: 576px) and (orientation: portrait) {
          gap: 10px;
        }

        .promotions_slider-single-bar {
          height: 10px;
          width: 75px;
          background-color: white;
          cursor: var(--common-cursor);

          @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
            height: 7.5px;
            width: 50px;
          }

          @media (max-width: 576px) and (orientation: portrait) {
            height: 5px;
            width: 20px;
          }
        }

        .active-1 {
          background-color: var(--light-blue);
        }

        .active-2 {
          background-color: var(--light-blue);
        }

        .active-3 {
          background-color: var(--light-blue);
        }

        .active-4 {
          background-color: var(--light-blue);
        }

        .active-5 {
          background-color: var(--light-blue);
        }

      }
    }
  }
`