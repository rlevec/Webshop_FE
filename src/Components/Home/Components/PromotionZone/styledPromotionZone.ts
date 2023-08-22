import styled from "styled-components";

export const StyledPromotionZone = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 100px 0;
  border-bottom: var(--home-border);
  justify-content: center;
  align-items: center;
}

.promotion_zone_wrapper {
  height: 100%;
  width: fit-content;


  .promotion_zone_container {
    width: 100%;
    height: 100%;
    display: grid;
    margin: 0 auto;
    gap: 20px;
    grid-template-areas: 
              "content1 content2 content2 content4"
              "content1 content3 content3 content4";

    @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 50px;
    }

    @media (max-width: 576px) and (orientation: portrait) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 50px;
    }


    .content-1 {
      grid-area: content1;
      width: 90%;

      @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
        width: 600px;
        height: 500px;
      }

      @media (max-width: 576px) and (orientation: portrait) {
        width: 350px;
        height: 350px;
      }
    }

    .content-2 {
      grid-area: content2;
      @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
        width: 600px;
        height: 500px;
      }

      @media (max-width: 576px) and (orientation: portrait) {
        width: 350px;
        height: 350px;
      }
    }

    .content-3 {
      grid-area: content3;
      @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
        width: 600px;
        height: 500px;
      }

      @media (max-width: 576px) and (orientation: portrait) {
        width: 350px;
        height: 350px;
      }
    }

    .content-4 {
      grid-area: content4;
      width: 90%;
      @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
        width: 600px;
        height: 500px;
      }

      @media (max-width: 576px) and (orientation: portrait) {
        width: 350px;
        height: 350px;
      }
    }

    .promotion_zone_image-container {
      position: relative;
      width: 100%;
      cursor: pointer;
      box-shadow: var(--boxshadow-light-secondary);

      &:hover {
        box-shadow: var(--boxshadow-blue);
      }


      .promotion_zone_description-container {
        position: absolute;
        bottom: 10%;
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;

        color: var(--common-light);
        padding: 0 10px 0 10px;
        text-align: center;
        font-size: 32px;
        font-weight: 700;
        text-shadow: 2px 2px var(--main-blue);

        @media (max-width: 576px) and (orientation: portrait) {
          font-size: 20px;
        }
      }

      .image-1 {
        width: 100%;
        height: 100%;

        @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
          width: 600px;
          height: 500px;
        }

        @media (max-width: 576px) and (orientation: portrait) {
          width: 350px;
          height: 350px;
        }
      }

      .image-2 {
        width: 440px;
        height: 100%;

        @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
          width: 600px;
          height: 500px;
        }

        @media (max-width: 576px) and (orientation: portrait) {
          width: 350px;
          height: 350px;
        }
      }

      .image-3 {
        width: 440px;
        height: 100%;

        @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
          width: 600px;
          height: 500px;
        }

        @media (max-width: 576px) and (orientation: portrait) {
          width: 350px;
          height: 350px;
        }

      }

      .image-4 {
        width: 400px;
        height: 100%;

        @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
          width: 600px;
          height: 500px;
        }

        @media (max-width: 576px) and (orientation: portrait) {
          width: 350px;
          height: 350px;
        }
      }

    }
  }
}
`