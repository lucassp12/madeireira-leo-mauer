import React from "react";
import Link from "next/link";

import { Container, Ul } from "./styles";

function RightNav({ open, handleClickContact }) {
  return (
    <Container open={open}>
      <ul>
        <li>
          <Link href="/">Início</Link>
        </li>
        <li>
          <Link href="/empresa">Empresa</Link>
        </li>
        <li>
          <Link href="/empresa">Produtos</Link>
        </li>
        <li onClick={() => handleClickContact()}>
          <a>Contato</a>
        </li>
        <li>
          <a href="">Avalie-nos</a>
        </li>
      </ul>
    </Container>
  );
}

export default RightNav;
