import styled from "styled-components";

export const StyledCartPopulated = styled.div`
  width: 504px;
  height: 504px;
  box-shadow: var(--boxshadow-blue);
  background-color: var(--common-light);
  position: relative;
  z-index: 2;

  @media (min-width: 992px) and (max-width: 1440px) {
    width: 475px;
    height: 480px
  }

  @media (max-width: 576px) and (orientation: portrait) {
    width: 100vw;
  }


  .cart_products-pruchase-finish {
    height: 15%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;


    @media (min-width: 992px) and (max-width: 1440px) {
      height: 20%
    }


    a {
      text-decoration: none;


      @media (min-width: 992px) and (max-width: 1440px) {
        transform: translateY(-10px);
      }
      
      button {
        position: relative;
        height: 50px;
        width: 200px;
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
        gap: 10px;
      } 
    }
  }
  
  .cart_wrapper {
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

    @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
      padding: 2px;
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

    @media (min-width: 992px) and (max-width: 1440px) {
      height: 80%;
      padding: 10px 10px 0 0px;
      overflow-y: scroll;
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
    
    .cart_products-wrapper {
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
      
      .cart_products-container {
        width: 90%;
        height: 225px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        
        
        .cart_products-title {
          font-size: 18px;
          font-weight: 500;
          color: var(--main-blue);
        }
        
        .cart_producs-desc-icon-container {
          display: flex;
          width: fit-content;
          justify-content: center;
          align-items: center;
          gap: 75px;
          
          .cart_img-qty-price-container {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            
            img {
              width: 150px;
              height: 150px;
            }
            
            .cart_qty-price-container {
              display: flex;
              justify-content: center;
              align-items: start;
              flex-direction: column;
              gap: 10px;
              
              .cart_qty-container {
                display: flex;
                gap: 5px;
                
                .cart_qty-paragraph-one {
                  color: var(--main-blue);
                  font-weight: 600;
                }
                
                
                .cart_qty-paragraph-two {
                  font-weight: 300;
                  width: 50px;
                  display: flex;
                  justify-content: start;
                  align-items: center;
                  height: fit-content;
                }
              }
              
              .cart_price-container {
                display: flex;
                gap: 5px;
                
                .cart_price-paragraph-one {
                  color: var(--main-blue);
                  font-weight: 600;
                }

                .cart_price-paragraph-two {
                  font-weight: 300;
                  
                  span {
                    padding-left: 2.5px;
                    color: var(--main-blue);
                  }
                }
              }
            }
          }
          
          .cart_qty-arrows-container {
            height: fit-content;
            width: fit-content;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 10px;
            
            .cart_qty_arrow-icon-container {
              width: fit-content;
              height: fit-content;
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
          }

          .remove_item-icon-wrapper {
            transform: translateX(-55px);
            border-left: 2.5px solid var(--main-blue);
            height: 135px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-left: 10px;
            
            .remove_item-icon-container {
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