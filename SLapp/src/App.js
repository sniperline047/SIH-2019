import React, {Component} from 'react';
import { View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Load from './Components/Load/Load.js';
import Nav from './Components/Nav/Nav.js';

const RootSwitch = createSwitchNavigator(
  { 
    Load: Load,
    Nav: Nav,
  },
  {
    headerMode: 'none',
  },
  {
    initialRouteName: 'Load',
  }
);

const AppContainer = createAppContainer(RootSwitch);

class App extends React.Component {
  render() {
    return <AppContainer style={{ display: 'none' }}/>
  }
}

export default App;