import styled from "styled-components";

export const Container = styled.div`
  padding: 10px 0 20px 0;
  background: #fff;
  margin-top: 120px;

  display: flex;
  justify-content: center;
`;

export const ContainerMargin = styled.div`
  width: 70%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  h1 {
    margin-top: 10px;
    font-size: 35px;
  }

  p {
    font-size: 20px;
    margin-top: 30px;
    text-align: justify;
  }

  img {
    margin-top: 20px;
    border-radius: 10px;
  }
`;

export const ContainerInformations = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;
