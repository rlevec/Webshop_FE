import styled from "styled-components";

type StyledHeaderMobileTypes = {
    sidebarActive: boolean
}

export const StyledHeaderMobile = styled.div<StyledHeaderMobileTypes>`
  width: 100vw;
  height: fit-content;
  border-bottom: 1px solid var(--light-blue);
  border-left: 1px solid var(--light-blue);
  border-right: 1px solid var(--light-blue);


  .header_mobile-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    
    .header_mobile-sidebar-wrapper {
      position: absolute;
      top: 100%; 
      right: 0; 
      width: fit-content; 
      height: fit-content;
      z-index: 5;
    }


    .modal {
      position: absolute;
      top: 100%;
      right: 0;
      z-index: 2;
      width: fit-content;

      @media (max-width: 576px) and (orientation: portrait) {
        width: 100vw;
      }

      .search-input-container {
        position: absolute;
        z-index: 5;
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        height: 50px;
        padding-left: 10px;
        
        @media (max-width: 576px) and (orientation: portrait) {
          width: 100vw;
        }
        
        
        input {
          width: 85%;
          padding-left: 10px;
          border: none;
          border-bottom: 2.5px solid var(--main-blue);
          font-size: 20px;
          color: var(--dark-blue);
          
          ::placeholder {
            color: var(--light-blue);
          }
          
          &:focus {
            outline: none;
          }

          .close-icon-container {
            position: absolute;

            svg {
              width: 25px;
              height: 25px;
            }
          }
        }
      }
    }


    .header_mobile-logo-container {
      width: fit-content;
      height: fit-content;

      img {
        width: 150px;
        height: 75px;

        @media (max-width: 576px) and (orientation: portrait) {
          width: 100px;
          height: 50px;
        }
      }
    }

    .header_mobile-content-container {
      width: fit-content;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      padding: 10px;

      @media (max-width: 576px) and (orientation: portrait) {
       gap: 10px;
      }

      .header_mobile-search-icon-container {
        height: fit-content;
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;

        svg {
          width: 25px;
          height: 25px;
          fill: var(--main-blue);

          @media (max-width: 576px) and (orientation: portrait) {
            width: 15px;
            height: 15px;
          }
        }
      }

      .header_mobile-profile-icon-container {
        height: fit-content;
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;

        svg {
          width: 25px;
          height: 25px;
          fill: var(--main-blue);

          @media (max-width: 576px) and (orientation: portrait) {
            width: 15px;
            height: 15px;
          }
        }
      }

      .header_mobile-wishlist-icon-container {
        height: fit-content;
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;

        svg {
          width: 25px;
          height: 25px;
          fill: var(--main-blue);

          @media (max-width: 576px) and (orientation: portrait) {
            width: 15px;
            height: 15px;
          }
        }
      }

      .header_mobile-cart-icon-container {
        height: fit-content;
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;

        svg {
          width: 25px;
          height: 25px;
          fill: var(--main-blue);

          @media (max-width: 576px) and (orientation: portrait) {
            width: 15px;
            height: 15px;
          }
        }
      }

      .header_mobile-hamburger-icon-container {
        height: fit-content;
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        background-color: var(--main-blue);

        svg {
          width: 25px;
          height: 25px;
          fill: var(--light-blue);
          transform: ${props => props?.sidebarActive && "rotate(90deg)"};

          @media (max-width: 576px) and (orientation: portrait) {
            width: 15px;
            height: 15px;
          }
        }
      }

    }
  }
`