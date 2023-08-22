import styled from "styled-components";

type StyledCategoriesPropTypes = {
    borderBottomActive: boolean
}

export const StyledCategories = styled.div<StyledCategoriesPropTypes>`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;

  .categories_wrapper {
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    border-left: var(--home-border);
    border-right: var(--home-border);
    border-bottom: ${props => !props?.borderBottomActive && "1px solid #AFDBF5"};


    .categories_title-icon-container {
      width: 215px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      gap: 10px;
      cursor: var(--common-cursor);
      position: relative;


      .categories_title {
        font-size: 20px;
        color: var(--main-blue);
        font-weight: 500;

        @media (min-width: 992px) and (max-width: 1440px) {
          font-size: 18px;
        }

      }

      .categories_icon {
        svg {
          width: 25px;
          height: 25px;
          fill: var(--light-blue);
        }
      }

      .categories_single-category-underline {
        position: absolute;
        width: 175px;
        height: 7.5px;
        top: 93%;
        background-color: var(--light-blue);
        box-shadow: var(--boxshadow-light-secondary);
        z-index: 3;
      }
    }
  }
`
