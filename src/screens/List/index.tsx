import React from 'react';
import {StatusBar} from 'react-native';

import {Header} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import {FlatList} from 'react-native-gesture-handler';

import {Logo} from './styles';
import ItemList from '../../components/ItemList';

import colors from '../../config/colors';
import {Container} from '../../config/generalStyles';
import typography from '../../config/typography';

interface ListProps {
  title: string;
}

const List: React.FC<ListProps> = ({title}) => {
  const data = [
    {id: 0, title: 'Luke Skywalker', description: 'Masculino'},
    {title: 'Luke Skywalker', description: 'Masculino'},
  ];

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
          data={data}
          renderItem={({item}) => (
            <ItemList
              title={item.title}
              description={item.description}
              imageText={'LS'}
              onPress={() => Actions.detail({title: item.title})}
            />
          )}
          keyExtractor={item => `${item.id}`}
        />
      </Container>
    </>
  );
};

export default List;
