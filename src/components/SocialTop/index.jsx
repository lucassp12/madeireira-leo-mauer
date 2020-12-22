import React from "react";

import { Container } from "./styles";

import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function SocialTop() {
  return (
    <Container>
      <a href="https://api.whatsapp.com/send?phone=+5551997419965">
        <FaWhatsapp size={22} />
      </a>
      <a href="https://www.facebook.com/leomauer.materiaisdeconstrucao">
        <FaFacebook size={22} />
      </a>
      <a href="https://www.instagram.com/explore/locations/792007364508660/leo-mauer-materiais-de-construcao/?hl=pt-br">
        <FaInstagram size={22} />
      </a>
    </Container>
  );
}

export default SocialTop;
