import styled from "styled-components";

export const StyledNewsletter = styled.div`
  width: 100%;
  height: fit-content;
  background-color: var(--main-blue);


  .newsletter_wrapper {
    width: 100%;
    height: 225px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
      height: fit-content;
    }

    .newsletter_container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 25px 0 25px;

      @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
        flex-direction: column;
        align-items: start;
        gap: 25px;
        height: fit-content;
        padding: 50px 25px;
      }

      @media (max-width: 576px) and (orientation: portrait) {
        flex-direction: column;
        align-items: start;
        gap: 0;
        padding: 0;
      }

      .newsletter_container-left {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;

        @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
          width: 100%;
        }

        @media (max-width: 576px) and (orientation: portrait) {
          width: 100%;
          padding-top: 10px;
        }

        .newsletter_icon-container {
          svg {
            width: 75px;
            height: 75px;
            fill: var(--light-blue);

            @media (max-width: 576px) and (orientation: portrait) {
              width: 50px;
              height: 50px;
            }
          }
        }

        .newsletter_title-desc-container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: start;
          flex-direction: column;

          @media (max-width: 576px) and (orientation: portrait) {
            width: 310px;
            text-align: justify;
          }


          .newsletter_title-container {
            width: fit-content;
            height: 50px;

            @media (max-width: 576px) and (orientation: portrait) {
              height: fit-content;
            }

            .newsletter_title {
              font-size: 36px;
              font-weight: 600;
              color: var(--light-blue);

              @media (max-width: 576px) and (orientation: portrait) {
                font-size: 20px;
              }
            }
          }

          .newsletter-desc-container {
            width: fit-content;
            height: 50px;

            @media (max-width: 576px) and (orientation: portrait) {
              height: fit-content;
            }


            .newsletter_desc {
              font-size: 16px;
              font-weight: 300;
              color: var(--common-light);
              width: 100%;


              @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
                width: fit-content;
              }

              @media (max-width: 576px) and (orientation: portrait) {
                font-size: 12px;
              }

            }
          }
        }
      }

      .newsletter_container-right {
        position: relative;
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;

        @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
          width: 100%;
        }

        @media (max-width: 576px) and (orientation: portrait) {
          width: 100%;
          gap: 5px;
          padding-bottom: 20px;
        }

        .newsletter_existing-email-error {
          position: absolute;
          top: 35px;
          left: 347.5px;
          color: var(--error-color);

          @media (min-width: 992px) and (max-width: 1440px) {
            left: 115px;
            width: 100%;
            height: fit-content;
          }

          @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
            left: 0;
            top: -22.5px;
          }

          @media (max-width: 576px) and (orientation: portrait) {
            width: 90%;
            left: 20px;
            top: -103px;
            font-size: 12px;
          }
        }

      }

      .newsletter_input-button-container {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: end;
        align-items: center;
        position: relative;

        @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
          justify-content: center;
        }


        .newsletter_input-container {
          position: relative;

          @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
            width: 100%;
          }

          @media (max-width: 576px) and (orientation: portrait) {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .newsletter_form-error {
            position: absolute;
            font-size: 14px;
            color: var(--error-color);
            font-weight: 600;
            left: 120px;
            top: -20px;
          }


          .newsletter_field-error-container {
            position: absolute;
            font-size: 14px;
            color: var(--error-color);
            font-weight: 600;
            left: 120px;
            top: 60px;

            @media (min-width: 992px) and (max-width: 1440px) {
              left: 0;
            }

            @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
              left: 0;
              width: 100%;
            }

            @media (max-width: 576px) and (orientation: portrait) {
              top: 42.5px;
              width: 90%;
              left: 20px;
              font-size: 12px;
            }

          }

          input {
            height: 57.5px;
            width: 575px;
            text-indent: 47.5px;
            font-size: 20px;
            background-color: var(--common-light);
            border: none;
            color: var(--dark-blue);

            @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
              width: 100%;
            }

            @media (max-width: 576px) and (orientation: portrait) {
              width: 90vw;
              height: 40px;
              font-size: 14px;
            }


            ::placeholder {
              color: var(--main-blue);
            }

            &:focus {
              outline: none;
            }
          }

          svg {
            position: absolute;
            top: 25%;
            left: 2.5%;
            width: 30px;
            height: 30px;
            fill: var(--main-blue);

            @media (max-width: 576px) and (orientation: portrait) {
              left: 5.5%;
              top: 15%;
            }
          }
        }

        .newsletter_button-container {
          position: absolute;
          right: 5px;

          @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
            right: 2.5px;
          }

          @media (max-width: 576px) and (orientation: portrait) {
            right: 20px;
          }


          button {
            position: relative;
            height: 50px;
            width: 200px;
            border: var(--button-sign-in-border);
            background: var(--main-blue);
            color: var(--common-light);
            font-size: var(--button-font-size);
            letter-spacing: var(--letter-spacing-title);
            cursor: var(--common-cursor);
            border-radius: var(--button-border-radius);
            font-weight: 540;
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;

            @media (max-width: 576px) and (orientation: portrait) {
              height: 38.5px;
              width: 100px;
            }

            &:not([disabled]) {
              &:hover {
                opacity: 0.8;
              }
            }


            &:disabled {
              cursor: not-allowed;
              opacity: 0.8;
            }
          }
        }
      }

      .newsletter_checkbox-gdpr-container {
        width: fit-content;
        height: fit-content;
        display: flex;
        align-items: center;
        gap: 5px;
        justify-content: center;
        padding-left: 72.5px;

        @media (min-width: 992px) and (max-width: 1440px) {
          padding-right: 235px;
        }

        @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
          padding-left: 0;
          width: 100%;
          justify-content: start;
        }


        @media (max-width: 576px) and (orientation: portrait) {
          padding-left: 0;
          width: 92.5%;
          justify-content: start;
        }


        .newsletter_checkbox-container {
          height: 100%;
          position: relative;
          width: fit-content;

          .newsletter_gdpr-error-container {
            position: absolute;
            color: var(--common-light);
            font-size: 14px;
            font-weight: 600;
            width: 600px;
            left: 5px;

            @media (max-width: 576px) and (orientation: portrait) {
              font-size: 11px;
              width: max-content;
            }
          }

          input {
            width: 25px;
            height: 25px;
            position: relative;
            cursor: var(--common-cursor);
            accent-color: var(--light-blue);
          }
        }

        .newsletter_gdpr-container {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;
          font-size: 16px;
          color: var(--common-light);


          @media (max-width: 576px) and (orientation: portrait) {
            font-size: 12px;
          }

          .newsletter_gdpr-paragraph-two {
            color: var(--light-blue);
            text-decoration: underline;
            cursor: var(--common-cursor);
          }
        }
      }

    }
  }
}
`