import styled from "styled-components";

export const StyledCategoriesModal = styled.div`
  position: absolute;
  top: 100%;
  z-index: 5;
  background-color: white;
  box-shadow: var(--boxshadow-light-secondary);

  .categories_wrapper {
    width: 100vw;
    height: 1000px;
    margin: 0 auto;
    position: relative;

    .categories_close-modal-icon-container {
      top: 10px;
      right: 10px;
      cursor: pointer;
      position: absolute;

      svg {
        width: 50px;
        height: 50px;
        fill: var(--main-blue);

        &:hover {
          fill: var(--light-blue);
        }
      }
    }

    .categories_container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      
      .categories_brand-image-container {
        height: 100%;
        width: 25%;
        border-right: 2.5px solid var(--light-blue);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        @media (min-width: 992px) and (max-width: 1440px) {
         width: 30%;
        }

        a {
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            height: fit-content;
            width: fit-content;
          }
        }
      }

      .categories_image-container {
        height: 100%;
        width: 25%;
        border-right: 2.5px solid var(--light-blue);
        display: flex;
        justify-content: start;
        align-items: center;
        cursor: pointer;

        @media (min-width: 992px) and (max-width: 1440px) {
          width: 30%;
        }
        
        a {
          height: 100%;
          width: 100%;

          img {
            height: 100%;
            width: 100%;
          }
        }
      }


      .categories_brandsSubcategory-wrapper {
        width: 75%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        @media (min-width: 992px) and (max-width: 1440px) {
          width: 70%;
        }
        
        .categories_brandsSubcategory-container {
          width: 100%;
          height: 100%;
          overflow-y: scroll;
          display: grid;
          grid-template-columns: repeat(5, 1fr);

          @media (min-width: 992px) and (max-width: 1440px) {
            grid-template-columns: repeat(3, 1fr);
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
          
          .brand_container {
            margin: 50px;
            padding: 25px;
            width: fit-content;
            height: fit-content;
            
            &:hover {
              box-shadow: var(--boxshadow-blue);
            }
            
            img {
              width: 125px;
              height: 75px;
              
            }
          }
        }
      }

      .categories_subCategories-wrapper {
        width: 75%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex-direction: column;
        gap: 50px;
        padding: 20px;

        @media (min-width: 992px) and (max-width: 1440px) {
          width: 70%;
        }

        .categories_subCategories-category-img-container {
          width: 100%;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 95%;
            box-shadow: var(--boxshadow-light-secondary);
            cursor: pointer;
            margin-left: 35px;

            @media (min-width: 992px) and (max-width: 1440px) {
              margin-left: 27.5px;
            }

            &:hover {
              box-shadow: var(--boxshadow-blue);
            }
          }
        }

        .categories_subCategories-container {
          width: 92%;
          height: fit-content;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          overflow-x: scroll;
          gap: 150px;
          padding: 50px 25px;
          overscroll-behavior: contain;

          @media (min-width: 992px) and (max-width: 1440px) {
            gap: 100px;
          }

          ::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            background-color: var(--light-blue);
          }

          ::-webkit-scrollbar {
            width: 4px;
            height: 8px;
            background-color: #F5F5F5;
          }

          ::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
            background-color: var(--main-blue);
          }


          .categories_title-categories-container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 10px;
            height: 300px;
            width: 300px;
            text-decoration: none;
            padding: 10px;

            &:hover {
              box-shadow: var(--boxshadow-blue);
            }


            img {
              width: 270px;
              height: 270px;
            }

            .categories_subCategories-title {
              font-size: 18px;
              height: 30px;
              text-align: center;
              padding: 0;
              margin: 0;
              font-weight: 600;
              color: var(--main-blue);
              cursor: var(--common-cursor);
            }
          }
        }

      }
    }

  }
`