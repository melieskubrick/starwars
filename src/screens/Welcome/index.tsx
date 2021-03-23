import React from 'react';
import {Container, Description, Logo} from './styles';
import {StatusBar} from 'react-native';
import colors from '../../config/colors';
import {Button} from '../../components/Button';

const Welcome = () => {
  return (
    <Container>
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
        onPress={() => console.log('Começar')}
        btnColor={colors.yellow}
      />
    </Container>
  );
};

export default Welcome;
