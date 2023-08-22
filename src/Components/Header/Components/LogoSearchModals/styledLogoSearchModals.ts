import styled from "styled-components";

export const StyledLogoSearchModals = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: var(--home-border);


  .header_placeholder-container {
    display: none;
    width: 0;
  }

  .header_logo-container {
    width: calc(100% / 3.0);
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: var(--home-border);
    border-left: var(--home-border);
    

    a {
      height: 100px;

      img {
        height: 100px;
        width: 200px;
        cursor: var(--common-cursor);
      }
    }
  }

  .header_search-bar-container {
    width: calc(100% / 3.0);
    display: flex;
    justify-content: center;
    align-items: center;

    .header_search-bar-wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      position: relative;


      input {
        width: 500px;
        height: 27.5px;
        border: var(--border-none-input);
        border-bottom: var(--border-bottom-input);
        border-color: var(--main-blue);
        font-size: var(--font-size-title-desktop);
        text-indent: 30px;

        @media (min-width: 992px) and (max-width: 1440px) {
          width: 400px;
        }


        ::-webkit-search-cancel-button {
          cursor: var(--common-cursor);
        }

        ::placeholder {
          color: var(--light-blue);
        }

        &:focus {
          outline: none;
        }
      }

      .inputs_field-icons {
        position: absolute;
        top: 0;
        left: 75px;
        background-color: white;

        @media (min-width: 992px) and (max-width: 1440px) {
          left: 40px;
        }


        /* Extra small devices (phones, 600px and down) */
        @media only screen and (max-width: 600px) {
        }

        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) {
        }

        /* Medium devices (landscape tablets, 768px and up) */
        @media only screen and (min-width: 768px) {
        }

        /* Large devices (laptops/desktops, 992px and up)*/
        @media only screen and (min-width: 992px) {
        }

        /* Large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1200px) {
        }

        /* Extra large full hd resolution devices (large laptops and desktops, 1920px and up) */
        @media (min-width: 1920px) {
        }

        /* Extra large 2K resolution devices (large laptops and desktops, 2560px and up) */
        @media (min-width: 2560px) {
        }

        /* Extra large 4k resolution devices (large laptops and desktops, 3840px and up) */
        @media (min-width: 3840px) {
        }


        svg {
          width: 20px;
          height: 20px;
          fill: var(--main-blue);
        }
      }

      .search_modal {
        position: absolute;
        z-index: 2;
        top: 27.5px;
        width: 500px;
        height: fit-content;
        max-height: 800px;

        @media (min-width: 992px) and (max-width: 1440px) {
          width: 400px;
          max-height: 600px;
        }
      }

      .header_search-bar-icon {
        position: absolute;
        top: 35px;
        background-color: white;
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

  .header_modal-content-container {
    width: calc(33.3333%);

    display: flex;
    justify-content: start;
    align-items: center;


    .header_single-modal-content-container {
      width: 100px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-left: var(--home-border);
      border-right: var(--home-border);
      cursor: pointer;

      &:hover {
        background-color: var(--light-blue);
      }

      &:first-child {
        border-right: none;
      }

      &:nth-child(2) {
        border-right: none;
      }

      &:nth-child(3) {
        border-right: none;
      }

      &:nth-child(4) {
        border-right: none;
      }

      &:nth-child(5) {
        border-right: var(--home-border);
      }


      .header_modal-content {
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          width: 25px;
          height: 25px;
          fill: var(--main-blue)
        }
      }
    }
  }

  .header_active-modal {
    position: absolute;
    top: 100px;
    right: 129px;

    @media (min-width: 992px) and (max-width: 1440px) {
      width: 400px;
      max-height: 600px;
      right: 78px;
    }
  }

`