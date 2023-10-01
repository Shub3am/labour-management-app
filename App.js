import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  StatusBar,
} from 'react-native';

const App = () => {
  console.log(Platform.OS);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to S.S Furniture Steel Mart</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    height: 100,
    width: 100,
  }
});

export default App;
