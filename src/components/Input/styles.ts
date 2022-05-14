import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;
  `;

export const InputContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundColors.inputBackground};
  font-size: ${RFValue(16)}px;
  padding: 20px 25px;
  border-radius: 10px;
  `;

export const InputText = styled(TextInput)`
color: ${({ theme }) => theme.colors.textColors.textGray};
font-family: ${({ theme }) => theme.fonts.regular};

`;