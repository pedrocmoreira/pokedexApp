import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
 `;

 export const PokeballWrapper = styled.View`
   margin-top: ${getStatusBarHeight() - 250}px;
   align-self: center;
 `;

export  const ApplicationTitleContainer = styled.View`
  padding: 0px 40px;
  top: ${RFValue(-85)}px;
`;

export const ApplicationTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(32)}px;
`;

export const ApplocationSubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textColors.textGray};
  font-size: ${RFValue(16)}px;
`;


export const InputContainer = styled.View`
  padding: 0px 40px;
  top: ${RFValue(-65)}px;
`;