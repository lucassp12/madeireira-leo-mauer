import React from "react";

import { Container, ContainerMargin, ContainerCards } from "../styles/pages/Produtos";
import Head from "next/head";

import Page from "../components/Page";
import CardProduct from "../components/CardProduct";
import Favicon from "../assets/icons/favicon.png";

import materiais from "../assets/produtos/materiais_basicos.png";
import madeira from "../assets/produtos/madeira.png";
import pisos from "../assets/produtos/pisos.png";
import tintas from "../assets/produtos/tintas.png";
import eletrico from "../assets/produtos/material_eletrico.png";
import ferramentas from "../assets/produtos/ferramentas.png";
import banheiro from "../assets/produtos/banheiro.png";
import hidraulica from "../assets/produtos/hidraulica.png";
import macaneta from "../assets/produtos/macanetas.png";

const produtos = () => {
  return (
    <Page>
      <Head>
        <title>Léo Mauer | Produtos</title>
        <link rel="icon" href={Favicon} />
      </Head>
      <Container>
        <ContainerMargin>
          <ContainerCards>
            <CardProduct title="Materiais básicos" image={materiais} />
            <CardProduct title="Madeira" image={madeira} />
            <CardProduct title="Pisos e revestimentos" image={pisos} />
            <CardProduct title="Tintas e acessórios" image={tintas} />
            <CardProduct title="Material elétrico" image={eletrico} />
            <CardProduct title="Ferramentas" image={ferramentas} />
            <CardProduct title="Banheiros e chuveiros" image={banheiro} />
            <CardProduct title="Hidráulica e louças" image={hidraulica} />
            <CardProduct title="Maçanetas e puxadores" image={macaneta} />
          </ContainerCards>
        </ContainerMargin>
      </Container>
    </Page>
  );
};

export default produtos;
