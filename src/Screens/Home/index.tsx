import React from 'react';
import { LogBox } from 'react-native';
import PokeballSvg from '../../assets/patterns/pokeball.svg';
import { Input } from '../../components/Input';

import {
  Container,
  ApplicationTitleContainer,
  ApplicationTitle,
  ApplocationSubTitle,
  PokeballWrapper,
InputContainer,  
} from './styles';

LogBox.ignoreLogs(['expo-app-loading is deprecated in favor of expo-splash-screen:']);

export function Home() {

  return (
    <Container>
      <PokeballWrapper>
        <PokeballSvg style={{ opacity: .1, top: 10 }} height={414} width={414} />
      </PokeballWrapper>
      <ApplicationTitleContainer>
        <ApplicationTitle>Pokédex</ApplicationTitle>
        <ApplocationSubTitle>Search for Pokémon by name or using the National Pokédex number.</ApplocationSubTitle>
      </ApplicationTitleContainer>
      <InputContainer>
        <Input
          placeholder='What Pokémon are you looking for?'
          iconName='search'
        />
      </InputContainer>
    </Container>
  )
}