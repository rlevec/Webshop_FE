import styled from "styled-components";

export const StyledLocation = styled.div`
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

  .location_wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    
    
    .location_title-container {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      
      .location_title {
        font-size: var(--font-size-title-monitor);
        color: var(--main-blue);
        letter-spacing: var(--letter-spacing-title);
        margin: var(--padding-zero);
        padding: var(--margin-zero);
        font-weight: 700;
      }
    }
    
    .location_content-icons-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      gap: 50px;
      
      .location_icon-container {
        width: 50px;
        height: 50px;
        
        svg {
          fill: var(--main-blue);
          width: fit-content;
          height: fit-content;
          cursor: var(--common-cursor);
        }
      }
      
      .location_content-container {
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;

        .location_content {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          gap: 20px;
          font-size: 20px;

          .location_content-city {
            width: 100px;
            cursor: var(--common-cursor);
            color: var(--main-blue);
            text-decoration: none;

            &:hover {
              color: var(--light-blue);
            }
          }

          .location_content-stores {
            font-weight: 600;
            color: var(--light-blue);
          }
        }
      }
    }
    
  }
`