import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
 
`;

export const CardContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundColorsType.grass};
  border-radius: 10px;
`;

export const InfoContainer = styled.View`
  justify-content: space-around;
  padding: 0px 10px;
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
  justify-content: center;
  padding: 5px 5px;
  margin: 0px 5px;
  border-radius: 5px;
`;

export const PokeTypeText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.textColors.textWhite};
  margin-left: 5px;
  bottom: 2px;
`;

export const PhotoPokemon = styled.View`
  bottom: 23px;
`;

export const Pokemon = styled.Image`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
  z-index: 1;
`;

export const PokeballWrapper  = styled.View`
  position: absolute;
  align-self: center;
  justify-content: center;
  top: 25px;
  left: 10px;
`;



