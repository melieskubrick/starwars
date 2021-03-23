import typography from '../../config/typography';
import colors from '../../config/colors';
import styled from 'styled-components/native';

export const Card = styled.TouchableOpacity`
  padding: 32px;
  border-radius: 10px;
  background: ${({bgColor}) => bgColor};
  width: 44%;
  margin: 6px
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${typography.bold};
  color: ${colors.white};
  text-align: center;
  margin: 0 0 16px 0;
`;

export const Image = styled.Image``;
