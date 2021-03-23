import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Welcome from './screens/Welcome';

const App = () => (
  <Router>
    <Stack key="root">
      <Scene ititial key="welcome" component={Welcome} hideNavBar />
    </Stack>
  </Router>
);

export default App;
