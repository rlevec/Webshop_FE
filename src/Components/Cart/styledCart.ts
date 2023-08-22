import styled from "styled-components";

export const StyledCart = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100vh;

  .cart_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    position: relative;
    height: 100%;
    width: 100%;

    .cart_content-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 100px;
      position: relative;

      @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
        flex-direction: column;
        padding-top: 250px;
      }

      @media (max-width: 576px) and (orientation: portrait) {
        flex-direction: column;
        padding-top: 235px;
      }

      .transaction_modal-wrapper {
        position: absolute;
        width: 504px;
        height: 504px;
        top: 20vh;
        z-index: 2;

        @media (min-width: 992px) and (max-width: 1440px) {
          top: 75px;
        }

        @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
          top: 325px;
        }

        @media (max-width: 576px) and (orientation: portrait) {
          top: 13vh;
          height: 1400px;
          width: 100vw;
        }
      }

      .cart_content-container {
        width: fit-content;
        border-bottom: 1px solid var(--main-blue);
        box-shadow: var(--boxshadow-blue);

        .cart_content-columns-container {
          width: 100%;
          display: flex;
          justify-content: start;
          align-items: center;

          .cart_content-column-title {
            font-size: 24px;
            color: var(--main-blue);
            background-color: var(--light-blue);
            font-weight: 600;

            @media (max-width: 576px) and (orientation: portrait) {
              font-size: 14px;
            }

            .title_product-column {
              border-left: 1px solid var(--main-blue);
              border-top: 1px solid var(--main-blue);
              border-bottom: 1px solid var(--main-blue);
              width: 700px;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 10px 0;
              @media (min-width: 992px) and (max-width: 1440px) {
                width: 250px;
              }

              @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
                width: 200px;
              }
              @media (max-width: 576px) and (orientation: portrait) {
                width: 100px;
              }


            }

            .remove_product-column {
              border-right: 1px solid var(--main-blue);
              border-top: 1px solid var(--main-blue);
              border-bottom: 1px solid var(--main-blue);
              width: 125px;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 10px 0;

              @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
                width: 100px;
              }

              @media (max-width: 576px) and (orientation: portrait) {
                width: 60px;
              }
            }

            .image_product-column {
              border-left: 1px solid var(--main-blue);
              border-top: 1px solid var(--main-blue);
              border-bottom: 1px solid var(--main-blue);
              width: 250px;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 10px 0;

              @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
                width: 175px;
              }


              @media (max-width: 576px) and (orientation: portrait) {
                width: 100px;
              }
            }

            .qty_product-column {
              border-left: 1px solid var(--main-blue);
              border-top: 1px solid var(--main-blue);
              border-bottom: 1px solid var(--main-blue);
              width: 125px;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 10px 0;

              @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
                width: 100px;
              }

              @media (max-width: 576px) and (orientation: portrait) {
                width: 60px;
              }
            }

            .price_product-column {
              border: 1px solid var(--main-blue);
              width: 150px;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 10px 0;

              @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
                width: 100px;
              }

              @media (max-width: 576px) and (orientation: portrait) {
                width: 60px;
              }
            }
          }
        }

        .cart_content-products-container {
          width: 100%;
          height: fit-content;
          max-height: 800px;
          display: flex;
          justify-content: flex-start;
          align-items: start;
          flex-direction: column;
          overflow-y: scroll;

          @media (min-width: 992px) and (max-width: 1440px) {
            max-height: 600px;
          }

          @media (max-width: 576px) {
            max-height: 400px;
            height: fit-content;
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


          .cart_content-product-container {
            width: fit-content;
            display: flex;
            justify-content: start;
            align-items: center;
            border: 1px solid var(--main-blue);
            height: 350px;

            @media (max-width: 576px) and (orientation: portrait) {
              height: 150px;
            }

            .cart_content-product-removal {
              width: 125px;
              font-size: 20px;
              height: 350px;
              display: flex;
              justify-content: center;
              align-items: center;
              color: var(--main-blue);
              border-left: 1px solid var(--main-blue);

              @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
                width: 100px;
              }

              @media (max-width: 576px) and (orientation: portrait) {
                width: 60px;
                height: 150px;
              }

              svg {
                width: 30px;
                height: 30px;
                fill: var(--main-blue);
                cursor: pointer;

                @media (max-width: 576px) and (orientation: portrait) {
                  width: 20px;
                  height: 20px;
                }

                &:hover {
                  fill: var(--error-color);
                }
              }
            }

            .cart_content-product-title {
              width: 700px;
              font-size: 20px;
              height: 350px;
              display: flex;
              justify-content: center;
              align-items: center;
              color: var(--main-blue);
              border-right: 1px solid var(--main-blue);
              text-align: center;

              @media (min-width: 992px) and (max-width: 1440px) {
                width: 250px;
              }

              @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
                width: 200px;
              }

              @media (max-width: 576px) and (orientation: portrait) {
                width: 100px;
                height: 150px;
                font-size: 12px;
              }
            }

            .cart_content-product-image-container {
              font-size: 20px;
              height: 350px;
              display: flex;
              justify-content: center;
              align-items: center;
              color: var(--main-blue);
              border-right: 1px solid var(--main-blue);

              @media (max-width: 576px) and (orientation: portrait) {
                width: 100px;
                height: 150px;
              }

              img {
                width: 250px;
                height: 250px;

                @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
                  width: 175px;
                  height: 175px;
                }


                @media (max-width: 576px) and (orientation: portrait) {
                  width: 100px;
                  height: 100px;
                }
              }
            }


            .cart_content-product-qty-container {
              border-right: 1px solid var(--main-blue);
              width: 125px;
              height: 350px;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              gap: 25px;

              @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
                width: 100px;
              }

              @media (max-width: 576px) and (orientation: portrait) {
                width: 60px;
                height: 150px;
              }

              .cart_content-icon {
                width: fit-content;
                height: fit-content;

                svg {
                  width: 30px;
                  height: 30px;
                  cursor: pointer;
                  fill: var(--main-blue);

                  @media (max-width: 576px) and (orientation: portrait) {
                    width: 20px;
                    height: 20px;
                  }

                  &:hover {
                    fill: var(--light-blue);
                  }
                }
              }

              .cart_content-product-qty {
                height: fit-content;
                font-size: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: var(--main-blue);

                @media (max-width: 576px) and (orientation: portrait) {
                  font-size: 12px;
                }
              }
            }

            .cart_content-product-price {
              width: 150px;
              font-size: 20px;
              height: 350px;
              display: flex;
              justify-content: center;
              align-items: center;
              color: var(--main-blue);

              @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
                width: 100px;
              }

              @media (max-width: 576px) and (orientation: portrait) {
                width: 60px;
                font-size: 12px;
                height: 150px;
              }
            }

          }
        }
      }


      .cart_coupon-calculations-container {
        width: fit-content;
        height: 850px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;

        @media (min-width: 992px) and (max-width: 1440px) {
          height: 650px;
        }

        @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
          flex-direction: row;
          justify-content: center;
          gap: 75px;
          width: 100%;
          padding-bottom: 50px;
        }


        @media (max-width: 576px) and (orientation: portrait) {
          height: fit-content;
          gap: 50px;
        }

        .cart_coupon-container {
          box-shadow: var(--boxshadow-blue);
          padding: 20px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 25px;
          height: 200px;

          @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
            width: 275px;
            height: 280px;
          }

          .coupon-title {
            font-size: 20px;
            font-weight: 600;
            color: var(--main-blue);
          }

          .coupon-input-container {
            height: fit-content;
            width: fit-content;
            position: relative;

            input {
              width: 300px;
              height: 20px;
              font-size: 20px;
              border: none;
              text-indent: 30px;
              color: var(--dark-blue);
              border-color: var(--main-blue);
              border-bottom: 2.5px solid var(--main-blue);

              &:focus {
                outline: none;
              }

              ::placeholder {
                color: var(--light-blue);
              }
            }

            .refresh-icon-container {
              width: fit-content;
              height: fit-content;
              cursor: pointer;
              background-color: transparent;
              border: none;
              position: absolute;
              right: 0;
              top: -4px;

              &:not([disabled]) {
                &:hover {
                  opacity: 0.8;
                }
              }


              &:disabled {
                cursor: not-allowed;
                opacity: 0.8;
              }

              svg {
                width: 25px;
                height: 25px;
                fill: var(--main-blue);
              }
            }

            .coupon-icon {
              position: absolute;
              top: -2.5px;

              svg {
                width: 25px;
                height: 25px;
                fill: var(--main-blue);
              }
            }
          }

          .coupon-alert-container {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            text-decoration: underline;

            .coupon-alert-info-text {
              position: absolute;
              font-size: 12px;
              text-align: center;
              top: 27.5px;
              color: var(--main-blue);
            }


            .coupon-alert-info-container {
              width: fit-content;
              height: fit-content;
              transform: translateY(1.5px);

              svg {
                width: 17.5px;
                height: 17.5px;
                fill: var(--main-blue);
              }
            }

            .applied-container {
              color: var(--main-blue);
              cursor: pointer;
              font-weight: 500;
              letter-spacing: 0.75px;
              text-decoration: underline;
              text-decoration-color: var(--main-blue);

              &:hover {
                font-weight: 600;
              }
            }

            .notApplied-container {
              color: var(--error-color);
              cursor: pointer;
              font-weight: 500;
              letter-spacing: 0.75px;
              text-decoration: underline;
              text-decoration-color: var(--error-color);

              &:hover {
                font-weight: 600;
              }
            }
          }
        }

        .cart_calculations-wrapper {
          box-shadow: var(--boxshadow-blue);
          padding: 20px;
          height: fit-content;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;

          @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
            width: 275px;
            height: 280px;
          }

          .home_route-icon {
            position: absolute;
            height: fit-content;
            width: fit-content;
            top: 10px;
            right: 10px;
            cursor: pointer;

            svg {
              width: 25px;
              height: 25px;
              fill: var(--main-blue);

              &:hover {
                fill: var(--light-blue)
              }
            }
          }

          .cart_calculations-container {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: start;
            flex-direction: column;
            gap: 25px;

            .cart_calculations-price-container {
              width: 100%;
              display: flex;
              justify-content: start;
              align-items: center;
              gap: 10px;
              font-size: 20px;

              .price-container {
                width: 115px;
                color: var(--main-blue);
                font-weight: 600;
              }

              .total-price-container {
                color: var(--main-blue);
                font-weight: 300;
              }


              .discount-amount-container {
                color: var(--error-color);
              }
            }

            .cart_calculations-amount-container {
              width: 100%;
              display: flex;
              justify-content: start;
              align-items: center;
              gap: 10px;
              font-size: 20px;
              border-bottom: 2.5px solid var(--main-blue);
              padding-bottom: 5px;

              .price-container {
                width: 115px;
                color: var(--main-blue);
                font-weight: 600;
              }

              .total-amount-container {
                color: var(--main-blue);
                font-weight: 300;
              }
            }

            .purchase_button {
              position: relative;
              height: 50px;
              width: 100%;
              border: none;
              background: var(--main-blue);
              color: var(--common-light);
              font-size: 16px;
              letter-spacing: 2.5px;
              cursor: pointer;
              border-radius: 5px;
              font-weight: 540;
              display: flex;
              justify-content: center;
              align-items: center;

              &:hover {
                opacity: 0.8;
              }
            }

            a {
              width: 100%;
              text-decoration: none;

              .shopping_button {
                position: relative;
                height: 50px;
                width: 100%;
                border: none;
                background: var(--light-blue);
                color: var(--common-light);
                font-size: 16px;
                letter-spacing: 2.5px;
                cursor: pointer;
                border-radius: 5px;
                font-weight: 540;
                display: flex;
                justify-content: center;
                align-items: center;

                &:hover {
                  opacity: 0.8;
                }
              }

            }
          }
        }

      }
    }

  }
`