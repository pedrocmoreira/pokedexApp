import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TextInputProps } from 'react-native';

import {
  Container,
  InputContainer,
  InputText
} from './styles';
import { useTheme } from 'styled-components';

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

export function Input({ iconName, value, ...rest }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const theme = useTheme();


  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
 
    <Container>
      <InputContainer isFocused={isFocused}>
        <Feather
          name={iconName}
          size={16}
          color={theme.colors.textColors.textGrey}
        />
        <InputText
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        />
      </InputContainer>
    </Container>
  );
}