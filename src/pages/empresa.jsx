import React from "react";
import Head from "next/head";

import Page from "../components/Page";
import AddInformation from "../components/AddInformation";
import Map from '../components/Map';
import ImagemFrente from "../assets/empresa/frente.png";
import {
  Container,
  ContainerMargin,
  ContainerInformations,
} from "../styles/pages/Empresa";

function empresa() {
  return (
    <Page>
      <Head>
        <title>Léo Mauer | Empresa</title>
      </Head>
      <Container>
        <ContainerMargin>
          <h1>Você faz parte da nossa história!</h1>
          <img src={ImagemFrente} />
          <p>
            Fundada em 2018, pelo empresário José Luiz Witt Mauer, a empresa
            iniciou suas atividades em Tramandaí, onde está até os dias de hoje.
            Nos esforçamos para estabelecer uma relação de confiança com nossos
            clientes, prezando pelo melhor atendimento. Trabalhamos com os
            diversos departamentos em materiais de construção, tais como:
            revestimentos cerâmicos, louças, metais, aberturas, ferragens,
            tintas, impermeabilizantes e produtos do alicerce ao telhado. A
            empresa está sempre procurando novidades e soluções para ajudar o
            cliente. Conta com mais de 3.000 itens de produtos das marcas mais
            consagradas, prezando a qualidade.
          </p>
          <ContainerInformations>
            <AddInformation title="Missão">
              Fornecer materiais de alta qualidade para clientes que buscam a
              melhor opção.
            </AddInformation>
            <AddInformation title="Visão">
              Tornar-se referência no ramo na região, que tem forte presença da
              construção civíl.
            </AddInformation>
            <AddInformation title="Valores">
              Confiança Comprometimento Transparência
            </AddInformation>
          </ContainerInformations>
          <Map />
        </ContainerMargin>
      </Container>
    </Page>
  );
}

export default empresa;
