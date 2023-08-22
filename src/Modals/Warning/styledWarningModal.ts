import styled from "styled-components";

export const StyledWarningModal = styled.div`
  width: 350px;
  height: 200px;
  box-shadow: var(--boxshadow-blue);
  padding: 0;
  margin: 0;
  
  .warning_modal-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    gap: 20px;
    
    .warning_modal-title {
      padding: 0;
      margin: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: fit-content;
      font-size: 26px;
      font-weight: 600;
      color: var(--dark-blue);
      text-align: center;
    }
    
    .warning_modal-desc {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 5px;
      padding: 0;
      margin: 0;
      text-align: center;
      
      .warning_modal-desc-dynamic {
        padding: 0;
        margin: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: fit-content;
        font-size: 18px;
        font-weight: 400;
        color: var(--dark-blue);
      }
      
      .warning_modal-desc-static {
        padding: 0;
        margin: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: fit-content;
        font-size: 14px;
        font-weight: 300;
        color: var(--error-color);
      }
    }
    
    .warning_modal-buttons {
      padding: 0;
      margin: 0;
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
      
      .warning_modal-close-button {
        border-radius: 5px;
        width: 70px;
        height: 40px;
        letter-spacing: 0.5px;
        font-size: 14px;
        cursor: pointer;
        background-color: var(--main-blue);
        color: var(--common-light);
        border: none;
        
        &:hover {
          opacity: 0.8;
        }
      }
      
      
      .warning_modal-action-button {
        border-radius: 5px;
        width: 70px;
        height: 40px;
        letter-spacing: 0.5px;
        font-size: 14px;
        cursor: pointer;
        background-color: var(--error-color);
        color: var(--common-light);
        border: none;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`