import styled from "styled-components";

export const StyledProductsCategorized = styled.div`
  width: 100%;
  height: fit-content;
  padding: 100px 0 100px 0;
  border-bottom: var(--home-border);

  .products-categorized_wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 100px;
    
    a {
      text-decoration: none;
      button {
        position: relative;
        height: 50px;
        width: 200px;
        border: var(--button-sign-in-border);
        background: var(--main-blue);
        color: var(--common-light);
        font-size: var(--button-font-size);
        letter-spacing: var(--letter-spacing-title);
        cursor: var(--common-cursor);
        border-radius: var(--button-border-radius);
        font-weight: 540;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        text-decoration: none;

        &:hover {
          opacity: var(--common-opacity);
        }

        svg {
          width: 20px;
          height: 20px;
          fill: white;
        }
      }
      
    }


    .products-categorized_container {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;


      .products-categorized_icon-container {
        svg {
          width: 50px;
          height: 50px;
          fill: var(--main-blue);
          cursor: var(--common-cursor);

          &:hover {
            fill: var(--light-blue);
          }
        }
      }

      .products-categorized_content-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 75px;

        @media (min-width: 992px) and (max-width: 1440px) {
         gap: 40px;
        }
        
        

        .products-categorized_card-container {
          box-shadow: var(--boxshadow-light-secondary);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 250px;
          height: 400px;
          text-decoration: none;
          position: relative;

          @media (min-width: 992px) and (max-width: 1440px) {
            width: 225px;
            height: 350px;
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


          &:hover {
            box-shadow: var(--boxshadow-blue);
          }

          .products-categorized_image-container {
            height: fit-content;
            width: fit-content;
            display: flex;
            justify-content: center;
            align-items: center;


            img {
              cursor: var(--common-cursor);
              aspect-ratio: 1/1;
              width: 200px;

              @media (min-width: 992px) and (max-width: 1440px) {
                width: 175px;
              }
            }
          }
        }

        .products-categorized_title-container {
          font-size: 15px;
          display: flex;
          justify-content: center;
          align-items: start;
          width: 90%;
          height: 50px;
          color: var(--main-blue);
          font-weight: 500;
          cursor: var(--common-cursor);
          text-decoration: none;

          &:hover {
            color: var(--light-blue);
          }

          .products-categorized_title {
            text-align: center;

          }
        }

        .products-categorized_price-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 50px;
          gap: 5px;
          color: var(--main-blue);
          font-size: 18px;
          font-weight: 500;

          .discount-active {
            text-decoration-line: line-through;
            text-decoration-color: var(--dark-blue);
            text-decoration-thickness: 2px;
          }

          .products-categorized_price {

          }

          .products-categorized_discount-price-container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            gap: 5px;
          }

        }

        .products-categorized_quantity-container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          gap: 10px;

          .products-categorized_icon-container {

            svg {
              width: 25px;
              height: 25px;
            }
          }

          .products-categorized_content-container {
            height: fit-content;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
            box-shadow: var(--boxshadow-light-secondary);
            padding: 5px 10px;
            width: 100px;

            .products-categorized_purchase-container {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;

              .products-categorized_purchase {
                font-size: 20px;
                font-weight: 500;
                color: var(--dark-blue);
                width: 20px;
                height: 20px;

                .products-categorized_purchase-amount {
                  display: flex;
                  height: 100%;
                  width: 100%;
                  justify-content: center;
                  align-items: center;
                }
              }
            }

            .products-categorized_icon-container {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;

              svg {
                width: 25px;
                height: 25px;
              }
            }
          }

        }

      }
    }

    .products-categorized_buttons {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
    }

  }
`