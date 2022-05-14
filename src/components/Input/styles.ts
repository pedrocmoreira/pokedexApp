import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
`;

export const InputContainer = styled.View<ContainerProps>`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: ${RFValue(16)}px;
  padding: 15px 25px;
  border-radius: 10px;

  ${({ isFocused, theme }) => isFocused && css`
    background-color: ${isFocused ? theme.colors.backgroundColorsComponents.pressedInput
      : theme.colors.backgroundColorsComponents.inputDefault
    };
  `}

`;

export const InputText = styled(TextInput)`
  color: ${({ theme }) => theme.colors.textColors.textGrey};
  font-family: ${({ theme }) => theme.fonts.regular}; 
`;