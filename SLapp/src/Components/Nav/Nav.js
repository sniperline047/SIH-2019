import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../Home/Home.js';
import Contact from '../Contact/Contact.js';
import About from '../About/About.js';
import Live from '../Live/Live.js';
import Team from '../Team/Team.js';
import Feedback from '../Feedback/Feedback.js';

const HomeStack = createStackNavigator(
  {
    Home: Home,
    Contact: Contact,
  },
  {
    headerMode: 'none',
  },
  {
    initialRouteName: 'Load',
  }
);

const Navigation = createBottomTabNavigator(
  { 
    Home: {
      screen: HomeStack,
    },
    About: {
      screen: About,
    },
    'Live Light': {
      screen: Live,
    },
    Feedback: {
      screen: Feedback,
    },
    Team: {
      screen: Team,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        } else if (routeName === 'About') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        }else if (routeName === 'Live Light') {
          iconName = `ios-bulb`;
        }else if (routeName === 'Feedback') {
          iconName = `ios-clipboard`;
        }else if (routeName === 'Team') {
          iconName = `ios-contacts`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      style: {
        backgroundColor: 'black',
      },
      labelStyle: {
        fontSize: 14,
      },
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppCont = createAppContainer(Navigation);

class Nav extends React.Component {
  render() {
    return <AppCont style={{backgroundColor: '#000'}} />;
  }
}

export default Nav;