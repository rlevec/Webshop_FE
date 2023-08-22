import styled from "styled-components";

export const StyledButtons = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 40px;

    .registration_form_prev-button-container {
      button {
        width: 120px;
        height: 40px;
        background-color: var(--light-blue);
        color: var(--common-light);
        cursor: pointer;
        border: none;
        border-radius: 5px;
        font-size: 16px;

        &:hover {
          opacity: 0.8;
        }

        &:disabled {
          opacity: 0.8;
          cursor: not-allowed;
        }
      }
    }

    .registration_form_next-button-container {
      button {
        width: 120px;
        height: 40px;
        background-color: var(--main-blue);
        color: var(--common-light);
        cursor: pointer;
        border: none;
        border-radius: 5px;
        font-size: 16px;

        &:hover {
          opacity: 0.8;
        }

        &:disabled {
          opacity: 0.8;
          cursor: not-allowed;
        }
      }
    }
`