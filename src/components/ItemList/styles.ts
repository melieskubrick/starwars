import colors from '../../config/colors';
import styled from 'styled-components/native';
import typography from '../../config/typography';

export const Card = styled.View`
  padding: 24px;
  border-radius: 10px;
  background: ${colors.darkBlue};
  flex-direction: row;
  align-items: center;
`;

export const Right = styled.View`
  margin: 0 0 0 10px;
`;

export const Image = styled.View`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background: ${colors.primary};
  align-items: center;
  justify-content: center;
`;

export const TextImage = styled.Text`
  font-size: 24px;
  font-family: ${typography.regular};
  color: ${colors.darkBlue};
  text-align: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${typography.bold};
  color: ${colors.white};
`;

export const Description = styled.Text`
  font-size: 18px;
  font-family: ${typography.regular};
  color: ${colors.white};
`;
