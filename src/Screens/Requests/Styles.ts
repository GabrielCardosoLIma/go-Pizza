import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${( {theme} ) => theme.COLORS.BACKGROUND};
  `;
export const Header = styled.View`  
  width: 100%;
  height: 120px;

  // align-itens: center;
  justify-content: center;
  flex-direction: row;

  background-color: ${( {theme} ) => theme.COLORS.GRADIENT};
  // height: ${RFPercentage(42)}px;
  `;
export const Text = styled.Text`

  margin-top: 64px
  color: ${( {theme} ) => theme.COLORS.SHAPE};
  font-size: ${RFValue(24)};
  font-family: ${( {theme} ) => theme.FONTS.TITLE};
`;
export const View = styled.View`
  flex: 1;
  background-color: ${( {theme} ) => theme.COLORS.BACKGROUND};
`;