import styled from "styled-components";

export const StyledWishlistPopulated = styled.div`
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

  @media (max-width: 576px) and (orientation: portrait) {
    width: 100vw;
  }


  .wishlist_wrapper {
    overflow: auto;
    width: 100%;
    height: 85%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    text-align: center;
    overscroll-behavior: contain;
    overflow-x: hidden;

    @media (max-width: 576px) and (orientation: portrait) {
      padding: 0 1px;
    }

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

    .close-icon-container {
      width: fit-content;
      height: fit-content;
      transform: translate(230px, 4px);

      @media (max-width: 576px) and (orientation: portrait) {
        transform: translate(45.5vw, 4px);
      }

      svg {
        width: 40px;
        height: 40px;
        fill: var(--main-blue);
      }
    }

    .wishlist_products-wrapper {
      width: 100%;
      height: fit-content;
      border-bottom: 1px solid var(--light-blue);
      display: flex;
      justify-content: center;
      align-items: center;

      &:first-child {
        border-bottom: none;
      }

      &:nth-child(2) {
        border-top: 1px solid var(--light-blue);
      }

      .wishlist_products-container {
        width: 90%;
        height: 225px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10px;

        .wishlist_products-title {
          font-size: 18px;
          font-weight: 500;
          color: var(--main-blue);
        }

        .wisthlist_products-decs-icon-container {
          display: flex;
          width: fit-content;
          justify-content: center;
          align-items: center;
          gap: 25px;

          .wishlist_img-container {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
              width: 150px;
              height: 150px;
            }
            
          }
          
          .wishlist_move_to-item-icon-wrapper {
            height: 135px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-left: 10px; 
            transform: translateX(-30px);

            .wishlist_move_to-item-icon-container {
              width: fit-content;
              height: fit-content;

              svg {
                cursor: pointer;
                fill: var(--main-blue);
                height: 30px;
                width: 30px;

                &:hover {
                  fill: var(--light-blue);
                }
              }
            }
          }

          .wishlist_remove-item-icon-wrapper {
            transform: translateX(-40px);
            border-left: 2.5px solid var(--main-blue);
            height: 135px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-left: 10px;

            .wishlist_remove-item-icon-container {
              width: fit-content;
              height: fit-content;

              svg {
                cursor: pointer;
                fill: var(--main-blue);
                height: 30px;
                width: 30px;

                &:hover {
                  fill: var(--light-blue);
                }
              }
            }
          }
        }


      }
    }

  }
`