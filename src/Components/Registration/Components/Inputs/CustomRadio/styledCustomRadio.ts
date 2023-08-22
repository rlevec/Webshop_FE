import styled from "styled-components";

export const StyledCustomRadio = styled.div`
    width: 300px;
    height: 25px;
    position: relative;

    .radio_wrapper {
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      gap: 30px;
      padding-left: 27.5px;

      .gender_male-button {
        height: 27.5px;
        width: 82.5px;
        font-size: var(--button-font-size);
        border: none;
        border-radius: var(--button-border-radius);
        cursor: var(--common-cursor);
        background-color: var(--dark-blue);
        color: var(--common-light);
        margin-bottom: 10px;
      }

      .male-active {
        box-shadow: var(--boxshadow-blue-gender);
      }

      .gender_female-button {
        height: 27.5px;
        width: 82.5px;
        font-size: var(--button-font-size);
        border: none;
        border-radius: var(--button-border-radius);
        cursor: var(--common-cursor);
        background-color: #7F00FF;
        color: var(--common-light);
        margin-bottom: 10px;
      }

      .female-active {
        box-shadow: var(--boxshadow-blue-gender);
      }

      .inputs_field-icons {
        position: absolute;
        left: 2.5px;

        svg {
          width: 25px;
          height: 25px;
          fill: var(--main-blue);
        }
      }
    }
`