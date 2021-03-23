import colors from '../../config/colors';
import typography from '../../config/typography';
import styled from 'styled-components/native';

export const ButtonPrimary = styled.TouchableOpacity`
  background: ${({bgColor}) => bgColor};
  height: 60px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${typography.bold};
  color: ${colors.primary};
`;
