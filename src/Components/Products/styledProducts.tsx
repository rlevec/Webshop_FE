import styled from "styled-components";


type StyledProductsPropTypes = {
    filterDivHeight: number
}
export const StyledProducts = styled.div<StyledProductsPropTypes>`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: start;
  align-items: start;
  padding: 50px 0;
  gap: 17.5px;

  .products_wrapper {
    display: grid;
    height: 100%;
    padding: 20px;
    width: 78%;
    grid-template-columns: repeat(5, 1fr);
    row-gap: 60px;
    max-height: ${props => props?.filterDivHeight ? `${props?.filterDivHeight}px` : "fit-content"};
    overflow-y: scroll;

    @media (min-width: 992px) and (max-width: 1440px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
      grid-template-columns: repeat(2, 1fr);
      width: 70%;
      gap: 20px;
    }

    @media (max-width: 576px) and (orientation: portrait) {
      display: flex;
      flex-direction: column;
      width: 50%;
      overflow-x: hidden;
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

    .product_container {
      box-shadow: var(--boxshadow-light-secondary);
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      flex-direction: column;
      width: 250px;
      height: 400px;
      text-decoration: none;
      position: relative;

      @media (max-width: 576px) and (orientation: portrait) {
        height: 300px;
        width: 175px;
        padding: 20px 0;
      }

      .added {
        position: absolute;
        text-align: center;
        color: var(--success-color);
        top: 5px;
        font-size: 16px;

        @media (max-width: 576px) and (orientation: portrait) {
          font-size: 12px;
        }
      }

      .exists {
        position: absolute;
        text-align: center;
        color: var(--error-color);
        top: 5px;
        font-size: 16px;
        
        @media (max-width: 576px) and (orientation: portrait) {
          font-size: 12px;
        }
      }

      &:hover {
        box-shadow: var(--boxshadow-blue);
      }

      .product_img {
        cursor: var(--common-cursor);
        aspect-ratio: 1 / 1;
        width: 175px;

        @media (max-width: 576px) and (orientation: portrait) {
          width: 100px;
        }
      }

      .product_title {
        width: 90%;
        color: var(--main-blue);
        font-weight: 500;
        cursor: pointer;
        text-align: center;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;

        @media (max-width: 576px) and (orientation: portrait) {
          font-size: 14px;
          height: 50px;
        }
      }

      .product_price {
        width: 100%;
        height: 50px;
        gap: 5px;
        color: var(--main-blue);
        font-size: 18px;
        font-weight: 500;
        text-align: center;

        @media (max-width: 576px) and (orientation: portrait) {
          font-size: 14px;
          height: 35px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 700;
        }
      }

      .products_quantity-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 10px;

        .icon-container {
          width: 25px;
          height: 25px;
          cursor: pointer;

          @media (max-width: 576px) and (orientation: portrait) {
            width: 17.5px;
            height: 17.5px;
          }

          svg {
            width: 25px;
            height: 25px;
            fill: var(--main-blue);

            @media (max-width: 576px) and (orientation: portrait) {
              width: 17.5px;
              height: 17.5px;
            }

            &:hover {
              fill: var(--light-blue);
            }
          }
        }

        .products_quantity-content-container {
          height: fit-content;
          display: flex;
          -webkit-box-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          align-items: center;
          gap: 15px;
          box-shadow: var(--boxshadow-light-secondary);
          padding: 5px 10px;
          width: 100px;

          @media (max-width: 576px) and (orientation: portrait) {
            width: 50px;
            height: fit-content;
            gap: 7.5px;
          }

          .quantity-container {
            font-size: 18px;
            font-weight: 500;
            color: var(--main-blue);
            width: 20px;
          }

          .icon-container {
            width: 25px;
            height: 25px;
            cursor: pointer;

            @media (max-width: 576px) and (orientation: portrait) {
              width: 17.5px;
              height: 17.5px;
            }

            svg {
              width: 25px;
              height: 25px;
              fill: var(--main-blue);

              @media (max-width: 576px) and (orientation: portrait) {
                width: 17.5px;
                height: 17.5px;
              }

              &:hover {
                fill: var(--light-blue);
              }
            }
          }
        }
      }
    }
  }

  .categories_filter-wrapper {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 75px;

    @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
      width: 30%;
    }

    @media (max-width: 576px) and (orientation: portrait) {
      width: 50%;
    }

    .categories_wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-top: 20px;
      gap: 0;

      .categories_title-container {
        display: flex;
        text-indent: 15px;
        font-size: 20px;
        font-weight: 600;
        color: var(--main-blue);
        border: 1px solid var(--main-blue);
        width: 75%;
        padding: 15px;
        margin-left: 32px;
        justify-content: center;
        align-items: start;
        background: linear-gradient(267deg, rgba(0, 40, 120, 1) 0%, rgba(175, 219, 245, 1) 50%, rgba(240, 248, 255, 1) 100%);

      }


      .categories_content {
        width: 75%;
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;

        .hovered {
          background-color: var(--lightest-blue);
        }

        .active {
          background-color: var(--light-blue);
        }

        .categories_single-content-wrapper {
          height: fit-content;
          width: 100%;
          position: relative;

          .svg-icon-container {
            position: absolute;
            top: 12.5px;
            right: -25px;
            cursor: pointer;

            svg {
              width: 25px;
              height: 25px;
              fill: var(--main-blue);
            }
          }

          .categories_single-content {
            width: 100%;
            font-size: 16px;
            font-weight: 400;
            color: var(--main-blue);
            border: 1px solid var(--main-blue);
            padding: 15px;
            cursor: pointer;
          }

          .subCategories_container {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: start;
            flex-direction: column;
            border-left: 1px solid var(--main-blue);
            border-right: 1px solid var(--main-blue);
            padding: 15px;
            gap: 15px;

            &:last-child {
              border-bottom: 1px solid var(--main-blue);
            }

            .subCategories_single-content-container {
              width: 100%;
              height: fit-content;
              display: flex;
              justify-content: space-between;
              align-items: center;

              .subCategories_single-content {
                font-size: 14px;
                cursor: pointer;
                font-weight: 400;
                color: var(--main-blue);
              }

              .active-sub {
                color: var(--light-blue);
              }

              .hovered-sub {
                color: var(--light-blue);
              }

              .subCategories_single-content-amount {
                font-size: 14px;
                font-weight: 600;
                color: var(--main-blue);
              }

              .active-amount-sub {
                color: var(--light-blue);
              }

              .hovered-amount-sub {
                color: var(--light-blue);
              }

            }

          }
        }
      }
    }

    .filter_wrapper {
      width: 100%;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      flex-direction: column;
      gap: 0px;

      .filter_title-container {
        display: flex;
        text-indent: 15px;
        font-size: 20px;
        font-weight: 600;
        color: var(--main-blue);
        border: 1px solid var(--main-blue);
        width: 75%;
        padding: 15px;
        margin-left: 32px;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: start;
        align-items: start;
        background: linear-gradient(267deg, rgb(0, 40, 120) 0%, rgb(175, 219, 245) 50%, rgb(240, 248, 255) 100%);
      }


      .price_title-content-container {
        width: 75%;
        position: relative;

        svg {
          cursor: pointer;
          position: absolute;
          width: 25px;
          height: 25px;
          fill: var(--main-blue);
          top: 12.5px;
          right: -25px;
        }


        .price_title-container {
          width: 100%;
          font-size: 16px;
          font-weight: 400;
          color: var(--main-blue);
          border: 1px solid var(--main-blue);
          padding: 15px;
          cursor: pointer;
        }

        .input_value-container {
          padding: 15px;
          width: 100%;
          border-left: 1px solid var(--main-blue);
          border-right: 1px solid var(--main-blue);
          border-bottom: 1px solid var(--main-blue);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 10px;

          .value-container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5px;
            color: var(--main-blue);
            font-weight: 300;
          }

          input[type="range"] {
            width: 90%;
            cursor: col-resize;
            accent-color: var(--light-blue);

            &:hover {
              accent-color: var(--light-blue);
            }
          }

          input[type="range"]::-webkit-slider-thumb {
            box-shadow: var(--boxshadow-blue);
            height: 25px;
            width: 25px;
            border-radius: 7px;
            background: var(--main-blue);
            cursor: col-resize;
            -webkit-appearance: none;
          }

        }

      }

      .brands_title-content-container {
        width: 75%;
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        position: relative;

        .svg-icon-container {
          position: absolute;
          top: 12.5px;
          right: -25px;
          cursor: pointer;

          svg {
            width: 25px;
            height: 25px;
            fill: var(--main-blue);
          }
        }

        .brands_title-container {
          width: 100%;
          font-size: 16px;
          font-weight: 400;
          color: var(--main-blue);
          border: 1px solid var(--main-blue);
          padding: 15px;
          cursor: pointer;
        }

        .brands_content-container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: start;
          flex-direction: column;
          gap: 10px;
          padding: 15px;
          border-left: 1px solid var(--main-blue);
          border-right: 1px solid var(--main-blue);

          .single_checkbox-label-container {
            padding-left: 10px;
            width: 100%;
            gap: 5px;
            display: flex;
            justify-content: start;
            align-items: center;

            .filter_checkbox {
              width: 25px;
              height: 25px;
              cursor: pointer;
              accent-color: #AFDBF5;
            }

            label {
              font-size: 14px;
              cursor: pointer;
              font-weight: 400;
              color: var(--main-blue);
            }
          }
        }
      }

    }
  }
`