import styled from "styled-components";

export const Container = styled.div`

  background: #f1f5f8;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  background-color: #eee;
  /* height: 100vh; b */
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin: 16px;
  padding: 16px;
  border-radius: 18px;
  border-style: solid;
  border-width: 1px;
  border-color: #eee;

  .tasks_container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px;
  }
`;

export const Card = styled.div`
  padding: 8px;
  border-radius: 8px;

  background-color: #fff;

  .task_title {
    font-size: 18px;
    font-weight: 600;
  }

  .id {
    font-size: 12px;
  }

  .task_body {
    font-size: 16px;
  }
`;

export const Header = styled.div`
  border-radius: 0px 0px 20px 20px;
  background: #f1f5f8;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  padding: 25px;
  padding-bottom: 10px;

  .title {
    font-size: 25px;
    font-weight: 700;
    color: #000;

    margin-bottom: 0;
  }

  .top {
    display: flex;
    justify-content: space-between;
    
  }
`;

export const List = styled.div`

    .item{
        margin: 25px 20px;
        padding: 10px 12px;
        background-color: #FFFFFF;
        border-radius: 6px;
    }

`