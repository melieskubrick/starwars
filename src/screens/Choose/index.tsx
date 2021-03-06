import React from 'react';

import {Header} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

import {Logo, Wrap, List, ButtonBack} from './styles';
import Icon from 'react-native-vector-icons/Feather';

import {Container} from '../../config/generalStyles';
import colors from '../../config/colors';
import {CardSelect} from '../../components/CardSelect';

import {cards} from './cards';

const Choose = () => {
  return (
    <>
      <Header
        leftComponent={
          <ButtonBack onPress={() => Actions.pop()}>
            <Icon name="arrow-left" color={colors.white} size={32} />
          </ButtonBack>
        }
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
            {cards.map(item => (
              <CardSelect
                color={item.color}
                title={item.name}
                icon={item.icon}
                onPress={() =>
                  Actions.list({title: item.name, params: item.params})
                }
                smallTitle={item.small}
              />
            ))}
          </Wrap>
        </List>
      </Container>
    </>
  );
};

export default Choose;
