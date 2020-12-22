import React from "react";

import { Container, Text } from "./styles";

function AddInformation({ title, children }) {
  return (
    <Container>
      <h2>{title}</h2>
      <Text>{children}</Text>
    </Container>
  );
}

export default AddInformation;
