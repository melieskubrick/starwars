import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

import {Header, Text} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import {FlatList} from 'react-native-gesture-handler';

import {Logo} from './styles';
import ItemList from '../../components/ItemList';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import colors from '../../config/colors';
import {Container} from '../../config/generalStyles';
import typography from '../../config/typography';
import {useFetch} from '../../services/api';
import Loading from '../../utils/Loading';
import Animation from '../../utils/Animation';

interface ListProps {
  title: string;
  params: Array<object>;
}

const List: React.FC<ListProps> = ({title, params}) => {
  const {data} = useFetch(params.urlData);
  const cutUrl = url => {
    var cutUrl = url.replace('http://swapi.dev/api/', '');
    return cutUrl;
  };

  if (!data) {
    return (
      <Container>
        <Loading visible={true} />
      </Container>
    );
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
        <Animation>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: getStatusBarHeight(true)}}
            data={data.results}
            renderItem={({item}) => (
              <ItemList
                title={item[params.name]}
                description={item[params.desc]}
                imageText={'LS'}
                onPress={() =>
                  Actions.detail({
                    title: item[params.name],
                    url: cutUrl(item.url),
                    typeOf: params.urlData,
                  })
                }
              />
            )}
            keyExtractor={item => `${item.name}`}
          />
        </Animation>
      </Container>
    </>
  );
};

export default List;
