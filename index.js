/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Main from './App';
import { NavigationContainer } from '@react-navigation/native';
import {name as appName} from './app.json';

const App = () => {
    return (
      <NavigationContainer>
        <Main/>
      </NavigationContainer>
    )
  }

AppRegistry.registerComponent(appName, () => App);
