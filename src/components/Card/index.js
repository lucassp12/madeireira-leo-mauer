import React from 'react';

import { Container, ContainerTop } from './styles';

const index = ({icon: Icon, image, children}) => {
  return (
    <Container>
      <ContainerTop>
        <Icon size={40} />
        <h4>{children}</h4>
      </ContainerTop>
      <img src={image} />
    </Container>
  );
}
export default index;
