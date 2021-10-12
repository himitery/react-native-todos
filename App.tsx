import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';

import Main from './src/Main';
import AsyncStorage from '@react-native-async-storage/async-storage';

if (__DEV__) {
  AsyncStorage.clear();
}

const App: React.VFC = () => {
  return (
    <NavigationContainer>
      <RecoilRoot>
        <Main />
      </RecoilRoot>
    </NavigationContainer>
  );
};

export default App;
