import styled from "styled-components";

export const StyledButtons = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    .change_credit_card_back_button {
      width: 100px;
      border-radius: 5px;
      border: none;
      padding-top: 15px;
      padding-bottom: 15px;
      letter-spacing: 0.5px;
      font-size: 16px;
      cursor: pointer;
      background-color: var(--light-blue);
      color: var(--common-light);

      &:hover {
        opacity: 0.8;
      }
    }

    .change_credit_card_submit_button {
      width: 100px;
      border-radius: 5px;
      border: none;
      padding-top: 15px;
      padding-bottom: 15px;
      letter-spacing: 0.5px;
      font-size: 16px;
      cursor: pointer;
      background-color: var(--main-blue);
      color: var(--common-light);

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
`