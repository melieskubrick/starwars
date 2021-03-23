import React from 'react';

import {GestureResponderEvent, Text} from 'react-native';

import {
  Card,
  Title,
  Image,
  Detail,
  AlignHorizontal,
  Description,
} from './styles';

import Icon from 'react-native-vector-icons/Feather';
import colors from '../../config/colors';

interface CardSelectProps {
  title: string;
  description: string;
  color: string;
  icon: string;
  small?: boolean;
  onPress: (event: GestureResponderEvent) => void;
}

export const CardDetail: React.FC<CardSelectProps> = ({
  title,
  description,
  color,
  icon,
  onPress,
  small,
}) => {
  return (
    <Card bgColor={color} onPress={onPress}>
      <AlignHorizontal>
        <Detail>
          <Icon name={icon} color={colors.red} size={24} />
        </Detail>
        <Title>{title}</Title>
      </AlignHorizontal>
      <Description small={small}>{description}</Description>
    </Card>
  );
};