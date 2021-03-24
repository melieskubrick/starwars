import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';

import {Header} from 'react-native-elements';
import moment from 'moment';
import 'moment/locale/pt-br';

import typography from '../../config/typography';
import colors from '../../config/colors';
import {Container} from '../../config/generalStyles';

import {List, Wrap} from './styles';
import {CardDetail} from '../../components/CardDetail';
import {useFetch, api} from '../../services/api';
import Loading from '../../utils/Loading';
import Animation from '../../utils/Animation';

import {persons} from './persons';
import {vehicles} from './vehicles';
import {planets} from './planets';
import {starships} from './starships';
import {films} from './films';
import {species} from './species';

interface DetailProps {
  title: string;
  url: string;
  typeOf: string;
}

const Detail: React.FC<DetailProps> = ({title, url, typeOf}) => {
  const {data} = useFetch(url);
  const [itemInternalData, setItemInternal] = useState('');

  const itemInternal = (urlItem: string) => {
    api
      .get(urlItem)
      .then(response => setItemInternal(response.data))
      .catch(err => {
        console.error('ops! ocorreu um erro' + err);
      });
    return itemInternalData;
  };

  if (!data) {
    return (
      <Container>
        <Loading visible={true} />
      </Container>
    );
  }

  const checkIsUrl = (text: string) => {
    if (text.indexOf('http://') !== -1) return true;
  };

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
        <List>
          <Wrap>
            {typeOf === 'people' &&
              persons.map(item => (
                <CardDetail
                  title={item.name}
                  description={
                    checkIsUrl(data[item.param])
                      ? itemInternal(data[item.param]).name || 'carregando'
                      : data[item.param]
                  }
                  color={colors.darkBlue}
                  icon={item.icon}
                  onPress={() => console.log}
                />
              ))}

            {typeOf === 'planets' &&
              planets.map(item => (
                <CardDetail
                  title={item.name}
                  description={data[item.param]}
                  color={colors.darkBlue}
                  icon={item.icon}
                  onPress={() => console.log}
                />
              ))}

            {typeOf === 'starships' &&
              starships.map(item => (
                <CardDetail
                  title={item.name}
                  description={data[item.param]}
                  color={colors.darkBlue}
                  icon={item.icon}
                  onPress={() => console.log}
                />
              ))}

            {typeOf === 'films' &&
              films.map(item => (
                <CardDetail
                  title={item.name}
                  description={
                    item.date
                      ? moment(data[item.param]).format('d MMMM YYYY')
                      : checkIsUrl(`${data[item.param]}`)
                      ? data[item.param].length
                      : data[item.param]
                  }
                  color={colors.darkBlue}
                  icon={item.icon}
                  onPress={() => console.log}
                />
              ))}

            {typeOf === 'vehicles' &&
              vehicles.map(item => (
                <CardDetail
                  title={item.name}
                  description={data[item.param]}
                  color={colors.darkBlue}
                  icon={item.icon}
                  onPress={() => console.log}
                />
              ))}

            {typeOf === 'species' &&
              species.map(item => (
                <CardDetail
                  title={item.name}
                  description={
                    data[item.param] === null
                      ? 'Nenhum'
                      : typeof data[item.param] === 'object'
                      ? data[item.param].length
                      : checkIsUrl(data[item.param])
                      ? itemInternal(data[item.param]).name || 'Carregando'
                      : data[item.param]
                  }
                  color={colors.darkBlue}
                  icon={item.icon}
                  onPress={() => console.log}
                />
              ))}
          </Wrap>
        </List>
      </Container>
    </>
  );
};

export default Detail;
