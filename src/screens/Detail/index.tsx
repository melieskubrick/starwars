import React from 'react';
import {StatusBar} from 'react-native';

import {Header} from 'react-native-elements';

import typography from '../../config/typography';
import colors from '../../config/colors';
import {Container} from '../../config/generalStyles';

import {List, Wrap} from './styles';
import {CardDetail} from '../../components/CardDetail';

interface DetailProps {
  title: string;
}

const Detail: React.FC<DetailProps> = ({title}) => {
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
            <CardDetail
              title="Title"
              description="172"
              color={colors.darkBlue}
              icon={'user'}
              onPress={() => console.log}
              small
            />
            <CardDetail
              title="Title"
              description="172"
              color={colors.darkBlue}
              icon={'user'}
              onPress={() => console.log}
              small
            />
          </Wrap>
        </List>
      </Container>
    </>
  );
};

export default Detail;
