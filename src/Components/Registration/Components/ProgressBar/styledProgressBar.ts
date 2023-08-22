import styled from "styled-components";

export const StyledProgressBar = styled.div`
    position: absolute;
    top: -60px;

  @media (min-width: 992px) and (max-width: 1440px) {
   top: -52.5px;
  }

  @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
    left: 20%;
  }


  .bar_wrapper {
      width: 300px;
      height: fit-content;

      .bar_container {
        width: 100%;
        height: 20px;
        background-color: var(--light-blue);
        border-radius: 5px;
        font-weight: 700;

        .active-1 {
          width: 20%;
          background-color: var(--main-blue);
          height: 20px;
          border-bottom-left-radius: 5px;
          border-top-left-radius: 5px;

          .bar_percent {
            width: 100%;
            height: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--common-light);
          }
        }

        .active-2 {
          width: 40%;
          background-color: var(--main-blue);
          height: 20px;
          border-bottom-left-radius: 5px;
          border-top-left-radius: 5px;

          .bar_percent {
            width: 100%;
            height: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--common-light);
          }
        }

        .active-3 {
          width: 60%;
          background-color: var(--main-blue);
          height: 20px;
          border-bottom-left-radius: 5px;
          border-top-left-radius: 5px;

          .bar_percent {
            width: 100%;
            height: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--common-light);
          }
        }

        .active-4 {
          width: 80%;
          background-color: var(--main-blue);
          height: 20px;
          border-bottom-left-radius: 5px;
          border-top-left-radius: 5px;

          .bar_percent {
            width: 100%;
            height: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--common-light);
          }
        }

        .active-5 {
          width: 100%;
          background-color: var(--main-blue);
          height: 20px;
          border-radius: 5px;

          .bar_percent {
            width: 100%;
            height: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--common-light);
          }
        }
      }
    }
`