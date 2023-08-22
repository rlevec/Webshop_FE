import styled from "styled-components";

type StyledRegularPropTypes = {
    dateSelected: boolean
}

export const StyledRegular = styled.div<StyledRegularPropTypes>`
    position: relative;

    input[type=date] {
      text-indent: 15px;
    }

    input {
      height: 20px;
      width: var(--input-width);
      border: var(--border-none-input);
      border-bottom: var(--border-bottom-input);
      border-color: var(--main-blue);
      font-size: var(--font-size-input);
      text-indent: 30px;

      ::-webkit-calendar-picker-indicator {
        position: absolute;
        left: 0;
        z-index: 2;
        opacity: 0.1;
        filter: invert(11%) sepia(45%) saturate(5408%) hue-rotate(215deg) brightness(94%) contrast(105%);
        cursor: pointer;
        text-indent: unset;
        width: 300px;
      }

      ::-webkit-datetime-edit-fields-wrapper {
        color: ${props => props?.dateSelected ? "#002878" : "#AFDBF5"};
      }

      ::placeholder {
        color: var(--light-blue);
      }

      &:focus {
        outline: none;
      }
    }
  
  .example_field_rendered {
    position: absolute;
    bottom: 30px;
    width: fit-content;
    right: -15px;
    background-color: var(--light-blue);
    font-size: 12px;
    padding: 5px;
    border: 1px solid var(--main-blue);
    border-radius: 5px;
  }
  
  .field_example-data {
    position: absolute;
    width: fit-content;
    height: fit-content;
    left: 105%;
    bottom: 0;
    cursor: pointer;
    border: 1px solid var(--main-blue);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--light-blue);
    
    &:hover {
      background-color: var(--lightest-blue);
    }
    
    svg {
      padding: 5px;
      width: 12.5px;
      height: 12.5px;
      fill: var(--main-blue);
    }
  }

    .inputs_field-icons {
      position: absolute;
      top: -5px;
      left: 2.5px;

      svg {
        width: 25px;
        height: 25px;
        fill: var(--main-blue);
      }
    }

    .inputs_field-sub-icons {
      position: absolute;
      top: -2.5px;
      right: 0;

      svg {
        width: 25px;
        height: 25px;
        fill: var(--main-blue);
        cursor: pointer;
      }
    }

    .inputs_field-error {
      width: 100%;
      position: absolute;
      color: var(--error-color);
      display: flex;
      justify-content: center;
      align-items: center;
      top: 25px;
    }
`