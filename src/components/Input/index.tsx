import React from 'react';
import { Feather } from '@expo/vector-icons';
import { TextInputProps } from 'react-native';

import {
  Container,
  InputContainer,
  InputText
} from './styles';
import { useTheme } from 'styled-components';

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name']
}

export function Input({ iconName, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container>
      <InputContainer>
        <Feather
          name={iconName}
          size={16}
          color={theme.colors.textColors.textGray}
        />
        <InputText
          {...rest}
        />
      </InputContainer>

    </Container>
  );
}