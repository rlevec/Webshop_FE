import styled from "styled-components"

export const StyledSubContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--lightest-blue);
  color: var(--dark-blue);

  .blog-wrapper {
    width: 50%;
    height: fit-content;
    background: var(--common-light);
    padding: 20px;

    @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
      width: 100%;
    }

    ul {
      display: flex;
      justify-content: center;
      align-items: start;
      flex-direction: column;
      gap: 10px;
      color: var(--main-blue);
      font-weight: 500;
    }

    h3 {
      color: var(--main-blue);
      font-size: 18px;
      font-weight: 700;
    }

    h2 {
      color: var(--main-blue);
      font-size: 36px;
    }

    h4 {
      border: 5px solid var(--main-blue);
      text-align: center;
      color: var(--light-blue);
      padding: 30px 15px;
      font-size: 18px;
      margin: 0;
      font-weight: 300;
    }

    p {
      color: var(--dark-blue);
      font-size: 18px;
      font-weight: 300;
    }

    img {
      width: 100%;
    }

    h1 {
      color: var(--main-blue);
    }
  }
`