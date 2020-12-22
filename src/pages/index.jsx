import React from "react";

import Head from "next/head";

import Page from "../components/Page";
import SlideShow from "../components/SlideShow";
import Card from "../components/Card";
import Payment from "../assets/pagamento.jpg";
import Professionals from "../assets/profissionais.jpg";
import Shipping from "../assets/entrega.jpg";
import Products from "../assets/products.jpg";
import Location from "../assets/location.png";
import Partner from "../assets/parceiro.jpg";
import Favicon from "../assets/icons/favicon.png";

import {
  FaDollarSign,
  FaRegStar,
  FaShippingFast,
  FaHandshake,
} from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { AiFillSafetyCertificate } from "react-icons/ai";

import {
  Container,
  ContainerSlide,
  ContainerCards,
  ContainerMargin,
} from "../styles/pages/Home";

function Home() {
  return (
    <Page>
      <Head>
        <title>Léo Mauer | Início</title>
        <link rel="icon" href={Favicon} />
      </Head>
      <ContainerSlide>
        <SlideShow />
      </ContainerSlide>
      <Container>
        <ContainerMargin>
          <p>Porque oferecemos o melhor para a sua construção ou reforma?</p>
          <ContainerCards>
            <Card icon={GoLocation} image={Location}>
              Estamos perto de você
            </Card>
            <Card icon={FaDollarSign} image={Payment}>
              Preço justo
            </Card>
            <Card icon={AiFillSafetyCertificate} image={Products}>
              Materiais de qualidade
            </Card>
            <Card icon={FaRegStar} image={Professionals}>
              Profissionais qualificados
            </Card>
            <Card icon={FaShippingFast} image={Shipping}>
              Entrega rápida
            </Card>
            <Card icon={FaHandshake} image={Partner}>
              Parceiro com empresas do mesmo segmento
            </Card>
          </ContainerCards>
        </ContainerMargin>
      </Container>
    </Page>
  );
}

export default Home;
