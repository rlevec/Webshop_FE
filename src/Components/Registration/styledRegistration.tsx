import styled from "styled-components";

import {StyledRegistrationPropsTypes} from "./types";

export const StyledRegistration = styled.div<StyledRegistrationPropsTypes>`
  width: 100vw;
  height: 100vh;

  .registration_wrapper {
    height: 100%;
    width: 100%;
    position: relative;

    .registration_form-container {
      width: 30%;
      height: 75%;
      box-shadow: var(--boxshadow-blue);
      transform: translate(115%, 17.5%);
      position: relative;

      @media (min-width: 992px) and (max-width: 1440px) {
        width: 35%;
        height: 90%;
        transform: translate(92.5%, 5.5%);
      }

      @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
        width: 60%;
        transform: translate(34%, 17%);
      }

      @media (max-width: 576px) and (orientation: portrait) {
        transform: unset;
        width: 100%;
        height: 100%;
      }

      .registration_form_wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 80px;
        position: relative;

        .registration_form_inputs-container {
          height: fit-content;
          width: 100%;

          .inputs_inputs-container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 50px;
          }

        }
      }

      .registration_form_home-link-container {
        position: absolute;
        top: 10px;
        right: 10px;

        svg {
          width: 25px;
          height: 25px;
          fill: var(--main-blue);

          &:hover {
            fill: var(--light-blue);
          }
        }
      }

      .registration_form_submit-error {
        position: absolute;
        color: var(--error-color);
        width: 80%;
        top: 75px;

        .submit-error {
          text-align: center;
          width: 100%;
        }
      }

      .registration_form_title-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .registration_form_title {
          font-size: var(--font-size-title-monitor);
          color: var(--main-blue);
          letter-spacing: var(--letter-spacing-title);
          margin: var(--padding-zero);
          padding: var(--margin-zero);
          font-weight: 700;
        }
      }

      .registration_form_account-exists-container {
        position: absolute;
        font-size: 14px;
        color: var(--main-blue);
        letter-spacing: var(--letter-spacing-title);
        margin: var(--padding-zero);
        padding: var(--margin-zero);
        font-weight: 700;
        bottom: 40px;

        @media (min-width: 992px) and (max-width: 1440px) {
          bottom: 27.5px;
        }

        &:hover {
          color: var(--light-blue);
        }
      }
    }
  }
}
`