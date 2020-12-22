import styled from "styled-components";

export const Container = styled.div`
display: none;
  @media (max-width: 1070px) {
    display: flex;
    flex-flow: column nowrap;
    background-color: #e80000;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    display: ${({ open }) => (open ? "flex" : "none")};


    -webkit-box-shadow: -5px 3px 27px -8px rgba(0,0,0,0.75);
-moz-box-shadow: -5px 3px 27px -8px rgba(0,0,0,0.75);
box-shadow: -5px 3px 27px -8px rgba(0,0,0,0.75);

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;

      li {
        margin-bottom: 10px;
        padding: 0 10px 0 10px;
        cursor: pointer;
        transition: 0.3s;
        border: none;
        
        a {
          color: #fff;
          font-size: 20px;
          text-decoration: none;
        }

        &:hover {
          margin-top: 0;
          a {
            color: #dbdbdb;
          }
        }
      }
    }
  }
`;
