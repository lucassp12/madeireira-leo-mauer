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
  width: 100%;
  -webkit-box-shadow: 0px 10px 12px -5px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 10px 12px -5px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 10px 12px -5px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  z-index: 100;
`;


export const ContainerTop = styled.div`
  width: 100%;
  height: 30px;
  background: #000;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ContainerContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: #fff;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;

    svg {
      margin-right: 5px;
    }

    &:nth-child(2) {
      margin-left: 10px;
    }
  }

  @media (max-width: 770px) {
    display: none;
  }
`;

export const ContainerSocial = styled.div`
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
  a {
    &:nth-child(2) {
      margin-left: 5px;
    }
  }
  @media (max-width: 770px) {
    display: none;
  }
`;

export const ContainerMenu = styled.div`
  width: 100%;
  height: 90px;
  background: #e80000;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 260px;
    cursor: pointer;
  }

  ul {
    display: flex;
    list-style: none;

    li {
      padding: 0px 10px 0px 10px;
      border-right: 2px solid #fff;
      cursor: pointer;
      transition: 0.3s;

      a {
        color: #fff;
        font-size: 20px;
        text-decoration: none;
      }

      &:hover {
        border-color: #dbdbdb;
        a {
          color: #dbdbdb;
        }
      }


      &:nth-child(5) {
        border: none;
      }
    }
  }
  @media (max-width: 1070px) {
    ul {
      display: none;
    }

  }
`;

export const ContainerMargin = styled.div`
  width: 70%;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 450px) {
    width: 90%;
  }
`;


