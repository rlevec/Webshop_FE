import styled from "styled-components";

export const StyledLocations = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--lightest-blue);
  position: relative;

  .locations_wrapper {
    width: 50%;
    height: fit-content;
    background: var(--common-light);
    padding: 40px 20px;

    @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
      width: 100%;
    }

    @media (max-width: 576px) and (orientation: portrait) {
      width: 100%;
    }


    .locations_header-container {
      background-color: var(--main-blue);
      width: 100%;
      height: 75px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (min-width: 992px) and (max-width: 1440px) {
        max-width: 100%;
        overflow-x: scroll;
        justify-content: flex-start;
        gap: 25px;
        
        ::-webkit-scrollbar {
          width: 4px;
          height: 6px;
        }

        ::-webkit-scrollbar-thumb {
          -webkit-appearance: none;
          border-radius: 1px;
          background-color: var(--light-blue);
        }
      }

      @media (max-width: 576px) and (orientation: portrait) {
        max-width: 100%;
        overflow-x: scroll;
        justify-content: flex-start;
        gap: 25px;

        ::-webkit-scrollbar {
          width: 4px;
          height: 6px;
        }

        ::-webkit-scrollbar-thumb {
          -webkit-appearance: none;
          border-radius: 1px;
          background-color: var(--light-blue);
        }
      }



      .locations_header-single-content {
        width: fit-content;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        padding: 0 7.5px;
        z-index: 2;

        .pin {
          svg {
            width: 25px;
            height: 25px;
            fill: var(--common-light);

            @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
              width: 20px;
              height: 20px;
            }
          }
        }

        .active-pin {
          svg {
            width: 25px;
            height: 25px;
            fill: var(--light-blue);

            @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
              width: 20px;
              height: 20px;
            }
          }
        }

        svg {
          width: 25px;
          height: 25px;
          fill: var(--common-light);
        }


        .locations_header-title {
          font-size: 18px;
          font-weight: 600;
          color: var(--common-light);

          @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
            font-size: 16px;
          }
        }

        .locations_header-title-active {
          font-size: 18px;
          font-weight: 600;
          color: var(--light-blue);

          @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
            font-size: 16px;
          }
        }
      }
    }

    .locations_pharmacy-image {
      width: 100%;
    }

    .locations_title {
      padding: 20px 10px;
      font-size: 36px;
      font-weight: 600;
      color: var(--main-blue);
      letter-spacing: 1.25px;
    }

    .locations_accordion-wrapper {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: start;
      align-items: center;

      .locations_accordion-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 25px;
        padding: 0 25px;
        padding-bottom: 25px;

        .locations_accordion-single-content-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          border-bottom: 1px solid var(--dark-blue);

          &:last-child {
            border-bottom: unset;
          }

          .locations_accordion-single-content-icon-title-container {
            width: 100%;
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 10px;

            .locations_accordion-single-content-icon-container {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100%;
              padding-top: 5px;
              cursor: var(--common-cursor);

              svg {
                width: 25px;
                height: 25px;
                fill: var(--main-blue);
                cursor: pointer;
                border: 1px solid var(--main-blue);
                background-color: var(--light-blue);
                border-radius: 50%;
                padding: 5px;
              }
            }

            .locations_accordion-single-content-title-container {
              font-size: 28px;
              font-weight: 600;
              color: var(--main-blue)
            }
          }
        }

        .locations_accordion-active-content-container {
          padding-bottom: 25px;
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, auto);
          row-gap: 50px;
          

          @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
            grid-template-columns: repeat(2, auto);
          }

          @media (max-width: 576px) and (orientation: portrait) {
            display: flex;
            flex-direction: column;
          }
          

          .locations_accordion-single-content-container {
            box-shadow: var(--boxshadow-light-secondary);
            width: 275px;
            height: 335px;
            background-color: var(--lightest-blue);
            
            &:hover {
              box-shadow: var(--boxshadow-blue);
            }

            .locations_accordion-single-content-image-container {
              img {
                width: 275px;
                height: 175px;
              }
            }

            .locations_accordion-single-content-icon-title-container {
              padding: 0 10px;

              p {
                color: var(--main-blue);
              }

              svg {
                width: 25px;
                height: 25px;
                fill: var(--main-blue);
              }
            }
          }
        }
      }


    }
  }
`