import styled from "styled-components";

type FaqStyledComponentPropTypes = {
    contentDivHeight: number,
    desktop: boolean
}

export const StyledFaq = styled.div<FaqStyledComponentPropTypes>`
  width: 100%;
  height: fit-content;
  position: relative;

  .faq_wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-self: center;
    flex-direction: row;

    .faq_accordion-sidebar-wrapper {
      min-height: 500px;
      width: 25%;
      background-color: var(--lightest-blue);
      height: ${props => props?.contentDivHeight && `${props?.contentDivHeight}px`};
      display: flex;
      justify-content: center;
      align-items: start;

      .faq_accordion-sidebar-container {
        box-shadow: var(--boxshadow-blue);
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        background-color: var(--common-light);
        margin-top: 100px;

        .active {
          background-color: var(--main-blue);
          color: white !important;
        }

        .faq_accordion-sidebar-single-title-container {
          width: 200px;
          font-size: 24px;
          display: flex;
          justify-content: start;
          align-items: center;
          padding: 10px 20px;
          border-bottom: 1px solid var(--dark-blue);
          cursor: var(--common-cursor);
          gap: 10px;
          color: var(--main-blue);
          position: relative;

          &:hover {
            background-color: var(--main-blue);
            color: white;
          }

          &:last-child {
            border-bottom: none;
          }

          &.hovered {
            color: white;
          }

          .faq_accordion-sidebar-active-pointer {
            height: 100%;
            width: 100%;

            svg {
              top: 12.5%;
              position: absolute;
              right: -22.5px;
              width: 40px;
              height: 40px;
              fill: var(--main-blue);
            }
          }

          .faq_accordion-sidebar-title {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 300;


          }

          .faq_accordion-sidebar-image-orders {
            text-align: center;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
              width: 30px;
              height: 30px;

              fill: white;
            }
          }

          .faq_accordion-sidebar-image-delivery {
            text-align: center;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
              width: 30px;
              height: 30px;

              fill: white;
            }
          }

          .faq_accordion-sidebar-image-payment {
            text-align: center;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
              width: 30px;
              height: 30px;

              fill: white;
            }
          }

          .faq_accordion-sidebar-image-return {
            text-align: center;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
              width: 30px;
              height: 30px;

              fill: white;
            }
          }

          .faq_accordion-sidebar-image-other {
            text-align: center;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
              width: 30px;
              height: 30px;

              fill: white;
            }
          }

          .faq_accordion-sidebar-image {
            text-align: center;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
              width: 30px;
              height: 30px;

              fill: var(--main-blue);
            }
          }
        }
      }
    }

  }

  .faq_accordion-content-container {
    padding: 15px 30px;
    width: 50%;
    background-color: var(--common-light);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;

    @media (min-width: 576px) and (max-width: 992px) and (orientation: portrait) {
      width: 100%;
    }

    @media (max-width: 576px) and (orientation: portrait) {
      width: 100%;
    }


    .faq_accordion-content-title {
      width: 100%;
      height: fit-content;
      font-size: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      color: var(--main-blue);

      @media (max-width: 576px) and (orientation: portrait) {
        text-align: center;
      }
    }

    .faq_accordion-sidebar-wrapper {
      width: 100%;
      background-color: var(--common-light);
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: start;

      .faq_accordion-sidebar-container {
        box-shadow: var(--boxshadow-blue);
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        background-color: var(--common-light);
        width: 400px;

        .active {
          background-color: var(--main-blue);
          color: white !important;
        }

        .faq_accordion-sidebar-single-title-container {
          width: 362.5px;
          font-size: 24px;
          display: flex;
          justify-content: start;
          align-items: center;
          padding: 10px 20px;
          border-bottom: 1px solid var(--dark-blue);
          cursor: var(--common-cursor);
          gap: 10px;
          color: var(--main-blue);
          position: relative;

          &:hover {
            background-color: var(--main-blue);
            color: white;
          }

          &:last-child {
            border-bottom: none;
          }

          &.hovered {
            color: white;
          }

          .faq_accordion-sidebar-active-pointer {
           display: none;
          }

          .faq_accordion-sidebar-title {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 300;


          }

          .faq_accordion-sidebar-image-orders {
            text-align: center;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
              width: 30px;
              height: 30px;

              fill: white;
            }
          }

          .faq_accordion-sidebar-image-delivery {
            text-align: center;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
              width: 30px;
              height: 30px;

              fill: white;
            }
          }

          .faq_accordion-sidebar-image-payment {
            text-align: center;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
              width: 30px;
              height: 30px;

              fill: white;
            }
          }

          .faq_accordion-sidebar-image-return {
            text-align: center;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
              width: 30px;
              height: 30px;

              fill: white;
            }
          }

          .faq_accordion-sidebar-image-other {
            text-align: center;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
              width: 30px;
              height: 30px;

              fill: white;
            }
          }

          .faq_accordion-sidebar-image {
            text-align: center;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
              width: 30px;
              height: 30px;

              fill: var(--main-blue);
            }
          }
        }
      }
    }

    .faq_accordion-content-wrapper {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: start;
      align-items: center;
      flex-direction: column;
      gap: 30px;

      .faq_accordion-single-content-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 15px;
        border-bottom: 1px solid var(--main-blue);
        padding-bottom: 25px;

        &:first-child {
          border-top: 1px solid var(--main-blue);
        }

        &:first-child {
          border-top: none;
        }

        &:last-child {
          border-bottom: none;
        }

        .faq_accordion-sidebar-single-content-icon {
          height: 100%;
          width: fit-content;
          display: flex;
          justify-content: center;
          align-items: start;
          align-self: start;

          svg {
            cursor: pointer;;
            border: 1px solid var(--main-blue);
            background-color: var(--light-blue);
            fill: var(--main-blue);
            border-radius: 50%;
            width: 25px;
            height: 25px;
            padding: 5px;
          }
        }

        .faq_accordion-single-QA-container {
          padding: 0;
          width: 100%;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: start;
          flex-direction: column;
          gap: 25px;

          .faq_accordion-sidebar-single-content-question {
            font-size: 20px;
            font-weight: 600;
            color: var(--dark-blue);
          }

          .faq_accordion-sidebar-single-content-answer {
            font-size: 16px;
            font-weight: 300;
            color: var(--main-blue);
          }
        }
      }
    }

  }

  .faq_help_wrapper {
    min-height: 500px;
    width: 25%;
    background-color: var(--lightest-blue);
    height: ${props => props?.contentDivHeight && `${props?.contentDivHeight}px`};
    display: flex;
    justify-content: center;
    align-items: start;

    .faq_help_container {
      margin-top: 100px;
      height: fit-content;
      width: fit-content;

      .styledComponent-Help {
        width: 250px;
        height: 250px;

        .help_container {
          gap: 15px;

          .help_title-container {
            .help_title {
              font-size: 25px;
            }
          }

          .help_phone-container {
            .help_phone {
              font-size: 18px;
            }
          }

          .help_content-container {
            width: 90%;
            gap: 5px;
            
            .help_content {
              font-size: 16px;
              
              svg {
                width: 20px;
                height: 20px;
              }
            }
          }

          .help_social-media-container {
            width: 100%;

            .help_social-content {
              padding: 15px !important;
            }
          }
        }
      }

    }
  }
`