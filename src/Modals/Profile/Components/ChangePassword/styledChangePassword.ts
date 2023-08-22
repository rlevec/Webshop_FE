import styled from "styled-components";

export const StyledChangePassword = styled.div`
  width: 100%;
  height: 100%;

  .change_password_container {
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 70px;

    @media (min-width: 992px) and (max-width: 1440px) {
      margin: 0 auto;
      justify-content: center;
      display: flex;
      align-items: center;
      width: fit-content;
      transform: translateX(10%);
      padding: 0;
    }

    .change_password_label {
      width: 100%;
      height: fit-content;
      text-align: center;
      font-size: 32px;
      font-weight: 700;
      color: var(--main-blue);
    }

    .change_password_input-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 70.5%;
      gap: 50px;
    }
  }
`