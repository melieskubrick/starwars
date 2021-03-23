import typography from '../../config/typography';
import colors from '../../config/colors';
import styled from 'styled-components/native';

export const Card = styled.View`
  padding: 32px;
  border-radius: 10px;
  background: ${({bgColor}) => bgColor};
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${typography.bold};
  color: ${colors.white};
  text-align: center;
  margin: 24px 0;
`;

export const Image = styled.Image``;
