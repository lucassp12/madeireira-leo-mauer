import React, { useState } from "react";
import Link from "next/link";

import Burger from '../Burger';
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

import SocialTop from "../SocialTop";
import Logo from "../../assets/logo.png";

import {
  Container,
  ContainerTop,
  ContainerMenu,
  ContainerContact,
  ContainerSocial,
  ContainerMargin,
} from "./styles";

function Header({ handleClickContact }) {
  return (
    <Container>
      <ContainerTop>
        <ContainerMargin>
          <ContainerContact>
            <a href="mailto:leomauer.materiaisdeconstrucao@gmail.com">
              <FaEnvelope size={18} />
              leomauer.materiaisdeconstrucao@gmail.com
            </a>
            <a href="https://api.whatsapp.com/send?phone=+5551997419965">
              <FaWhatsapp size={18} />
              (51) 99741-9965
            </a>
          </ContainerContact>
          <ContainerSocial>
            <a href="https://www.facebook.com/leomauer.materiaisdeconstrucao">
              <FaFacebook size={20} />
            </a>
            <a href="https://www.instagram.com/explore/locations/792007364508660/leo-mauer-materiais-de-construcao/?hl=pt-br">
              <FaInstagram size={20} />
            </a>
          </ContainerSocial>
          <SocialTop />
        </ContainerMargin>
      </ContainerTop>
      <ContainerMenu>
        <ContainerMargin>
          <img src={Logo} />
          <ul>
            <li>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="/empresa">Empresa</Link>
            </li>
            <li>
              <Link href="/produtos">Produtos</Link>
            </li>
            <li onClick={() => handleClickContact()}>
              <a>Contato</a>
            </li>
            <li>
              <a href="">Avalie-nos</a>
            </li>
          </ul>
          <Burger handleClickContact={handleClickContact} />
        </ContainerMargin>
      </ContainerMenu>
    </Container>
  );
}

export default Header;
