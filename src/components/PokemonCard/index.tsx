import React from 'react';
import { useTheme } from 'styled-components';

import PokeballSvg from '../../assets/patterns/pokeballWhite.svg';
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
  PhotoPokemon,
  Pokemon,
  PokeballWrapper,
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
              <GrassSvg fill={theme.colors.textColors.textWhite} />
              <PokeTypeText>Grass</PokeTypeText>
            </PokeType>
            <PokeType>
              <PoisonSvg fill={theme.colors.textColors.textWhite} />
              <PokeTypeText>Poison</PokeTypeText>
            </PokeType>
          </PokeTypeContainer>
        </InfoContainer>
        <PhotoPokemon>
          <Pokemon source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' }} />
          <PokeballWrapper>
            <PokeballSvg  height={130} width={130} style={{ opacity: .3 }} fill={theme.colors.textColors.textNumber}/>
          </PokeballWrapper>
        </PhotoPokemon>
      </CardContainer>
    </Container>
  );
}