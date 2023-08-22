import styled from "styled-components";

export const StyledButtons = styled.div`
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
          width: var(--button-sign-up-width);
          height: var(--button-sign-up-height);
          border: var(--button-sign-up-border);
          background-color: var(--main-blue);
          cursor: var(--common-cursor);
          position: relative;
          border-radius: var(--button-border-radius);

          &:hover {
            opacity: var(--common-opacity);
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
        cursor: pointer;
        font-weight: 500;
        font-size: 18px;
        color: var(--main-blue);


        &:hover {
          opacity: 0.8;
        }

      }
    }

  .login_form_login-button-container {
    .login_form_login-button {
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
`