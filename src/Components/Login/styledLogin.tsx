import styled from "styled-components"


export const StyledLogin = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  .login_wrapper {
    width: 25%;
    height: 60%;
    box-shadow: var(--boxshadow-blue);

    @media (min-width: 992px) and (max-width: 1440px) {
      width: 30%;
      height: 80%;
    }

    @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
      width: 50%;
    }
    
    @media (max-width: 576px) and (orientation: portrait) {
     width: 100%;
      height: 100%;
      box-shadow: none;
    }
    

    .login_form-wrapper {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: relative;
      gap: 80px;
    }

    .login_form_home-link-container {
      position: absolute;
      top: 10px;
      right: 10px;

      svg {
        width: 25px;
        height: 25px;
        fill: var(--main-blue);

        &:hover {
          fill: var(--light-blue);
        }
      }
    }

    .login_form_submit-error {
      position: absolute;
      color: var(--error-color);
      width: 80%;
      top: 75px;

      .submit-error {
        text-align: center;
        width: 100%;
      }
    }

    .login_form_header-container {
      height: fit-content;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 50px;

      .login_form_header {
        font-size: 36px;
        color: var(--main-blue);
        letter-spacing: 2.5px;
        margin: 0;
        padding: 0;
      }
    }

    .login_form_inputs-container {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;

      .inputs_inputs-wrapper {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 40px;
        
      }
    }

    .login_form_buttons-container {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 20px;

      .login_form_sing-up-forgot-password-buttons-container {
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;


        .login_form_sing-up-button-container {
          .login_form_sign-up-button {
            width: 75px;
            height: 75px;
            border: none;
            background-color: var(--main-blue);
            cursor: pointer;
            position: relative;
            border-radius: 5px;


            &:hover {
              opacity: 0.8;
            }

            .login_form_sing-up-button-icon-container {
              position: absolute;
              top: 25px;
              left: 25px;


              svg {
                fill: var(--common-light);
                width: 30px;
                height: 30px;
              }
            }
          }
        }

        .login_form_forgot-password-container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 5px;
          cursor: pointer);
          font-weight: 500;
          font-size: 18px;
          color: var(--main-blue);


          &:hover {
            opacity: 0.8;
          }

          .login_form_forgot-password-label-one {

          }

          .login_form_forgot-password-label-two {

          }
        }
      

    }
  }
}
`