import styled from "styled-components";

export const StyledProductsInfo = styled.div`
  width: 100%;
  height: fit-content;
  border-bottom: var(--home-border);
  display: flex;
  justify-content: center;
  align-items: center;

  .products_info-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 0 100px 0;


    .products_info-container {
      width: 90%;
      height: 500px;
      display: flex;
      justify-content: center;
      align-items: center;


      @media (min-width: 992px) and (max-width: 1440px) {
        height: 425px;
      }

      @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
        height: 675px;
      }


      background-color: var(--main-blue);

      .products_info_container_arrow {
        cursor: pointer;

        @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
          padding: 10px;
        }
        
        svg {
          width: 50px;
          height: 50px;
          fill: var(--light-blue);

          @media (max-width: 576px) and (orientation: portrait) {
            width: 25px;
            height: 25px;
          }
          

          &:hover {
            opacity: var(--common-opacity);
          }
        }

      }

      .products_info-container-content {
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;

        .products_info-content {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          width: 100%;
          
          @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
            flex-direction: column;
            gap: 0;
          }

          @media (max-width: 576px) and (orientation: portrait) {
            flex-direction: column;
            gap: 0;
          }

          .products_info-content-img-container {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;

            @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
              width: 100%;
              transform: translateY(-50px);
            }

            @media (max-width: 576px) and (orientation: portrait) {
              width: 100%;
              transform: translateY(-50px);
            }
            

            img {
              width: 675px;
              height: 575px;

              @media (min-width: 992px) and (max-width: 1440px) {
                width: 575px;
                height: 475px;
              }

              @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
                width: 475px;
                height: 375px;
              }

              @media (max-width: 576px) and (orientation: portrait) {
                width: 275px;
                height: 175px;
              }


            }
          }

          .products_info-content-container {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 50px;

            @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
              width: 100%;
              text-align: center;
              gap: 25px;
              transform: translateY(-25px);
            }

            @media (max-width: 576px) and (orientation: portrait) {
              width: 100%;
              transform: translateY(-25px);
              gap: 20px;
            }
            

            .products_info-content-button-container {
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              height: fit-content;

              @media (max-width: 576px) and (orientation: portrait) {
                padding-top: 30px;
              }

              .products_info-content-button {
                border-radius: 5px;
                padding: 15px 100px;
                letter-spacing: 0.5px;
                font-size: 16px;
                cursor: pointer;
                background-color: var(--light-blue);
                color: var(--main-blue);
                border: none;

                @media (max-width: 576px) and (orientation: portrait) {
                  padding: 10px 50px;
                  font-size: 14px;
                }

                &:hover {
                  opacity: 0.8;
                }

              }

            }


            .products_info-content-title-container {
              display: flex;
              width: 100%;
              justify-content: start;
              align-items: center;
              height: 50px;
              @media (min-width: 992px) and (max-width: 1440px) {
                width: 90%;
              }

              @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
              }

              @media (max-width: 576px) and (orientation: portrait) {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 90%;
                text-align: center;
              }

              .products_info-content-title {
                color: var(--light-blue);
                font-size: 32px;
                font-weight: 600;

                @media (min-width: 992px) and (max-width: 1440px) {
                  font-size: 28px;
                }

                @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
                  font-size: 24px;
                }

                @media (max-width: 576px) and (orientation: portrait) {
                 font-size: 16px;
                }
              }
            }

            .products_info-content-paragraph-container {
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: start;
              flex-direction: column;
              color: var(--common-light);
              gap: 20px;
              height: 100px;
              text-align: left;
              font-size: 24px;

              @media (min-width: 992px) and (max-width: 1440px) {
                font-size: 20px;
                width: 90%;
              }
              

              @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
                font-size: 20px;
              }

              @media (max-width: 576px) and (orientation: portrait) {
                font-size: 14px;
                width: 90%;
                text-align: justify;
              }

              .products_info-content-paragraph-one {
                margin: 0;
                padding: 0;
                max-width: none;
              }

              .products_info-content-paragraph-two {
                max-width: none;
                margin: 0;
                padding: 0;

              }
            }
          }

        }

      }
    }

  }
`