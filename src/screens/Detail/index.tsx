import React, {useEffect, useState} from 'react';
import {StatusBar, FlatList} from 'react-native';

import {Header} from 'react-native-elements';
import moment from 'moment';
import 'moment/locale/pt-br';

import {List, Wrap, ButtonBack} from './styles';
import {CardDetail} from '../../components/CardDetail';
import {useFetch, api} from '../../services/api';
import Loading from '../../utils/Loading';
import Animation from '../../utils/Animation';
import Icon from 'react-native-vector-icons/Feather';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import typography from '../../config/typography';
import colors from '../../config/colors';
import {Container} from '../../config/generalStyles';

import {persons} from './types/persons';
import {vehicles} from './types/vehicles';
import {planets} from './types/planets';
import {starships} from './types/starships';
import {films} from './types/films';
import {species} from './types/species';
import {Actions} from 'react-native-router-flux';

import {useSelector} from 'react-redux';

interface DetailProps {
  title: string;
  url: string;
  typeOf: string;
  indexRow: number;
}

const Detail = ({title, url, typeOf, indexRow}: DetailProps) => {
  const [itemInternalData, setItemInternal] = useState('');

  const ITEM_DATA = useSelector(
    (state: {ItemData: any}) => state.ItemData.itemData,
  );
  const DATA = ITEM_DATA[indexRow];
  const {data: planet} = useFetch(DATA.homeworld);

  useEffect(() => {
    console.log('planet', planet);
  }, []);

  const itemInternal = (urlItem: string) => {
    api
      .get(urlItem)
      .then(response => setItemInternal(response.data))
      .catch(err => {
        console.error('ops! ocorreu um erro' + err);
      });
    return itemInternalData;
  };

  if (!ITEM_DATA) {
    return (
      <Container>
        <Loading visible={true} />
      </Container>
    );
  }

  const checkIsUrl = (text: string) => {
    if (text.indexOf('http://') !== -1) return true;
  };

  const getData = () => {
    if (typeOf === 'people') return persons;
    if (typeOf === 'planets') return planets;
    if (typeOf === 'starships') return starships;
    if (typeOf === 'films') return films;
    if (typeOf === 'vehicles') return vehicles;
    if (typeOf === 'species') return species;
  };

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
            marginTop: 10,
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
            data={getData()}
            contentContainerStyle={{flexWrap: 'wrap'}}
            renderItem={({item}) => (
              <CardDetail
                title={item.name}
                description={
                  planet
                    ? item.param === 'homeworld'
                      ? planet.name
                      : DATA[item.param]
                    : DATA[item.param]
                }
                // description={item.param}
                color={colors.darkBlue}
                icon={'tag'}
                onPress={() => console.log}
              />
            )}
          />
        </Animation>
      </Container>
    </>
  );
};

export default Detail;
