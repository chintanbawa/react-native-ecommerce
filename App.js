import React from 'react';
import {NativeBaseProvider} from 'native-base';

import Routes from './src/routes';

const App = () => {
  return (
    <NativeBaseProvider disableContrastText>
      <Routes />
    </NativeBaseProvider>
  );
};

export default App;
