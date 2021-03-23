import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';

import {Header} from 'react-native-elements';

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

interface DetailProps {
  title: string;
  url: string;
  typeOf: string;
}

const Detail: React.FC<DetailProps> = ({title, url, typeOf}) => {
  const {data} = useFetch(url);
  const [internalItem, setInternalItem] = useState('');

  const internalDetailItem = (url: string) => {
    api
      .get(url)
      .then(response => setInternalItem(response.data))
      .catch(err => {
        console.error('ops! ocorreu um erro' + err);
      });
    return internalItem;
  };

  if (!data) {
    return (
      <Container>
        <Loading visible={true} />
      </Container>
    );
  }

  const checkIsUrl = (text: string) => {
    return text.indexOf('http://');
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
            {typeOf === 'people' ? (
              persons.map(item => (
                <CardDetail
                  title={item.name}
                  description={`${
                    checkIsUrl(data[item.param]) !== -1
                      ? internalDetailItem(data[item.param]).name ||
                        `carregando`
                      : data[item.param]
                  }`}
                  color={colors.darkBlue}
                  icon={item.icon}
                  onPress={() => console.log}
                  small
                />
              ))
            ) : typeOf === 'planets' ? (
              planets.map(item => (
                <CardDetail
                  title={item.name}
                  description={data[item.param]}
                  color={colors.darkBlue}
                  icon={item.icon}
                  onPress={() => console.log}
                  small
                />
              ))
            ) : typeOf === 'vehicles' ? (
              vehicles.map(item => (
                <CardDetail
                  title={item.name}
                  description={data[item.param]}
                  color={colors.darkBlue}
                  icon={item.icon}
                  onPress={() => console.log}
                  small
                />
              ))
            ) : (
              <></>
            )}
          </Wrap>
        </List>
      </Container>
    </>
  );
};

export default Detail;
