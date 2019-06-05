import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Header, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

import Light from '../Light/Light.js';
import CityPicker from '../City/CityPicker.js';
import NoLight from '../Light/NoLight.js';
import Report from '../Report/Report.js';

let ScreenWidth = Dimensions.get("window").width;

const LightSwitch = createSwitchNavigator(
  { 
    City: CityPicker,
    Light: Light,
    NoLight: NoLight,
    Report: Report,
  },
  {
    initialRouteName: 'City',
  }
);

const AppContainer = createAppContainer(LightSwitch);

class Live extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
        <Header
          leftComponent={ <Button 
            icon={ <Icon name="ios-arrow-round-back" size={30} color="white"/> }
            onPress={() => this.props.navigation.navigate('Home')} />
          }
          rightComponent={{ text: 'CITY', style: { color: '#fff', fontSize: 15 } }}
          containerStyle={{ position: 'absolute', top: 0, paddingTop: 0, height: 60, width: ScreenWidth }}
        />
        <AppContainer style={{ display: 'none' }}/>
      </View>
    );
  }
}

export default Live;