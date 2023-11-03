import styled from "styled-components";

export const NewTaskContainer = styled.div`
  width: 100%;
  background-color: #fff;
  max-height: 100vh;
`;
export const Header = styled.div`
  display: flex;
  height: 60px;
  justify-content: space-between;



  .center {
    /* background-color: red; */
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
export const Title = styled.p`
  text-align: center;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 153px;
  /* background-color: blue; */
  margin-right: auto;
  margin-left: 50px;
`;

export const FormGroup = styled.div`
  padding: 16px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 100vh;

  border-radius: 16px;
  overflow: hidden;


  .title {
    color: #000;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const TitleInput = styled.input`
  min-width: 240px;
  display: flex;
  padding: 12px 0px 12px 10px;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: #f1f5f8;
  border: 0;
  color: #838383;

  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-top: 2px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;
export const DescriptionInput = styled.textarea`
  display: flex;
  min-width: 240px;
  padding: 12px 0px 12px 10px;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #f1f5f8;
  border: 0;

  color: #838383;

  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-top: 2px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;

export const DateInput = styled.input`
  display: inline-flex;
  padding: 12px 10px;
  justify-content: space-between;
  align-items: center;

  border-radius: 5px;
  background: #f1f5f8;
  border: 0;
  color: #838383;

  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-top: 2px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;
