import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Choose from './screens/Choose';
import Welcome from './screens/Welcome';
import List from './screens/List';
import Detail from './screens/Detail';

const App = () => (
  <Router>
    <Stack key="root">
      <Scene initial key="welcome" component={Welcome} hideNavBar />
      <Scene key="choose" component={Choose} hideNavBar />
      <Scene key="list" component={List} hideNavBar />
      <Scene key="detail" component={Detail} hideNavBar />
    </Stack>
  </Router>
);

export default App;
