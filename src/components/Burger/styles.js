import styled from "styled-components";


export const Container = styled.div`
  width: 2rem;
  height: 2rem;
  z-index: 20;
  display: none;
  cursor: pointer;
  position: ${({ open }) => (open ? "fixed" : "none")};
  right: ${({ open }) => (open ? "20px" : "none")};
  top: ${({ open }) => (open ? "20px" : "none")};

  @media (max-width: 1070px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#dbdbdb" : "#fff")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
