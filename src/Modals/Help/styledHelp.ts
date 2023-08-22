import styled from "styled-components";

export const StyledHelp = styled.div`
  width: 504px;
  height: 504px;
  box-shadow: var(--boxshadow-blue);
  background-color: var(--common-light);
  position: relative;
  z-index: 2;

  @media (min-width: 992px) and (max-width: 1440px) {
    width: 480px;
    height: 480px
  }
  
  .help_container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;

    .help_title-container {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;

      .help_title {
        font-size: var(--font-size-title-monitor);
        color: var(--main-blue);
        letter-spacing: var(--letter-spacing-title);
        margin: var(--margin-zero);
        padding: var(--padding-zero);
        font-weight: 700;
      }
    }

    .help_phone-container {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;

      .help_phone {
        font-size: 28px;
        cursor: var(--common-cursor);
        color: var(--light-blue);
      }
    }

    .help_content-container {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: start;
      flex-direction: column;
      gap: 10px;

      .help_content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        cursor: var(--common-cursor);
        text-decoration: none;
        font-size: 18px;

        gap: 10px;
        
        a {
          padding: 0;
          margin: 0;
          height: fit-content;
          display: flex;
          text-decoration: none;
          gap: 10px;
          
          svg {
            width: 25px;
            height: 25px;

            fill: var(--main-blue);
          }
        }

        svg {
          width: 25px;
          height: 25px;

          fill: var(--main-blue);
        }
      }
    }

    .help_social-media-container {
      width: 50%;
      display: flex;
      justify-content: center;
      gap: 10px;
      align-items: center;

      .help_social-content {
        border: 1px solid var(--main-blue);
        border-radius: 5px;
        padding: 20px;
        cursor: var(--common-cursor);

        &:hover {
          background-color: var(--light-blue);
        }

        svg {
          width: 25px;
          height: 25px;
          fill: var(--main-blue);
        }
      }
    }
  }
`