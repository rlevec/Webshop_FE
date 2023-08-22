import styled from "styled-components";

export const StyledNewsletter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-self: center;
  background-color: var(--lightest-blue);
  color: var(--dark-blue);
  position: relative;

  .newsletter_wrapper {
    width: 50%;
    height: 100%;
    background-color: var(--common-light);
    padding: 20px;

    @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
      width: 100%;
    }

    @media (max-width: 576px) and (orientation: portrait) {
      width: 100%;
    }


    .newsletter_form-error {
      width: 100%;
      height: fit-content;
      top: 5px;
      font-size: 14px;
      color: var(--error-color);
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    }
    
    .newsletter_success-message {
      width: 100%;
      height: fit-content;
      top: 5px;
      font-size: 14px;
      color: var(--success-color);
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    }


    .newsletter_logo-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      padding: 20px;
    }

    .newsletter_content-container {
      padding-left: 5%;
      width: 90%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-self: center;
      flex-direction: column;

      h1 {
        font-weight: 600;
        font-size: 28px;
        color: var(--main-blue);
      }

      p {
        font-weight: 300;
        font-size: 18px;
      }

      a {
        text-decoration: none;
        font-weight: 500;
        color: var(--main-blue);
      }
    }

    .newsletter_mandatory-container {
      padding-left: 5%;
      width: 90%;
      display: flex;
      justify-content: end;
      align-items: center;
      gap: 5px;
      font-size: 18px;


      .newsletter_mandatory-apendix {
        font-weight: 600;
        color: var(--error-color);
      }

      .newsletter_mandatory-text {
        font-weight: 300;
      }
    }

    .newsletter_marketing-container {
      padding: 50px 0;
      padding-left: 5%;
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 50px;
      flex-direction: column;
      font-size: 18px;

      .newsletter_marketing-input-error-container {
        width: 100%;
        height: 100%;
        position: relative;

        .newsletter_mandatory-apendix {
          font-weight: 600;
          color: var(--error-color);
          position: absolute;
          top: -4px;
          left: 185px;
        }

        input {
          height: 20px;
          width: 100%;
          border: none;
          border-bottom: 3px solid var(--main-blue);
          font-size: 20px;
          text-indent: 30px;
          
          
          ::placeholder {
            color: var(--light-blue);
          }

          &:focus {
            outline: none;
          }
        }


        .inputs_field-icons {
          position: absolute;
          top: -5px;
          left: 2.5px;

          svg {
            width: 25px;
            height: 25px;
            fill: var(--main-blue);
          }
        }

        .inputs_field-sub-icons {
          position: absolute;
          top: -2.5px;
          right: 0;

          svg {
            width: 25px;
            height: 25px;
            fill: var(--main-blue);
            cursor: pointer;
          }
        }

        .inputs_field-error {
          width: 100%;
          position: absolute;
          color: var(--error-color);
          display: flex;
          justify-content: center;
          align-items: center;
          top: 25px;
        }

        .newsletter_marketing-error-container {
          position: absolute;
          color: var(--error-color);
        }

        .newsletter_mandatory-icon-container {
          position: absolute;
          color: var(--error-color);
          font-size: 18px;
          font-weight: 600;
          left: 185px;
          top: -2.5px;
        }


        .newsletter_marketing-input-icon-container {
          position: absolute;
          top: -2.5px;

          svg {
            width: 25px;
            height: 25px;
            fill: var(--main-blue);
          }
        }

      }

      .newsletter_marketing-allowance-container {
        height: fit-content;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        gap: 10px;

        .newsletter_marketing-allowance_mandatory-container {
          color: var(--error-color);
          font-size: 18px;
          font-weight: 600;
        }

        .newsletter_marketing-allowance-title-container {
          width: 100%;
          height: fit-content;
          display: flex;
          justify-content: start;
          align-items: center;
          gap: 2.5px;

          .newsletter_marketing-allowance_title {
            font-weight: 600;
            font-size: 22px;
          }
          
        }

        .newsletter_marketing-allowance_paragraph-container {
          font-size: 18px;
          font-weight: 300;
        }

        .newsletter_marketing-allowance_input-container {
          width: 100%;
          height: 50px;
          display: flex;
          justify-content: start;
          align-items: center;
          position: relative;
          gap: 5px;

          input {
            width: 25px;
            height: 25px;
            cursor: var(--common-cursor);
            accent-color: var(--light-blue);
          }

          label {
            font-size: 18px;
            font-weight: 500;
            color: var(--main-blue);
          }

          .newsletter_marketing-allowance_mandatory-container {
            color: var(--error-color);
            position: absolute;
            font-size: 12px;
            font-weight: 600;
            left: 2.5px;
            bottom: -2.5px;         
          }

          .newsletter_marketing-allowance_label-container {
            color: var(--main-blue);
            font-size: 18px;
            font-weight: 600;
            letter-spacing: 0.5px;
          }

        }

        .newsletter_marketing-allowance_mailchimp-container {
          padding: 50px 0;
          width: 100%;
          height: fit-content;
          display: flex;
          gap: 20px;

          img {
          }


          div {
            text-align: justify;
            font-size: 16px;
            font-weight: 300;

            strong {
              color: var(--main-blue);
            }

            a {
              text-decoration: none;
              color: var(--main-blue);
              font-weight: 600;
              cursor: pointer;
            }
          }
        }

        .newsletter_marketing-allowance_button-container {
          width: 100%;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;

          
          button {
            height: 40px;
            width: 250px;
            border: none;
            background: var(--main-blue);
            color: var(--common-light);
            font-size: 16px;
            letter-spacing: 2.5px;
            cursor: pointer;
            border-radius: 5px;

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

    }
  }
`