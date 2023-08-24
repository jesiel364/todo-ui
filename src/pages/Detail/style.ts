import styled from "styled-components"

export const DetailContainer = styled.div`
  background: #f1f5f8;
  min-height: 100vh;
  
`

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

export const Wrapper = styled.div`
  margin-top: 120px;
  padding: 16px;
  font-weight : 400;
  font-size: 18px;
`