import styled from "styled-components";

export const StyledBrands = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--lightest-blue);
  position: relative;

  .brands_wrapper {
    width: 50%;
    height: fit-content;
    background: var(--common-light);
    padding: 20px;

    @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
      width: 100%;
    }

    @media (max-width: 576px) and (orientation: portrait) {
      width: 100%;
    }
    
    .brands_image-container {
      padding-bottom: 40px;
      padding-top: 40px;
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;

      @media (min-width: 992px) and (max-width: 1440px) {
        max-width: 100%;
        overflow-x: scroll;
        justify-content: flex-start;
      }
      
      @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
        flex-direction: column;
      }

      @media (max-width: 576px) and (orientation: portrait) {
        flex-direction: column;
      }
      
      
      .brands_single-img-container {
        @media (min-width: 992px) and (max-width: 1440px) {
          &:first-child {
            padding-left: 25px;
          }

          &:last-child {
            padding-right: 25px;
          }
        }


        img {
          width: 150px;
          height: 75px;
          padding: 10px;

          @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
            width: 250px;
            height: 100px;
          }
          
          &:hover {
            border-radius: 5px;
            box-shadow: var(--boxshadow-blue);
            cursor: pointer;
          }
        }
      }
    }
    
    .brands_letters-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      padding: 40px 0 40px 0;
      border-bottom: 1px solid var(--light-blue);
      border-top: 1px solid var(--light-blue);

      @media (min-width: 992px) and (max-width: 1440px) {
        gap: 17.5px;
      }

      @media (max-width: 576px) and (orientation: portrait) {
        display: grid;
        grid-template-columns: repeat(11, 1fr);
      }
      
      .brands_single-letter-container {
        font-size: 24px;
        color: var(--main-blue);
        cursor: pointer;
        
        &:hover {
          color: var(--light-blue);
        }
      }
    }

    .brands_content-container {
      
      a {
        
      }
      
      .brands_letter-content-container {
        position: relative;
        border-bottom: 1px solid var(--light-blue);
        padding: 40px;

        &:last-child {
          border-bottom: none;
        }
        
        .brands_single-letter-content {
          font-size: 42px;
          height: 100%;
          display: flex;
          justify-content: start;
          align-items: center;
          color: var(--main-blue);
        }
        
        a {
          text-decoration: none;
          color: var(--main-blue);
        }
        
        .brands_title-qty-container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 10px;
          
          .brands_single-title-qty-container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 75px;
            padding: 5px;
            
            &:hover {
              background-color: var(--light-blue);
              color: var(--main-blue);
              cursor: pointer;
            }
            
            .brands_title {
              width: 200px;
              font-weight: 500;
              font-size: 16px;
              //color: var(--dark-blue);
            }
            
            .brands_quantity {
              width: 20px;
              display: flex;
              justify-content: center;
              
              .quantity {
                font-weight: 300;
              }
            }
          }
        }
        
      }
    }
  }

`