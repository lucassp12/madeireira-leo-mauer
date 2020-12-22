import styled from "styled-components";

export const Container = styled.div`
  width: 270px;
  min-width: 270px;
  height: 280px;
  border: 3px solid red;
  border-radius: 10px;
  margin-bottom: 20px;
  overflow: hidden;
  -webkit-box-shadow: 0px 10px 14px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 10px 14px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 10px 14px 0px rgba(0, 0, 0, 0.4);

  img {
    width: 265px;
    height: 150px;
    border-radius: 0 0 10px 10px;
  }
`;

export const ContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 130px;

  h4 {
    font-size: 20px;
    text-align: center;
  }
`;
