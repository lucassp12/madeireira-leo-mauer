import React from "react";

import { Container, ContainerMargin, ContainerCards } from "./styles";
import ContactCard from "../ContactCard";
import { GoLocation } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { FiMail } from "react-icons/fi";

const Contact = ({contactRef}) => {
  return (
    <Container ref={contactRef}>
      <ContainerMargin>
        <h3>Entre em contato</h3>
        <ContainerCards>
          <ContactCard icon={GoLocation} title="Endereço">
            Av.Flores da Cunha, 5062
            <br />
            Bairro: Zona nova
            <br />
            Tramandaí/RS
          </ContactCard>
          <ContactCard icon={FaPhoneAlt} title="Telefones">
            (51) 3684-3936
            <br />
            (51) 99741-9965
          </ContactCard>
          <ContactCard icon={FiMail} title="E-mail">
            leomauer.materiais
            <br />
            deconstrucao@gmail.com
          </ContactCard>
          <ContactCard icon={MdAccessTime} title="Horários">
            Segunda a Sábado:
            <br />
            07:30 - 12:00 e 13:30 - 18:00
          </ContactCard>
        </ContainerCards>
      </ContainerMargin>
    </Container>
  );
};

export default Contact;
