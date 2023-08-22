import styled from "styled-components";

export const StyledButtons = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .buttons_wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media (min-width: 992px) and (max-width: 1440px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin: 0 auto;
      width: 50%;
      gap: 20px;
    }
    
    
    .buttons_button-container {
      width: fit-content;
      height: fit-content;

      @media (min-width: 992px) and (max-width: 1440px) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .active {
        background-color: var(--main-blue);
        color: var(--common-light);
      }
      
      button {
        height: 50px;
        width: 200px;
        border: var(--button-sign-in-border);
        background: var(--light-blue);
        color: var(--main-blue);
        font-size: var(--button-font-size);
        letter-spacing: var(--letter-spacing-title);
        cursor: var(--common-cursor);
        border-radius: var(--button-border-radius);
        font-weight: 540;
        
        &:hover {
          opacity: var(--common-opacity);
        }
      }
    }
    
  }
`