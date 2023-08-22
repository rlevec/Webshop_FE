import styled, {StyledComponent} from "styled-components";

type StyledCardsTypes = {
    singleContent: boolean
}

export const StyledCards = styled.div<StyledCardsTypes>`
  width: ${props => props?.singleContent ? "50%" : "100%"}
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .cards_wrapper {
    width: ${props => props?.singleContent ? "580px" : "100%"};
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .cards_container {
      width: ${props => props?.singleContent ? "580px" : "fit-content"};
      height: 100%;
      display: grid;
      grid-template-columns: repeat(2, auto);
      gap: 175px;

      @media (min-width: 992px) and (max-width: 1440px) {
        gap: 75px;
      }

      @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
       display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        flex-direction: column;
        gap: 50px;
      }

      @media (max-width: 576px) and (orientation: portrait) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        flex-direction: column;
        gap: 50px;
      }


      .card_container {
        text-decoration: none;
        width: 580px;
        height: 580px;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        gap: 5px;
        box-shadow: var(--boxshadow-light-secondary);

        @media (max-width: 576px) and (orientation: portrait) {
          width: 375px;
          height: 450px;
        }

        &:hover {
          box-shadow: var(--boxshadow-blue);
        }

        .cards_image-container {
          width: 580px;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: var(--common-cursor);

          @media (max-width: 576px) and (orientation: portrait) {
            width: 375px;
          }

          img {
            width: 580px;
            height: 335px;

            @media (max-width: 576px) and (orientation: portrait) {
              width: 375px;
              height: 225px;
            }
          }
        }

        .cards_title_container {
          width: 560px;
          height: 75px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;

          @media (max-width: 576px) and (orientation: portrait) {
            width: 100%;
          }
          

          .cards_title {
            width: fit-content;
            height: fit-content;
            font-size: 28px;
            font-weight: 600;
            cursor: var(--common-cursor);
            color: var(--main-blue);

            @media (max-width: 576px) and (orientation: portrait) {
              font-size: 14px;
            }
          }
        }

        .cards_description-container {
          color: var(--main-blue);
          width: 560px;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          font-size: 16px;
          font-weight: 300;
          padding-top: 10px;

          @media (max-width: 576px) and (orientation: portrait) {
            width: 95%;
            font-size: 11px;
          }
        }

      }
    }

  }
`