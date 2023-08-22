import styled from "styled-components";

type StyledBlogsPropTypes = {
    isNotDesktop: boolean
}

export const StyledBlogs = styled.div<StyledBlogsPropTypes>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--lightest-blue);
  position: relative;
  
  .styledComponent-Blogs {
    padding: 108px 25px;
    width: ${props => props?.isNotDesktop ? "50%" : "100%"}
    height: 100%;
    background-color: var(--common-light);
    
    .blogs_wrapper {
      .styledComponent-Buttons {
        .buttons_wrapper {
          display: grid;
          width: fit-content;
          grid-template-columns: repeat(3, 1fr);
          
          .buttons_button-container {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }

      .styledComponent-Content {
        .content_wrapper {
          .styledComponent-Cards {
            .cards_wrapper {
              .cards_container {
                gap: 100px;
              }
            }
          }
        }
      }
    }
  }
`