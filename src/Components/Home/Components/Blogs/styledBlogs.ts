import styled from "styled-components";

export const StyledBlogs = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0 100px 0;
  border-bottom: var(--home-border);
  position: relative;

  .blogs_wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;


    .blogs_icon-container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        width: 75px;
        height: 75px;
        fill: var(--main-blue);
        cursor: var(--common-cursor);
      }
    }


    .blogs_title-container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .blogs_title {
        font-size: 36px;
        font-weight: 600;
        letter-spacing: var(--letter-spacing-title);
        color: var(--dark-blue);

      }
    }

  }
`