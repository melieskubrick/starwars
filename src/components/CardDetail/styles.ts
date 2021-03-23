import typography from '../../config/typography';
import colors from '../../config/colors';
import styled from 'styled-components/native';

export const Card = styled.TouchableOpacity`
  /* padding: 24px; */
  border-radius: 10px;
  background: ${({bgColor}) => bgColor};
  width: 44%;
  margin: 6px;
  justify-content: space-between;
`;

export const AlignHorizontal = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Detail = styled.View`
  height: 70px;
  width: 70px;
  background: ${colors.darkGray};
  border-top-left-radius: 10px;
  border-bottom-right-radius: 80px;
  padding: 16px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${typography.bold};
  color: ${colors.white};
  text-align: right;
  margin: 24px 24px 0 0;
`;

export const Description = styled.Text`
  font-size: ${({small}) => (small ? 50 : 60)}px;
  font-family: ${typography.light};
  color: ${colors.white};
  text-align: center;
  margin: 10px 24px 24px 24px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 100px;
  width: 100px;
`;
