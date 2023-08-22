import styled from "styled-components";

export const StyledAboutUs = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--lightest-blue);
  position: relative;

  .about_us-wrapper {
    width: 50%;
    height: fit-content;
    background: var(--common-light);
    padding: 20px;

    @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
      width: 100%;
    }

    @media (max-width: 576px) and (orientation: portrait) {
      width: 100%;
    }

    h1 {
      color: var(--main-blue);
      font-size: 36px;
      margin: 0;
      padding: 0;
    }

    p {
      color: var(--dark-blue);
      font-size: 18px;
      margin: 0;
      padding: 0;
      font-weight: 300;
    }

    strong {
      color: var(--main-blue);
    }


  }
`