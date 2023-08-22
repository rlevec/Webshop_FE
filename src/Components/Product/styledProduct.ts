import styled from "styled-components";

export const StyledProduct = styled.div`
  width: 100%;
  height: fit-content;

  .product_wrapper {
    padding: 100px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    flex-direction: column;
    gap: 25px;

    .product_info-container {
      width: 1225px;
      box-shadow: var(--boxshadow-light-secondary);
      display: flex;
      justify-content: center;
      align-items: start;
      flex-direction: column;

    }

    .product_image-content-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 25px;

      @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
        flex-direction: column;
      }

      @media (max-width: 576px) and (orientation: portrait) {
        flex-direction: column;
      }

      .product_image-container {
        width: 600px;
        height: 650px;

        @media (max-width: 576px) and (orientation: portrait) {
          width: 350px;
          height: 350px;
        }


        &:hover {
          cursor: pointer;
          box-shadow: var(--boxshadow-blue);
        }

        img {
          height: 650px;
          width: 600px;
          box-shadow: var(--boxshadow-light-secondary);

          @media (max-width: 576px) and (orientation: portrait) {
            width: 350px;
            height: 350px;
          }
        }
      }


      .product_content-container {
        width: 600px;
        box-shadow: var(--boxshadow-light-secondary);
        height: 650px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 30px;
        position: relative;

        @media (max-width: 576px) and (orientation: portrait) {
          width: 350px;
          height: 550px;
          gap: 10px;
        }

        .added {
          position: absolute;
          text-align: center;
          color: var(--success-color);
          top: 5px;
          font-size: 16px;
        }

        .exists {
          position: absolute;
          text-align: center;
          color: var(--error-color);
          top: 5px;
          font-size: 16px;
        }

        .product_categories-container {
          width: 100%;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;

          .product_category-title {
            font-size: 16px;
            font-weight: 500;
            color: var(--main-blue);
            cursor: pointer;
            text-decoration: underline;
            text-decoration-color: var(--main-blue);
            

            &:hover {
              color: var(--light-blue);
              text-decoration-color: var(--light-blue);
            }
          }

          span {
            font-size: 16px;
            font-weight: 500;
            color: var(--dark-blue);
          }

          .product_subCategory-title {
            font-size: 16px;
            font-weight: 500;
            color: var(--main-blue);
            cursor: pointer;
            text-decoration: underline;
            text-decoration-color: var(--main-blue);

            &:hover {
              color: var(--light-blue);
              text-decoration-color: var(--light-blue);
            }
          }

        }

        .product_title-container {
          font-size: 26px;
          font-weight: 500;
          width: 90%;
          color: var(--main-blue);
          text-align: center;

          @media (max-width: 576px) and (orientation: portrait) {
            font-size: 20px;
          }
        }

        .product_desc-container {
          font-size: 18px;
          font-weight: 400;
          width: 90%;
          padding: 0 10px;
          color: var(--dark-blue);
          text-align: center;
          
          
          .product_desc {
            font-size: 16px;

            @media (max-width: 576px) and (orientation: portrait) {
              font-size: 12px;
            }
          }
        }

        
        .price_purchase-container {
          display: flex;
          width: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
          
          .cost-container {
            color: var(--main-blue);
            font-size: 18px;
            font-weight: 500;
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

              svg {
                width: 25px;
                height: 25px;
                fill: var(--main-blue);

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
              width: 150px;
              
           

              .icon-container {
                width: 25px;
                height: 25px;
                cursor: pointer;

                svg {
                  width: 25px;
                  height: 25px;
                  fill: var(--main-blue);


                  &:hover {
                    fill: var(--light-blue);
                  }
                }
              }

              .quantity-container {
                font-size: 20px;
                font-weight: 500;
                color: var(--dark-blue);
                width: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
          } 
        }

        .product_delivery-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;

          @media (max-width: 576px) and (orientation: portrait) {
            font-size: 14px;
          }


          .paragraphs-container {
            .paragraph-one {
              font-weight: 600;
              color: var(--main-blue)
            }

            .paragraph-two {
              font-weight: 300;
              color: var(--main-blue)
            }

          }

          .icon-container {
            width: 25px;
            height: 25px;

            svg {
              width: 25px;
              height: 25px;
              fill: var(--main-blue);
            }
          }
        }
      }
    }
  }
`