import React, { useState } from "react";

import RightNav from "../RightNav";

import { Container } from "./styles";

function Burger({ handleClickContact }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Container>
      <RightNav open={open} handleClickContact={handleClickContact} />
    </>
  );
}

export default Burger;
