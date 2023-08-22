import styled from "styled-components";


export const StyledEditConsent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--lightest-blue);
  color: var(--dark-blue);
  position: relative;

  .edit_consent-wrapper {
    width: 50%;
    height: fit-content;
    background: var(--common-light);
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 25px;
    color: var(--dark-blue);

    @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
      width: 100%;
    }

    @media (max-width: 576px) and (orientation: portrait) {
      width: 100%;
    }
  }

  .edit_consent-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    
    
    .edit_consent_perma_label-input-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      input {
        width: 25px;
        height: 25px;
        cursor: not-allowed;
        accent-color: var(--light-blue);
      }

      label {
        font-size: 18px;
        font-weight: 500;
        color: var(--main-blue);
      }
    }
    
    .edit_consent_label-input-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      
      input {
        width: 25px;
        height: 25px;
        cursor: var(--common-cursor);
        accent-color: var(--light-blue);
      }

      label {
        font-size: 18px;
        font-weight: 500;
        color: var(--main-blue);
      } 
    }
    

    ul {
      display: flex;
      justify-content: center;
      align-items: start;
      flex-direction: column;
      gap: 10px;
      font-weight: 300;

      li {
        span {
          a {
            font-weight: 600;
            text-decoration: none;
          }
        }
      }
    }
  }

  .edit_consent-button-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      height: 50px;
      width: 200px;
      font-size: var(--button-font-size);
      border: none;
      border-radius: var(--button-border-radius);
      cursor: var(--common-cursor);
      background-color: var(--main-blue);
      color: var(--common-light);

      &:hover {
        background-color: var(--light-blue);
        color: var(--main-blue);
      }
    }
  }
`