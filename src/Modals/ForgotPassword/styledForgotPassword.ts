import styled from "styled-components";

export const StyledForgotPassword = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid black;
  position: absolute;
  z-index: 1;
  background-color: var(--common-light);
  left: 50%;
  transform: translate(-50%, 0%);
  box-shadow: var(--boxshadow-blue);
  
  .forgot_password_wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    
    .forgot_password_form-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 40px;
      position: relative;

      .forgot_password_form_form-error-container {
        position: absolute;
        top: 0;
        width: fit-content;

        p {
          color: var(--error-color);
        }
      }

      .forgot_password_form_header-container {
        .forgot_password_form_header {
          font-size: 24px;
          font-weight: 500;
          letter-spacing: var(--letter-spacing-title);
          color: var(--main-blue)
        }
      }
      
      
      .forgot_password_form_inputs-container {
        .input_wrapper {
          width: fit-content;
          height: fit-content;
          position: relative;


          input {
            height: 20px;
            width: 200px;
            border: var(--border-none-input);
            border-bottom: 3px solid var(--main-blue);
            border-color: var(--main-blue);
            font-size: var(--font-size-input);
            text-indent: 30px;
            

            ::placeholder {
              color: var(--light-blue);
            }

            &:focus {
              outline: none;
            }
          }


          .inputs_field-icons {
            background-color: var(--common-light);
            height: 25px;
            width: 30px;
            position: absolute;
            top: -5px;
            left: 1.5px;

            svg {
              width: 25px;
              height: 25px;
              fill: var(--main-blue);
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
        }
      }

      .forgot_password_form_button-container {
        .forgot_password_form_button {
          height: 40px;
          width: 225px;
          border: none;
          cursor: pointer;
          border-radius: 5px;
          background-color: var(--main-blue);
          color: var(--common-light);
          font-size: 16px;
          letter-spacing: 2px;

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
    
    .forgot_password_close-icon-container {
      cursor: pointer;
      
      svg {
        width: 25px;
        height: 25px;
        position: absolute;
        top: 5px;
        right: 5px;
        z-index: 2;
        fill: var(--main-blue);
        
        &:hover {
          fill: var(--light-blue)
        }
      }
    }
  }
`