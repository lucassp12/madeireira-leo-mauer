import styled from 'styled-components';

export const Container = styled.div`
  width: 280px;
  height: 300px;
  background-image: url(${(props =>props.image)});
  background-position: center; 
  background-repeat: no-repeat;
  background-size: cover; 
  display: flex;
  justify-content: center;

  margin-bottom: 40px;
  border-radius: 10px;
`;

export const ContainerTitle = styled.div`
  background: #e80000;
  width: 300px;
  height: 40px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -20px;
  border-radius: 10px;

  h6{
    font-size: 24px;
    color: #fff;
    font-weight: bold;
    text-align: center;
  }

`;