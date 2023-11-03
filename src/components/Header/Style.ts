import styled from 'styled-components'


export const HeaderStyle = styled.div`
  // width: 100% ;
  display: flex;
  max-width : auto;
  border-radius: 0px 0px 20px 20px;
  background: #f1f5f8;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.12);
  padding: 25px;
  padding-bottom: 10px;position: fixed; top: 0; left: 0; right: 0;
  /* z-index: 9; */
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  
  .title_left {
    font-size: 25px;
    font-weight: 700;
    color: #000;

    margin-bottom: 0;
  }
  .title_center {
    font-size: 25px;
    font-weight: 700;
    color: #000;
    text-align : center;
    margin-bottom: 0;
  }
  .title_right {
    font-size: 25px;
    font-weight: 700;
    color: #000;
text-align : right; 
    margin-bottom: 0;
  }

  .top {
    display: flex;
    justify-content: space-between;
   
    
  }
`;