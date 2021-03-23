import React from 'react';

import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from 'react-native-elements';

import {Container} from '../../config/generalStyles';
import {Logo, Wrap} from './styles';
import colors from '../../config/colors';
import {CardSelect} from '../../components/CardSelect';

const Choose: React.FC = () => {
  return (
    <>
      <Header
        centerComponent={
          <Logo source={require('../../assets/images/logo.png')} />
        }
        containerStyle={{
          backgroundColor: colors.primary,
          borderBottomWidth: 0,
        }}
      />
      <Container>
        <Wrap>
          <CardSelect color={colors.yellow} title={'PERSONAGENS'} />
          <CardSelect color={colors.yellow} title={'PERSONAGENS'} />
        </Wrap>
      </Container>
    </>
  );
};

export default Choose;
