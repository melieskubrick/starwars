import React from 'react';

import {Header} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

import {Logo, Wrap, List} from './styles';

import {Container} from '../../config/generalStyles';
import colors from '../../config/colors';
import {CardSelect} from '../../components/CardSelect';

import {cards} from './cards';

const Choose = () => {
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
