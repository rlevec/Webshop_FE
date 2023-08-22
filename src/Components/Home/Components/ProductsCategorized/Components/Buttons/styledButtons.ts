import styled from "styled-components";

export const StyledButtons = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  
  .buttons_container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;

    .buttons_single-container {

      .active {
        background: var(--main-blue);
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