import styled from "styled-components";

export const StyledDiscounts = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--lightest-blue);

  .discounts_wrapper {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--common-light);
    gap: 50px;
    padding: 50px 0;
    position: relative;

    @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
      width: 100%;
    }

    @media (max-width: 576px) and (orientation: portrait) {
      width: 100%;
    }
    
    .styledComponent-basicNavLinks {
      right: 20px;
    }
    
    .discounts_header-container {
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: start;
      flex-direction: column;
      gap: 10px;

      div:nth-child(7) {
        padding-top: 20px;
      }

      div:nth-child(8) {
        padding-bottom: 20px;
      }

      .discounts_header-title {
        font-size: 36px;
        font-weight: 600;
        color: var(--dark-blue);
      }
      
      .discounts_header-paragraph {
        font-size: 18px;
        font-weight: 400;
        color: var(--dark-blue);
        
        .discounts_header-span-one {
          color: var(--main-blue);
          font-weight: 600;
        }
      }
      
      .discounts_header-warning {
        font-size: 16px;
        font-weight: 400;
        color: var(--dark-blue);
        
        .discount_header-warning-span-one {
          color: var(--error-color);
          font-size: 18px;
          font-weight: 600;
        }
      }
      
      .discounts_header-underline {
        text-decoration: underline;
        text-decoration-color: var(--light-blue);
        font-size: 18px;
        color: var(--main-blue);
      }
    }

    .table_container {
      width: 80%;
      box-shadow: var(--boxshadow-blue);
      border-collapse: collapse;


      .table_columns-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--main-blue);
        color: var(--common-light);

        .table_single-column-container {
          border-bottom: 2px solid var(--light-blue);
          border-left: 2.5px solid var(--light-blue);
          width: 25%;
          height: 75px;
          text-align: center;
          padding: 10px;
          font-size: 20px;
          font-weight: 600;
          position: relative;
          letter-spacing: 0.5px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;

          @media (max-width: 576px) and (orientation: portrait) {
           font-size: 12px;
          }


          &:first-child {
            border-left: none;
          }

          .table_single-column-carret-icon {
            position: absolute;
            left: 135px;
            top: 35px;

            @media (min-width: 992px) and (max-width: 1440px) {
              left: 110px;
            }

            @media (max-width: 576px) and (orientation: portrait) {
             left: 37.5%;
              top: 60%;
            }
            
            svg {
              fill: var(--common-light);
              width: 25px;
              height: 25px;
              cursor: pointer;

              @media (max-width: 576px) and (orientation: portrait) {
                width: 20px;
                height: 20px;
              }

              &:hover {
                fill: var(--light-blue);
              }
            }
          }

        }
      }

      .table_rows-container {
        width: 100%;

        .table_single-row-container {
          border-bottom: 2.5px solid var(--light-blue);
          width: 100%;
          display: flex;
          text-decoration: none;
          color: var(--main-blue);

          &:last-child {
            border-bottom: none;
          }

          &:hover {
            background-color: var(--main-blue);
            color: var(--light-blue);
            cursor: pointer;
          }

          .table_single-row-content {
            width: 275px;
            border-left: 2.5px solid var(--light-blue);
            padding: 10px;
            font-size: 16px;
            font-weight: 300;
            text-align: center;

            @media (max-width: 576px) and (orientation: portrait) {
              font-size: 11px;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            &:first-child {
              border-left: none;
            }
          }
        }
      }
    }
  }
`