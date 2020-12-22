import styled from "styled-components";

export const ContainerSlide = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  height: 550px;
  padding: 120px 0 0 0;
  margin-bottom: 120px;

  @media (max-width: 860px) {
    display:none;
    padding: 0;
  }
`;

export const Container = styled.div`
  margin-top: 150px;
  background: #fff;
  padding: 20px 0 20px 0;

  display: flex;
  justify-content: center;

  @media (max-width: 860px) {
    margin-top: 120px;
  }


  @media (max-width: 770px) {
    margin-top: 120px;
  }

  p {
    font-size: 30px;
    font-weight: bold;
    padding: 10px;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

}
`;

export const ContainerMargin = styled.div`
  width: 70%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
`;
