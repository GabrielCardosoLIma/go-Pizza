import React from "react";
import {
  Container,
  AreaImage,
  Image,
  AreaDescription,
  TitleArea,
  Title,
  Icon,
  Description,
  AreaIconButton,
} from "./Styles";

export function Card({data}) {
  return (
    <Container>
      <AreaImage>
        <Image source={data.image} />
      </AreaImage>
      <AreaDescription>
        <TitleArea>
          <Title>{data.title}</Title>
          <AreaIconButton>
            <Icon name="right" />
          </AreaIconButton>
        </TitleArea>
        <Description>
          {data.description}
        </Description>
      </AreaDescription>
    </Container>
  );
}
