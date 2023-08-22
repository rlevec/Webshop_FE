import styled from "styled-components";

export const StyledInfo = styled.div`
  width: 100%;
  height: fit-content;

  .info_wrapper {
    padding: 100px 0 100px 100px;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 70px;

    @media (min-width: 992px) and (max-width: 1440px) {
      padding: 50px 0 50px 50px;
      gap: 40px;
    }

    @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
      padding: 50px 0 50px 50px;
    }

    @media (max-width: 576px) and (orientation: portrait) {
      padding: 25px;
    }
    
    
    .styledComponent-Help {
      width: 450px;
      height: 535px;

      @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
        width: 300px;
        height: 400px;
      }

      @media (max-width: 576px) and (orientation: portrait) {
        display: none;
      }
      
      .help_container {
        .help_content-container {
          @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
            width: 75%;
          }
        }
      }
    }
    
    .list_content-wrapper {
      width: fit-content;
      height: 100%;

      .list_content_container {
        width: fit-content;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(2, auto);
        gap: 50px;

        @media (min-width: 992px) and (max-width: 1440px) {
          gap: 25px;
        }

        @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
         display: flex;
          justify-content: center;
          align-items: start;
          flex-direction: column;
          width: fit-content;
        }

        @media (max-width: 576px) and (orientation: portrait) {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }



        .list_content_cydexPharm-container {
          width: fit-content;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 10px;

          .list_content_cydexPharm-title-container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: start;
            align-items: center;

            .list_content_cydexPharm-title {
              font-size: 24px;
              font-weight: 600;
              color: var(--main-blue);
            }
          }


          ul {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: start;
            align-items: start;
            flex-direction: column;
            gap: 5px;

            a {
              text-decoration: none;
            }


            li {
              color: var(--dark-blue);
              font-size: 16px;
              font-weight: 400;
              cursor: var(--common-cursor);

              &:hover {
                color: var(--light-blue);
              }
            }
          }

        }


        .list_content_terms-container {
          width: fit-content;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 10px;


          .list_content_terms-title-container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: start;
            align-items: center;

            .list_content-terms-title {
              font-size: 24px;
              font-weight: 600;
              color: var(--main-blue);
            }
          }


          ul {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: start;
            align-items: start;
            flex-direction: column;
            gap: 10px;

            a {
              text-decoration: none;
            }


            li {
              color: var(--dark-blue);
              font-size: 16px;
              font-weight: 400;
              cursor: var(--common-cursor);

              &:hover {
                color: var(--light-blue);
              }
            }
          }

        }

        .list_content_payment-methods-container {
          width: fit-content;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: start;
          flex-direction: column;
          gap: 10px;

          .list_content_payment-methods-title-container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: start;
            align-items: center;

            .list_content_payment-methods-title {
              font-size: 24px;
              font-weight: 600;
              color: var(--main-blue);
            }
          }

          .list_content_payment-methods-description-container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: start;
            flex-direction: column;

            .list_content_payment-methods-description-title-container {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: start;
              align-items: center;

              .list_content_payment-methods-description-title {
                font-size: 16px;
                color: var(--dark-blue);
              }
            }

            ul {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: start;
              align-items: start;
              flex-direction: column;
              gap: 10px;


              a {
                text-decoration:  none;
                
                li {
                  color: var(--dark-blue);
                  font-size: 16px;
                  font-weight: 400;
                  cursor: var(--common-cursor);

                  &:hover {
                    color: var(--light-blue);
                  }
                }
              }
            }

            .list_content_payment_methods-paragraph-container {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: start;
              gap: 5px;
              font-size: 16px;
              color: var(--dark-blue);

              .list_content_payment_methods-paragraph-one-container {
                .list_content_payment_methods-paragraph-one {
                  color: var(--main-blue);
                  text-decoration: underline;
                  cursor: var(--common-cursor);

                  &:hover {
                    color: var(--light-blue);
                  }
                }
              }

            }

            .list_content_payment_methods-icons-container {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: start;
              align-items: center;
              padding-top: 10px;

              .list_content_payment_methods-icons-content-container {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: start;
                align-items: center;
                gap: 10px;

                .list_content_payment_methods-icons-image-container {

                  svg {
                    width: 35px;
                    height: 35px;
                    fill: var(--main-blue);
                    cursor: var(--common-cursor);

                    &:hover {
                      fill: var(--light-blue);
                    }
                  }
                }

              }
            }

          }

        }

      }
    }
  }
`