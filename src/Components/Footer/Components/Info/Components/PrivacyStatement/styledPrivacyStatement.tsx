import styled from "styled-components"

export const StyledPrivacyStatement = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--lightest-blue);
  color: var(--dark-blue);
  position: relative;

  .privacy-statement-wrapper {
    width: 100%;
    height: fit-content;
    background: var(--common-light);

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
`