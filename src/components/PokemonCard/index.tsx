import React from 'react';
import { useTheme } from 'styled-components';

import GrassSvg from '../../assets/types/grass.svg';
import PoisonSvg from '../../assets/types/poison.svg';

import {
  Container,
  CardContainer,
  InfoContainer,
  PokeNumber,
  PokeName,
  PokeTypeContainer,
  PokeType,
  PokeTypeText,
} from './styles';

export function PokemonCard() {
  const theme = useTheme();   

  return (
    <Container>
      <CardContainer>
        <InfoContainer>
          <PokeNumber># 001</PokeNumber>
          <PokeName>Bulbasaur</PokeName>
          <PokeTypeContainer>
            <PokeType>
              <GrassSvg fill={theme.colors.textColors.textWhite}/> 
              <PokeTypeText>Grass</PokeTypeText>
            </PokeType>
            <PokeType>
              <PoisonSvg fill={theme.colors.textColors.textWhite}/> 
              <PokeTypeText>Grass</PokeTypeText>
            </PokeType>
          </PokeTypeContainer>
        </InfoContainer>
      </CardContainer>
    </Container>
  );
}