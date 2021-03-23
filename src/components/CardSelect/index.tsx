import React from 'react';

import {GestureResponderEvent, Text} from 'react-native';

import {Card, Title, Image} from './styles';

interface CardSelectProps {
  title: string;
  color: string;
  icon: string;
  onPress: (event: GestureResponderEvent) => void;
}

export const CardSelect: React.FC<CardSelectProps> = ({
  title,
  color,
  icon,
  onPress,
}) => {
  return (
    <Card bgColor={color} onPress={onPress}>
      <Title>{title}</Title>
      <Image source={icon} />
    </Card>
  );
};
