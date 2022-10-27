import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  padding: 20px 21px;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  border-color: ${({ theme }) => theme.COLORS.PRIMARY_100};
  border-width: 1px;
  border-radius: 12px;
  margin-bottom: 16px;
`;

export const Text = styled.Text`

`;

export const Description = styled.Text`

`;

export const Indicator = styled.View`

`;

export const ImagePizza = styled.View`

`;
