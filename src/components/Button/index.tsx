import React from 'react';

import {GestureResponderEvent, Text} from 'react-native';
import {ButtonPrimary, Title} from './styles';

interface ButtonProps {
  title: string;
  btnColor: string;
  onPress: (event: GestureResponderEvent) => void;
}

export const Button: React.FC<ButtonProps> = ({title, btnColor, onPress}) => {
  return (
    <ButtonPrimary bgColor={btnColor} onPress={onPress}>
      <Title>{title}</Title>
    </ButtonPrimary>
  );
};
