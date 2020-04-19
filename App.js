import React from 'react';
import {
  StatusBar,
} from 'react-native';
import {Provider} from 'react-redux';

import store from './src/services/store';
import ProfileScreen from './src/screens/ProfileScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor="#e15858" />
      <Provider store={store}>
        <ProfileScreen />
      </Provider>
    </>
  );
};

export default App;
