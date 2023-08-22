import styled from "styled-components";

export const StyledGeneralInfo = styled.div`
  width: 100%;
  height: fit-content;
  border-bottom: var(--home-border);

  .info_wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 30px 0 30px 0;
    gap: 75px;

    @media (max-width: 576px) and (orientation: portrait) {
      flex-direction: column;
      gap: 20px;
      font-size: 12px;
    }
    
    @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
      gap: 25px;
    }



    .info-title-container {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 75px 0 25px 0;
      gap: 60px;

      .title {
        font-size: 36px;
        font-weight: 600;
        letter-spacing: var(--letter-spacing-title);
        color: var(--dark-blue);
      }
      
      svg {
        width: 75px;
        height: 75px;
        fill: var(--main-blue);
      }
    }
    
    
    
    .info_container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 220px;

      @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
        width: fit-content;
      }


      .info_content {
        text-align: center;
        color: var(--main-blue);
        font-weight: 400;
        cursor: var(--common-cursor);
        text-decoration: none;

        @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
          font-size: 12px;
        }


        &:hover {
          color: var(--light-blue);
        }
      }
    }
  }
`