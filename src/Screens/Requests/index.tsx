import React from "react";
import {
  Container,
  Header,
  Text,
  View
} from "./Styles";
import { Pizzas } from '../../Components/Pizzas'

export function Requests() {
  return (
    <Container>
      <Header>
        <Text>Pedidos Feitos</Text>
      </Header>
      <View>
      <Pizzas/>
      </View>
    </Container>
  );
}
