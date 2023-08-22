import styled from "styled-components";

export const StyledCustomSelect = styled.div`
    height: 22.5px;
    width: var(--input-width);
    border: var(--border-none-input);
    border-bottom: var(--border-bottom-input);
    border-color: var(--main-blue);
    font-size: var(--font-size-input);
    text-indent: 32px;
    cursor: var(--common-cursor);

    .select_input_wrapper {
      width: 100%;
      height: 100%;
      position: relative;

      .select_input_value-container {
        .select_input_placeholder-value-container {
          color: var(--light-blue);
        }

        .active {
          color: var(--main-blue)
        }
      }

      .inputs_field-icons {
        width: max-content;
        position: absolute;
        top: -5px;
        left: -30px;

        svg {
          width: 25px;
          height: 25px;
          fill: var(--main-blue);
        }
      }

      .select_input_dropdown-container {
        position: absolute;
        width: 302px;
        height: fit-content;
        top: 25px;
        z-index: 2;
        background-color: white;


        .dropdown_wrapper {
          overflow-y: scroll;
          height: 150px;
          box-shadow: 0 0 15px 7.5px rgba(0, 40, 120, 1);;

          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-track {
            box-shadow: var(--boxshadow-blue);
            background-color: var(--light-blue);
          }

          ::-webkit-scrollbar-thumb {
            background-color: var(--main-blue);
          }

          .dropdown_element {
            padding: 5px 0 5px 0;
            letter-spacing: 1px;
            font-size: 16px;

            &:hover {
              background-color: var(--main-blue);
              color: var(--common-light)
            }
          }
        }
      }
    }
`