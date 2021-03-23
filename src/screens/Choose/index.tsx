import React from 'react';

import {Header} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

import {Logo, Wrap, List} from './styles';

import {Container} from '../../config/generalStyles';
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
              onPress={() => Actions.list({title: 'PERSONAGENS', dataUrl: 'people'})}
              small
            />
            <CardSelect
              color={colors.blue}
              title={'PLANETAS'}
              icon={require('../../assets/images/planetas.png')}
              onPress={() => Actions.list({title: 'PLANETAS', dataUrl: 'planets'})}
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
