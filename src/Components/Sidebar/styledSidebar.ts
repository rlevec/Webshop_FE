import styled from "styled-components";

export const StyledSidebar = styled.div`
  box-shadow: var(--boxshadow-blue);
  width: 504px;
  min-height: 504px;
  height: fit-content;
  background-color: var(--common-light);

  @media (max-width: 576px) and (orientation: portrait) {
    width: 100vw;
  }

  .sidebar_wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-direction: column;


    .close_icon-container {
      position: absolute;
      width: fit-content;
      height: fit-content;
      top: 4px;
      right: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 4;

      @media (max-width: 576px) and (orientation: portrait) {
        right: -2px;
      }

      svg {
        width: 40px;
        height: 40px;
        fill: var(--main-blue);
      }
    }

    .sidebar_categories-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: start;
      align-items: start;
      flex-direction: column;
      gap: 20px;
      padding-top: 17.5px;

      .subCategory_container {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        gap: 10px;
        margin-top: -7.5px;

        li {
          display: flex;
          justify-content: start;
          align-items: center;
          gap: 10px;

          .subCategory_title {
            width: fit-content;
            color: var(--light-blue);
          }

          .arrow_container {

            svg {
              width: 25px;
              height: 25px;
            }
          }
        }

      }

      .sidebar_element {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 20px;
        position: relative;

        .category-icon {
          width: fit-content;
          height: fit-content;
          padding-left: 10px;

          svg {
            width: 25px;
            height: 25px;
            fill: var(--main-blue);
          }
        }

        .category_title {
          font-size: 18px;
          color: var(--main-blue);
          font-weight: 500;
          width: 200px;
        }


        .arrow_icon-container {

          svg {
            width: 25px;
            height: 25px;
          }
        }

      }
    }

    .brands_wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: start;
      flex-direction: column;
      position: relative;

      .brands_container {
        width: 50%;
        height: fit-content;
        display: flex;
        justify-content: flex-start;
        align-items: start;
        flex-direction: column;
        gap: 10px;
        max-height: 300px;
        overflow-y: scroll;
        overscroll-behavior: contain;

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          box-shadow: var(--boxshadow-blue);
          background-color: var(--light-blue);
        }

        ::-webkit-scrollbar-thumb {
          background-color: var(--main-blue);
        }


        li {
          display: flex;
          justify-content: start;
          align-items: center;
          gap: 10px;

          .brands_title {
            width: fit-content;
            color: var(--light-blue);
          }
        }
      }

      .brand-header {
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 20px;
        padding-top: 22.5px;

        .brands-icon {
          padding-left: 10px;
          width: fit-content;
          height: fit-content;

          svg {
            width: 25px;
            height: 25px;
            fill: var(--main-blue);
          }
        }

        .brands_title {
          font-size: 18px;
          color: var(--main-blue);
          font-weight: 500;
          width: 200px;
        }

        .brands_icon-container {
          height: fit-content;
          width: fit-content;

          svg {
            width: 25px;
            height: 25px;
          }
        }

      }
    }

  }
`