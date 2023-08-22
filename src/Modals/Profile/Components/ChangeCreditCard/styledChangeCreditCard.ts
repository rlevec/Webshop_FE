import styled from "styled-components";

export const StyledChangeCreditCard = styled.div`
  width: 100%;
  height: 100%;

  .change_credit_card_form-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 60px;

    @media (min-width: 992px) and (max-width: 1440px) {
      margin: 0 auto;
      justify-content: center;
      display: flex;
      align-items: center;
      width: fit-content;
      transform: translateX(27.5%);
    }
    
    label {
      width: 100%;
      height: fit-content;
      text-align: center;
      font-size: 32px;
      font-weight: 700;
      color: var(--main-blue);
    }
    
    .change_credit_card_inputs-container {
      height: fit-content;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 40px;
    }
  }
`