import React from "react";
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
  Separator
} from "./Styles";

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
    </Container>
  );
}
