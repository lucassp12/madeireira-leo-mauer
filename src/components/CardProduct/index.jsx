import React from "react";

import { Container, ContainerTitle } from "./styles";

function CardProduct({ title, image }) {
  return (
    <Container image={image}>
      <ContainerTitle>
        <h6>{title}</h6>
      </ContainerTitle>
    </Container>
  );
}

export default CardProduct;
