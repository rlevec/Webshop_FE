import styled from "styled-components";

export const StyledTransaction = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  color: var(--main-blue);

  @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
  }

  @media (max-width: 576px) and (orientation: portrait) {
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
  }

  .transaction_wrapper {
    height: 100%;
    width: 100%;
    background-color: white;
    color: white;
    box-shadow: var(--boxshadow-blue);
    padding: 20px 10px;

    @media (max-width: 576px) and (orientation: portrait) {
      padding: 0;
    }

    .transaction_close-icon-container {
      width: fit-content;
      height: fit-content;
      position: absolute;
      cursor: pointer;
      right: 15px;
      top: 10px;
      z-index: 5;

      svg {
        width: 25px;
        height: 25px;
        fill: var(--main-blue);

        &:hover {
          fill: var(--light-blue);
        }
      }
    }


    .transaction_container {
      height: fit-content;
      position: relative;
      width: 100%;
      max-height: 504px;
      color: var(--main-blue);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      gap: 50px;
      overflow-y: scroll;
      text-align: center;

      @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
        max-height: 100%;
        overflow: hidden;
      }

      @media (max-width: 576px) and (orientation: portrait) {
        max-height: 100%;
        overflow-y: scroll;
      }
      

      ::-webkit-scrollbar {
        width: 8px;
      }

      ::-webkit-scrollbar-track {
        box-shadow: var(--boxshadow-blue);
        background-color: var(--light-blue);
      }

      ::-webkit-scrollbar-thumb {
        background-color: var(--main-blue);
      }

      
      .transaction_title-container {
        font-size: 36px;
        color: var(--main-blue);
        letter-spacing: 2px;
        margin: 0;
        padding: 0;
        font-weight: 700;
      }

      .transaction_inputs-container {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 50px;

        @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
         gap: 40px
        }
        
        @media (max-width: 576px) and (orientation: portrait) {
          gap: 30px;
        }
        
        .transaction_input-container {
          position: relative;
          
          .inputs_field-error {
            position: absolute;
            color: var(--error-color);
            text-align: center;
            width: 100%;
          }
          
          .inputs_field-icons {
            position: absolute;
            top: -3px;
            width: 30px;
            height: 25px;
            background-color: var(--common-light);
            
            svg {
              width: 25px;
              height: 25px;
              fill: var(--main-blue);
            }
          }
          
          input {
            border: none;
            width: 350px;
            height: 20px;
            border-bottom: 2px solid var(--main-blue);
            font-size: 20px;
            text-indent: 30px;
            color: var(--dark-blue);
            border-image: initial;

            @media (max-width: 576px) and (orientation: portrait) {
              width:275px;
            }

            ::placeholder {
              color: vaR(--light-blue);
            }

            &:focus {
              outline: none;
            }
          }
        }
        
      }
      
      button {
        height: fit-content;
        padding: 10px 0;
        width: 200px;
        border: none;
        background: var(--main-blue);
        color: var(--common-light);
        font-size: 20px;
        letter-spacing: 2px;
        cursor: pointer;
        border-radius: 5px;
        font-weight: 500;

        @media (max-width: 576px) and (orientation: portrait) {
          margin-bottom: 10px;
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

      .transaction_warning-container {
        padding: 0 70px;
        font-size: 18px;
        
        .price {
          font-weight: 700;
        }
      }
      
      .transaction_delivery-container {
        padding: 0 50px;
        font-size: 18px;
        
        .delivery {
          font-weight: 700;
        }
      }
      
      .transaction_account-container {
        padding: 0 50px;
        font-size: 18px;
        
        .account {
          color: var(--main-blue);
          font-weight: 700;
        }
        
        a {
          text-decoration: none;
          
          .link {
            color: var(--main-blue);
            font-weight: 700;
          }
        }
      }
    }
  }
`