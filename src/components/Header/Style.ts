import styled from 'styled-components'


export const HeaderStyle = styled.div`
  width: 100% ;
  border-radius: 0px 0px 20px 20px;
  background: #f1f5f8;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  padding: 25px;
  padding-bottom: 10px;
  position: fixed ;
  top: 0;
  left: 0;
  
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