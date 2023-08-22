import styled from "styled-components";

export const StyledProfile = styled.div`
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

  .profile_wrapper {
    width: 100%;
    height: 100%;
    padding: 0 25px;

    @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
      padding: 0 10px;
      width: 95%;
    }
    
    @media (max-width: 576px) and (orientation: portrait) {
      padding: 0;
    }
    
    .close-icon-container {
      width: fit-content;
      height: fit-content;
      transform: translate(452px, 4px);
      position: relative;
      z-index: 4;

      @media (max-width: 576px) and (orientation: portrait) {
        transform: translate(88.2vw, 4px);
      }
      
      svg {
        width: 40px;
        height: 40px;
        fill: var(--main-blue);
      }
    }

    @media (min-width: 992px) and (max-width: 1440px) {
      width: fit-content;
    }

    .profile_anauth-content-container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 30px;
      text-align: center;
      margin-left: -10px;

      @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
        transform: translateY(-45px);
      }

      @media (max-width: 576px) and (orientation: portrait) {
        transform: translateY(-45px);
      }


      .profile_anauth_title {
        font-size: var(--font-size-title-monitor);
        color: var(--main-blue);
        letter-spacing: var(--letter-spacing-title);
        margin: var(--margin-zero);
        padding: var(--padding-zero);
        font-weight: 700;
      }

      .profile_anauth_paragraph_one {
        font-size: 28px;
        color: var(--dark-blue);
      }

      .profile_anauth_paragraph_two {
        width: 90%;
        font-size: 20px;
        color: var(--dark-blue);
        font-weight: 300;

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

    .profile_container {
      width: 475px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      @media (min-width: 992px) and (max-width: 1440px) {
        width: 100%;
      }

      @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
        transform: translateY(-45px);
      }

      .profile_warning-modal-container {
        position: absolute;
        background-color: white;
        z-index: 3;

        @media (min-width: 992px) and (max-width: 1440px) {
          top: 30%;
          left: 17.5%;
        }

        @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
          left: 16.5%;
        }
      }

      .profile_content-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        

        .profile_content {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: start;
          align-items: center;
          font-size: 14px;


          gap: 5px;

          .profile_field-icon {
            margin-top: 2.5px;

            svg {
              width: 20px;
              height: 20px;
              fill: var(--main-blue);
            }
          }

          .profile_field-label {
            font-weight: 600;
            color: var(--dark-blue);
          }

          .profile_field-value {
            font-weight: 300;
            color: var(--light-blue);

            @media (min-width: 992px) and (max-width: 1440px) {
              font-size: 12px;
            }
            
          }
        }
      }

      .profile_buttons-icon-container {
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        gap: 110px;

        @media (min-width: 992px) and (max-width: 1440px) {
          transform: translateX(27.5px);
        }


        .profile_component-activate-buttons-container {
          height: fit-content;
          width: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 25px;
          
          .profile_component-activate-button-container {
            button {
              width: 120px;
              height: 50px;
              font-size: 16px;
              cursor: pointer;
              background-color: var(--main-blue);
              color: var(--common-light);
              border-radius: 5px;
              border: none;

              &:hover {
                color: var(--main-blue);
                background-color: var(--light-blue);
              }
            }
          }
        }

        .logout_icon-container {
          padding-left: 40px;
          cursor: pointer;

          svg {
            width: 50px;
            height: 50px;
            fill: var(--main-blue);

            &:hover {
              fill: var(--light-blue);
            }
          }
        }


        .profile_icon-container {
          padding: 0 10px;
          position: relative;

          .profile_delete-account-modal-icon-trigger {
            position: absolute;
            right: 0;

            &:hover {
              right: -2.5px;
            }

            svg {
              width: 25px;
              height: 25px;
              cursor: pointer;
              fill: var(--error-color);

              &:hover {
                width: 30px;
                height: 30px;
              }
            }
          }

          img {
            width: 75px;
            height: 75px;
          }
        }
      }
    }
  }
`