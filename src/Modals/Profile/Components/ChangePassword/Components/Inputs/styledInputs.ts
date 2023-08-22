import styled from "styled-components";

export const StyledInputs = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  input {
    width: 300px;
    height: 20px;
    border: none;
    border-bottom: 3px solid var(--main-blue);
    border-color: var(--main-blue);
    font-size: 20px;
    text-indent: 30px;
    color: var(--dark-blue);

    @media (min-width: 992px) and (max-width: 1440px) {
      width: 400px;
    }


    ::placeholder {
      color: var(--light-blue);
      font-weight: 300;
      letter-spacing: 0.5px;
    }

    &:focus {
      outline: var(--border-input-outline);
    }
  }

  .inputs_input-field-error {
    position: absolute;
    color: var(--error-color);
    top: 25px;
    text-align: center;
    width: 100%;
  }

  .inputs_field-sub-icons {
    position: absolute;
    top: -2.5px;
    right: 0;

    @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
      right: 17.5px;
    }

    svg {
      width: 25px;
      height: 25px;
      fill: var(--main-blue);
      cursor: pointer;
    }
  }

  .inputs_input-field-icons {
    position: absolute;
    left: 1.5px;
    bottom: 5px;
    height: 25px;
    width: 30px;
    background-color: white;

    @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
      left: 17.5px;
    }

    svg {
      width: 25px;
      height: 25px;
      fill: var(--main-blue);
    }
  }
`