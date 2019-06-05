import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Image, Button, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const bg = require('../icons/noLight_bg.png');
let ScreenWidth = Dimensions.get("window").width;

class NoLight extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', width: ScreenWidth }}>
        <Header
          leftComponent={<Button
            icon={
              <Icon
                name="ios-arrow-round-back"
                size={30}
                color="white"
              />
            }
            onPress={() => this.props.navigation.navigate('City')}
            />}
          rightComponent={{ text: 'STATUS', style: { color: '#fff', fontSize: 15 } }}
          containerStyle={{ position: 'absolute', top: 0, paddingTop: 0, height: 70, width: ScreenWidth }}
        />
        <Image
          source={bg}
          style={{ width: 250, height: 350, borderRadius: 20 }}
        />
          <Text style={{color: 'white', paddingVertical: 10, fontSize: 25, textAlign: 'center' }} >Sorry for the inconvinience 😞</Text>
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.navigate('City')}
        />
      </View>
    );
  }
}

export default NoLight;