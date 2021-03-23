import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Choose from './screens/Choose';
import {Logo} from './screens/Choose/styles';
import Welcome from './screens/Welcome';

const App = () => (
  <Router>
    <Stack key="root">
      <Scene initial key="welcome" component={Welcome} hideNavBar />
      <Scene key="choose" component={Choose} hideNavBar />
    </Stack>
  </Router>
);

export default App;
