import React, { useEffect } from 'react';
import {StatusBar} from 'react-native';

import {Header, Text} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import {FlatList} from 'react-native-gesture-handler';

import {Logo} from './styles';
import ItemList from '../../components/ItemList';

import colors from '../../config/colors';
import {Container} from '../../config/generalStyles';
import typography from '../../config/typography';
import { useFetch } from '../../services/api';

interface ListProps {
  title: string;
  params: Array<object>;
}

const List: React.FC<ListProps> = ({title, params}) => {

  const { data } = useFetch(params.urlData);

  if (!data) {
    return <Text>Carregando...</Text>;
  }

  return (
    <>
      <Header
        centerComponent={{
          text: `${title}`,
          style: {
            color: colors.white,
            fontSize: 18,
            fontFamily: typography.bold,
          },
        }}
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
          data={data.results}
          renderItem={({item}) => (
            <ItemList
              title={item[params.name]}
              description={item[params.desc]}
              imageText={'LS'}
              onPress={() => Actions.detail({title: item[params.name]})}
            />
          )}
          keyExtractor={item => `${item.name}`}
        />
      </Container>
    </>
  );
};

export default List;
