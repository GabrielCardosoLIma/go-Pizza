import React from 'react';

import { 
    Container,
    Title,
    Status,
    Description,
    Image,
} from './Styles';

export function Pizzas {
    return (
      <Container>
        <Image></Image>
        <Title>4 Queijos</Title>
        <Description>Mesa 01  • Qnt: 1</Description>
        <Status>Pronto</Status>
      </Container>
    )
}