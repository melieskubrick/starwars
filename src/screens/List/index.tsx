import React from 'react';
import {StatusBar} from 'react-native';

import {Header} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import {FlatList} from 'react-native-gesture-handler';

import ItemList from '../../components/ItemList';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {ButtonBack} from './styles';

import colors from '../../config/colors';
import {Container} from '../../config/generalStyles';
import typography from '../../config/typography';
import {useFetch} from '../../services/api';
import Loading from '../../utils/Loading';
import Animation from '../../utils/Animation';
import Icon from 'react-native-vector-icons/Feather';

interface ListProps {
  title: string;
  params: Array<object>;
}

const List = ({title, params}: ListProps) => {
  const {data} = useFetch(params.urlData);

  const cutUrl = (url: string) => {
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
        leftComponent={
          <ButtonBack onPress={() => Actions.pop()}>
            <Icon name="arrow-left" color={colors.white} size={32} />
          </ButtonBack>
        }
        centerComponent={{
          text: `${title}`,
          style: {
            color: colors.white,
            fontSize: 20,
            fontFamily: typography.bold,
            marginTop: 10
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
