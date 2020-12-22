import React from "react";

import { Container } from "./styles";

import Contact from '../Contact';

function Footer({contactRef}) {
  return (
    <>
    <Contact contactRef={contactRef} />
    <Container>
      <span>©2020 Léo Mauer | Materias de Construção</span>
    </Container>
    </>
  );
}

export default Footer;
