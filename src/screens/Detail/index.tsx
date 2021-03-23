import React from 'react';
import {StatusBar} from 'react-native';

import {Header} from 'react-native-elements';

import typography from '../../config/typography';
import colors from '../../config/colors';
import {Container} from '../../config/generalStyles';

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
      </Container>
    </>
  );
};

export default Detail;
