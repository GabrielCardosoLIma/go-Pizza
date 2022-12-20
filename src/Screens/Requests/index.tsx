import React from "react";
import { FlatList } from "react-native";
import { data } from "../../Utils/flavourPizzas";
import { Card, CardProps } from "../../Components/OrderCard";
import { ItemSeparator } from "../../Components/ItemSeparator";
import { TabsBar } from "../../Components/TabsBar";

import {
  Container,
  Header,
  Text,
} from "./Styles";

export function Requests() {
  return (
    <Container>
      <Header>
        <Text>Pedidos Feitos</Text>
      </Header>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Card
            data={item}
            onPress={() => handlePizzaDelivered(item.id)}
          />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ItemSeparator />}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 125 }}
      />
      <TabsBar />
    </Container>
  );
}