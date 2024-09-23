import React from 'react';
import {Text, View} from 'react-native';
import {TextComponent} from './src/components';
import {globalStyles} from './src/styles/globalStyles';

const App = () => {
  return (
    <View style={[globalStyles.container, globalStyles.center]}>
      <TextComponent text=" hello world" />
    </View>
  );
};

export default App;
