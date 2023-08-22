import styled from "styled-components";

export const StyledLocations = styled.div`
  width: 100%;
  height: fit-content;
  border-bottom: var(--home-border);
  display: flex;
  justify-content: center;
  align-items: center;


  .locations_wrapper {
    padding: 75px 0;
    width: 60%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 60px;

    .locations_icon-container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        width: 75px;
        height: 75px;
        fill: var(--main-blue);
      }
    }

    .locations_title-container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .locations_title {
        font-size: 36px;
        font-weight: 600;
        letter-spacing: var(--letter-spacing-title);
        color: var(--dark-blue);

      }
    }


    .locations_content-arrow-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      gap: 20px;


      @media (min-width: 992px) and (max-width: 1440px) {
        gap: 15px;
      }

      .locations_arrow-container {
        svg {
          width: 75px;
          height: 75px;
          fill: var(--main-blue);
          cursor: var(--common-cursor);

          @media (max-width: 576px) and (orientation: portrait) {
            width: 50px;
            height: 50px;
          }
          
          &:hover {
            fill: var(--light-blue);
          }
        }
      }

      .locations_content-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 40px;


        .locations_container {
          padding: 10px;
          width: 200px;
          height: 250px;
          box-shadow: var(--boxshadow-blue);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 50px;
          background-color: var(--common-light);
          cursor: var(--common-cursor);
          text-decoration: none;


          &:hover {
            background-color: var(--light-blue);
          }

          svg {
            width: 75px;
            height: 75px;
            fill: var(--main-blue);

          }

          .locations_title-date-container {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 25px;

            .locations_title {
              font-size: 18px;
              color: var(--dark-blue);
              font-weight: 600;
            }

            .locations_date {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: row;
              gap: 5px;
              font-size: 18px;
            }
          }

        }
      }
    }


  }
`