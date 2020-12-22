import React from "react";
import { FaFacebook } from "react-icons/fa";

import { Slide } from "./styles";
import Imagem from "../../assets/slide/1.jpg";
import Imagem2 from "../../assets/slide/2.jpg";
import Imagem3 from "../../assets/slide/3.jpg";

const index = () => {
  return (
    <Slide
      dragging={true}
      autoplay={true}
      autoplayInterval={3000}
      speed={1000}
      defaultControlsConfig={{
        nextButtonText: ">",
        prevButtonText: "<",
      }}
    >
      <img src={Imagem} />
      <img src={Imagem2} />
      <img src={Imagem3} />
    </Slide>
  );
};

export default index;
