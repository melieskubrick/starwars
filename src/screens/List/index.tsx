import React from 'react';
import {StatusBar} from 'react-native';

import {Header} from 'react-native-elements';

import {Logo} from './styles';
import {Container} from '../../config/generalStyles';
import colors from '../../config/colors';
import ItemList from '../../components/ItemList';
import {FlatList} from 'react-native-gesture-handler';
import typography from '../../config/typography';

const List = ({title}) => {
  const data = [{title: 'Luke Skywalker', description: 'Masculino'}, {title: 'Luke Skywalker', description: 'Masculino'}];

  return (
    <>
      <Header
        centerComponent={{ text: `${title}`, style: { color: colors.white, fontSize: 18, fontFamily: typography.bold } }}
        containerStyle={{
          backgroundColor: colors.primary,
          borderBottomWidth: 0,
        }}
      />
      <Container>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor={colors.darkBlue}
        />
        <FlatList
          data={data}
          renderItem={({item}) => (
            <ItemList title={item.title} description={item.description} imageText={'LS'} />
          )}
        />
      </Container>
    </>
  );
};

export default List;
