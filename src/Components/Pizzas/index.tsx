import { View } from "react-native";
import React from "react";
import { TextInputProps } from "react-native";

import { 
    Container,
    Text,
    Description,
    Indicator,
    ImagePizza,
} from "./styles"

export function Pizzas() {
  return (
    <Container>
      <Text>4 Queijos</Text>
      {/* <ImagePizza source={require("../../assets/img/4queijos.png")} /> */}
      <Description>Mesa 01 - Qnt: 1</Description>
      <Indicator>Pronto</Indicator>
    </Container>
  );
}
