import React, { useState } from 'react';
import { Keyboard, LogBox, TouchableWithoutFeedback } from 'react-native';
import PokeballSvg from '../../assets/patterns/pokeball.svg';
import { Input } from '../../components/Input';
import { PokemonCard } from '../../components/PokemonCard';

import {
  Container,
  ApplicationTitleContainer,
  ApplicationTitle,
  ApplocationSubTitle,
  PokeballWrapper,
  InputContainer,  
  PokemonCardWrapper,
} from './styles';

LogBox.ignoreLogs(['expo-app-loading is deprecated in favor of expo-splash-screen:']);

export function Home() {

  const [ search, setSearch ] = useState('');


  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          autoCorrect={false}
          onChangeText={setSearch}
          value={search}
        />  
      </InputContainer>

    <PokemonCardWrapper>
      <PokemonCard/>
    </PokemonCardWrapper>
    </Container>
    </TouchableWithoutFeedback>
  )
}