import styled from "styled-components";

type StyledDropdownPropTypes = {
    dropdownActive: boolean
}

export const StyledDropdown = styled.div<StyledDropdownPropTypes>`
  width: 100%;
  height: fit-content;

  .dropdown_container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .dropdown_selector-container {
      height: 50px;
      width: 400px;
      padding: 5px 20px;
      background: var(--main-blue);
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border-bottom-left-radius: ${props => props?.dropdownActive ? "null" : "5px"};
      border-bottom-right-radius: ${props => props?.dropdownActive ? "null" : "5px"};
      color: var(--common-light);
      font-size: var(--button-font-size);
      letter-spacing: var(--letter-spacing-title);
      cursor: var(--common-cursor);
      font-weight: 540;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 576px) and (orientation: portrait) {
        width: 250px;
      }

      .dropdown_selector-selected-container {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
      }

      .dropdown_selector-icon-container {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          fill: var(--common-light);
          width: 20px;
          height: 20px;
        }
      }
    }

    .dropdown_active-container {
      height: fit-content;
      width: 440px;
      background: var(--light-blue);
      color: var(--main-blue);
      font-size: var(--button-font-size);
      letter-spacing: var(--letter-spacing-title);
      cursor: var(--common-cursor);
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;

      @media (max-width: 576px) and (orientation: portrait) {
        width: 288.5px;
      }


      .dropdown_active-single-content {
        border-bottom: 1px solid var(--main-blue);
        border-left: 2px solid var(--main-blue);
        border-right: 2px solid var(--main-blue);
        padding: 15px 20px;

        &:hover {
          background: var(--main-blue);
          color: var(--common-light);
        }

        &:last-child {
          border-bottom: 2px solid var(--main-blue);
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
        }
      }
    }
  }
`