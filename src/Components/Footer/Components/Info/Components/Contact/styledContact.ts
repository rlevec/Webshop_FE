import styled from "styled-components";


export const StyledContact = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--lightest-blue);
  position: relative;

  .contact_wrapper {
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


    .contact_container {
      width: 100%;
      height: fit-content;
      display: flex;

      .contact_help-container {
        width: 50%;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;

        @media (max-width: 576px) and (orientation: portrait) {
         display: none;
        }
        

        .styledComponent-Help {
          box-shadow: none;
          width: 100%;

          .help_container {
            .help_content-container {
              width: 100%;
              justify-content: start;
              padding-left: 62.5px;
            }

            .help_phone-container {
              width: 100%;
              justify-content: start;
              padding-left: 62.5px;
            }

            .help_social-media-container {
              width: 100%;
              justify-content: start;
              padding-left: 62.5px;

              a  {
                padding: 15px;
              }
            }
            
            .help_title-container {
              justify-content: start;
              padding-left: 62.5px;
              
              .help_title {
                font-size: 32px;
            }
          }
        }

      }
    }


    .contact_about-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact_about-container-wrapper {
        font-size: 18px;

        strong {
          color: var(--main-blue);
        }

        p {
          font-weight: 400;
        }
      }
    }
  }

}
`