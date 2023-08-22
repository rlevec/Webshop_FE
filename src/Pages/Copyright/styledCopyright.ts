import styled from "styled-components";

type StyledCopyrightPropTypes = {
    isNonDesktop: boolean
}

export const StyledCopyright = styled.div<StyledCopyrightPropTypes>`
  width: 100vw;
  height: 100vh;
  background-color: var(--lightest-blue);
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;

  .copyright_wrapper {
    width: ${props => props?.isNonDesktop ? "100%" : "500px"};
    height: ${props => props?.isNonDesktop ? "100%" : "500px"};
    box-shadow: var(--boxshadow-blue);
    background-color: var(--common-light);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    padding: 20px;

    .copyright_title {
      width: 100%;
      height: fit-content;
      font-size: 36px;
      color: var(--main-blue);
      font-weight: 600;
      letter-spacing: 1px;
      text-align: center;

      @media (max-width: 576px) and (orientation: portrait) {
        font-size: 30px;
      }
    }

    .copyright_content {
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      gap: 15px;
      color: var(--dark-blue);

      
      a {
        color: var(--main-blue);
        font-weight: 600;
        text-decoration: underline;
        cursor: pointer;
      }
      
      span {
        color: red;
        font-size: 28px;
      }
    }

    button {
      height: 50px;
      width: 200px;
      font-size: var(--button-font-size);
      border: none;
      border-radius: var(--button-border-radius);
      cursor: var(--common-cursor);
      background-color: var(--main-blue);
      color: var(--common-light);

      &:hover {
        background-color: var(--light-blue);
        color: var(--main-blue);
      }
    }
  }
`