import styled from "styled-components";

export const StyledCustomTerms = styled.div`
    height: fit-content;
    width: 308px;

    .terms_wrapper {
      overflow-y: scroll;
      width: 100%;
      height: 221px;
      overscroll-behavior: contain;
      text-align: justify;

      ::-webkit-scrollbar {
        width: 8px;
      }

      ::-webkit-scrollbar-track {
        box-shadow: var(--boxshadow-blue);
        background-color: var(--light-blue);
      }

      ::-webkit-scrollbar-thumb {
        background-color: var(--main-blue);
        cursor: var(--common-cursor);
      }


      h2 {
        color: var(--main-blue)
      }

      p {
        strong {
          color: var(--main-blue)
        }
      }

      ul {
        li {
          color: var(--main-blue);
        }
      }
    }

    .terms_button-container {
      width: 300px;
      height: fit-content;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      gap: 10px;

      .terms_button-decline {
        height: 40px;
        width: 120px;
        font-size: var(--button-font-size);
        border: none;
        border-radius: var(--button-border-radius);
        cursor: var(--common-cursor);
        background-color: var(--error-color);
        color: var(--common-light);

        &:hover {
          opacity: var(--common-opacity);
        }
      }

      .terms_button-accept {
        height: 40px;
        width: 120px;
        font-size: var(--button-font-size);
        border: none;
        border-radius: var(--button-border-radius);
        cursor: var(--common-cursor);
        background-color: var(--main-blue);
        color: var(--common-light);

        &:hover {
          opacity: var(--common-opacity);
        }
      }
    }
`