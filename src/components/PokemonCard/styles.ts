import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
 
`;

export const CardContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.backgroundColorsType.grass};
  border-radius: 10px;
`;

export const InfoContainer = styled.View`
  padding: 20px 20px;
  justify-content: space-around;
`;

export const PokeNumber = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.textColors.textNumber};
`;

export const PokeName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(26)}px;
  color: ${({ theme }) => theme.colors.textColors.textWhite};
`;

export const PokeTypeContainer = styled.View`
  flex-direction: row;
  `;

export const PokeType = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.typeColors.grass};
  align-items: center;
  padding: 0px 10px;
`;

export const PokeTypeText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.textColors.textWhite};
  margin-left: 5px;
`;


