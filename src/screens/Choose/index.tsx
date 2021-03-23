import React from 'react';

import {Header} from 'react-native-elements';

import {Container} from '../../config/generalStyles';
import {Logo, Wrap, List} from './styles';
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
        <List>
          <Wrap>
            <CardSelect
              color={colors.red}
              title={'PERSONAGENS'}
              icon={require('../../assets/images/personagens.png')}
              onPress={() => console.log()}
              small
            />
            <CardSelect
              color={colors.blue}
              title={'PLANETAS'}
              icon={require('../../assets/images/planetas.png')}
              onPress={() => console.log()}
            />
            <CardSelect
              color={colors.yellow}
              title={'NAVES'}
              icon={require('../../assets/images/naves.png')}
              onPress={() => console.log()}
            />
            <CardSelect
              color={colors.purple}
              title={'FILMES'}
              icon={require('../../assets/images/filmes.png')}
              onPress={() => console.log()}
            />
            <CardSelect
              color={colors.orange}
              title={'VEÍCULOS'}
              icon={require('../../assets/images/veiculos.png')}
              onPress={() => console.log()}
            />
            <CardSelect
              color={colors.green}
              title={'ESPÉCIES'}
              icon={require('../../assets/images/especies.png')}
              onPress={() => console.log()}
            />
          </Wrap>
        </List>
      </Container>
    </>
  );
};

export default Choose;
