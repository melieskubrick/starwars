import React from 'react';
import {StatusBar} from 'react-native';

import {Description, Logo, Center} from './styles';
import {Container} from '../../config/generalStyles';
import colors from '../../config/colors';
import {Button} from '../../components/Button';
import {Actions} from 'react-native-router-flux';

const Welcome = () => {
  return (
    <Container>
      <Center>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor={colors.darkBlue}
        />
        <Logo source={require('../../assets/images/logo.png')} />
        <Description>
          Seja bem vindo ao universo Star Wars. Pesquise personagens, planetas,
          naves e filmes!
        </Description>
        <Button
          title={'Começar!'}
          onPress={() => Actions.choose()}
          btnColor={colors.yellow}
        />
      </Center>
    </Container>
  );
};

export default Welcome;
