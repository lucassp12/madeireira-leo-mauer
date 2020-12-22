import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: none;
  @media (max-width: 770px) {
    display: flex;
    width: 100px;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    svg {
      color: #fff;
      cursor: pointer;

      &:nth-child(2) {
        margin-left: 5px;
      }

      &:hover {
        animation: ${rotate} 0.3s linear normal;
      }
    }
  }
`;
