import styled from "styled-components";

export const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* max-height: 100vh; */
`;

export const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: auto;
  margin-left: 24px;
  margin-top: 40px;
  /* background-color: red; */

  .user_name {
    color: #000;

    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    margin-bottom: 0;
  }

  .total_tasks {
    color: #f58966;

    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 8px;
    margin-right: auto;
  }
`;

export const Accordion = styled.div`
  .accordion-item {
    /* background: rgba(245, 137, 102, 0.8); */
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 5px 10px;
    align-items: center;
    gap: 10px;
  }
  color: #fff !important;
  .summary {
    display: flex;
    flex-direction: column;
    background: rgba(245, 137, 102, 0.8);
    min-width: 200px;
    border-radius: 5px;

    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    &:hover {
      background: rgba(245, 137, 102, 0.8);
    }

    .childs {
      display: flex;
      padding: 2px 10px 2px 20px;
      align-items: center;
      gap: 10px;
      background: transparent;
    }
  }
`;
