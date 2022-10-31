import React from "react";
import { Card } from "../../Components/Card";
import { Header } from "../../Components/Header";
import {
  Container,
  InputArea,
  InputSearch,
  InputText,
  IconClose,
  InputAreaSearchButton,
  IconSearch,
  InputAreaCloseButton,
  Menu,
  MenuTitleArea,
  TitleMenu,
  CounterPizzaMenu,
  Separator,
  ListPizzas,
} from "./Styles";

import { data } from "../../Utils/flavorPizzas";
import { View } from "react-native";

export function Home() {
  return (
    <Container>
      <Header />
      <InputArea>
        <InputSearch>
          <InputText />
          <InputAreaCloseButton>
            <IconClose name="close" />
          </InputAreaCloseButton>
        </InputSearch>
        <InputAreaSearchButton>
          <IconSearch name="search" />
        </InputAreaSearchButton>
      </InputArea>
      <Menu>
        <MenuTitleArea>
          <TitleMenu>Cardápio</TitleMenu>
          <CounterPizzaMenu>32 pizzas</CounterPizzaMenu>
        </MenuTitleArea>
        <Separator></Separator>
      </Menu>
      <ListPizzas
        data={data}
        horizontal={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card data={item} />}
      />
    </Container>
  );
}
