import React from "react";

import { Container, ContainerInfo } from "./styles";

function ContactCard({ icon: Icon, title, children }) {
  return (
    <Container>
      <Icon size={60} />
      <strong>{title}</strong>
      <ContainerInfo>
        <p>{children}</p>
      </ContainerInfo>
    </Container>
  );
}

export default ContactCard;
