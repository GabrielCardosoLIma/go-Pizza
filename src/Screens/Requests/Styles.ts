import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex: 1;
  background-color: ${( {theme} ) => theme.COLORS.BACKGROUND};
  `;
  
export const Header = styled(LinearGradient).attrs({
  colors: ["#B83341", "#E03F50"],
  start: { x: 0, y: 1 },
  end: { x: 1, y: 0 },
})`  
    width: 100%;
    height: ${RFValue(120)}px;
    align-items: center;
    justify-content: flex-end;
  `;
export const Text = styled.Text`
  margin-top: 64px;
  color: ${( {theme} ) => theme.COLORS.SHAPE};
  font-size: ${RFValue(24)};
  font-family: ${( {theme} ) => theme.FONTS.TITLE};
  margin-bottom: 32px;
`;
export const View = styled.View`
  flex: 1;
  background-color: ${( {theme} ) => theme.COLORS.BACKGROUND};
`;