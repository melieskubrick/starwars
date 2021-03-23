import React from 'react';

import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from 'react-native-elements';

import {Container} from '../../config/generalStyles';
import {Logo} from './styles';
import colors from '../../config/colors';

const Choose: React.FC = () => {
  return (
    <>
      <Header
        centerComponent={
          <Logo source={require('../../assets/images/logo.png')} />
        }
        containerStyle={{
          backgroundColor: colors.primary,
          borderBottomWidth: 0
        }}
      />
      <Container>
        <SafeAreaView></SafeAreaView>
      </Container>
    </>
  );
};

export default Choose;
