import styled from "styled-components";

export const StyledFooter = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;

  .footer_wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    .footer_doctor-image-container {
      svg {
        position: absolute;
        bottom: 0;
        right: 50px;
        width: 725px;
        height: 725px;

        @media (min-width: 992px) and (max-width: 1440px) {
          width: 420px;
          height: 420px;
        }
      }

      @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
       display: none;
      }

      @media (max-width: 576px) and (orientation: portrait) {
        display: none;
      }
    }
  }
`