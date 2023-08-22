import styled from "styled-components";

export const StyledButtons = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  .change_password_back-btn {
    width: 100px;
    border-radius: 5px;
    padding-top: 15px;
    padding-bottom: 15px;
    letter-spacing: 0.5px;
    font-size: 16px;
    cursor: pointer;
    background-color: var(--light-blue);
    color: var(--common-light);
    border: none;

    &:hover {
      opacity: 0.8;
    }
  }


  .change_password_action-btn {
    width: 100px;
    border-radius: 5px;
    padding-top: 15px;
    padding-bottom: 15px;
    letter-spacing: 0.5px;
    font-size: 16px;
    cursor: pointer;
    background-color: var(--main-blue);
    color: var(--common-light);
    border: none;

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