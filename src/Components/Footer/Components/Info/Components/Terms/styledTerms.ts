import styled from "styled-components";

export const StyledTerms = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--lightest-blue);
  color: var(--dark-blue);
  position: relative;

  .terms-wrapper {
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


    a {
      color: var(--main-blue);
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


    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

  }
`