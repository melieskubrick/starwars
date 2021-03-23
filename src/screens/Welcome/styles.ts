import typography from '../../config/typography';
import styled from 'styled-components/native';
import colors from '../../config/colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.primary};
  justify-content: center;
  padding: 0 24px;
`;

export const Logo = styled.Image`
  align-self: center;
  height: 66px;
  width: 150px;
`;

export const Description = styled.Text`
  font-size: 18px;
  font-family: ${typography.regular};
  color: ${colors.white};
  text-align: center;
  margin: 24px 0;
`;
