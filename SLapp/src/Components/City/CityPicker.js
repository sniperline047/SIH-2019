import React, { Component } from 'react';
import { Alert, ImageBackground, View, Text, Dimensions, Picker } from 'react-native';
import { Badge, Button } from 'react-native-elements';
import { CityList } from './CityList.js';
import back from '../icons/light_bg.jpg';

let ScreenHeight = Dimensions.get("window").height; 
let ScreenWidth = Dimensions.get("window").width;

class CityPicker extends React.Component {
  constructor() {
    super();
    this.state = {
      viewCity: false,
      selectedState: '',
      selectedCity: '',
      latitude: null,
      longitude: null,
      error: null,
      address: 3,
    }
  }

  loadStateList = () => { 
    return CityList.map((data,index) => (<Picker.Item label={data.stateName} value={index+1} key={index} />));
  }

  loadCityList = () => {
    return CityList[this.state.selectedState-1].city.map((data,index) => (<Picker.Item label={data} value={index} key={index} />)); 
  }

  submitCity = () => {
    if (this.state.selectedState>0) {    
      if (CityList[this.state.selectedState-1].projectStatus[this.state.selectedCity] === 1) {
        this.props.navigation.navigate('Light', { city: this.state.selectedCity });
      } else if (CityList[this.state.selectedState-1].projectStatus[this.state.selectedCity] === 0) {
        this.props.navigation.navigate('NoLight'); 
      } 
    }
    else {
      Alert.alert("Select a city!!");
    }
  }

  getAddress = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { timeout: 10000, maximumAge: 1000 },
    );
    fetch('https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDO9A9fuYcZOOAJuHR6CW1DIvUYYYePOdI&address='+this.state.latitude +','+this.state.longitude)
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({address:3});
        Alert.alert('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson.result[0].address_components[0].long_name));
    });
  }

  render() {
    return (
      <ImageBackground source={back} style={{width: '100%', height: ScreenHeight-60, top: 60 }}>
        <View style={{ alignItems: 'center', justifyContent: 'center', width: ScreenWidth, top: 0 }}>
          <View style={{ padding: 10, marginVertical: 20, backgroundColor: "rgba(240,240,255,0.7)", borderRadius: 10, width: ScreenWidth-100 }}>
            <Text style={{color: "black", fontSize:25, textAlign: 'center', paddingBottom: 20 }} >Where Do you live ?</Text>
            <Text style={{color: "blue", fontSize:18}} >State</Text>
            <Picker
              selectedValue={this.state.selectedState}
              style={{ height: 100, width: 200 }}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({selectedState: itemValue});
                this.setState({viewCity: true});
              }
            }>
              <Picker.Item label='---Select State---' value={0} />
              {this.loadStateList()}
            </Picker>
            {
              this.state.viewCity ? 
                <View>
                  <Text style={{color: "blue", fontSize:18}} >City</Text>
                  <Picker
                    selectedValue={this.state.selectedCity}
                    style={{ height: 100, width: 200 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({selectedCity: itemValue})
                  }>
                    <Picker.Item label='---Select City---' value={0} />
                    {this.loadCityList()}
                  </Picker>
                </View>
              : <View/>
            }
          </View>
          <Button
            title="SUMBIT"
            containerStyle={{ height: 35, width: 180 }}
            buttonStyle={{ opacity: 0.8 }}
            onPress={this.submitCity}
          />
          <Badge value="--OR--" status="success" containerStyle={{ paddingTop: 20 }} badgeStyle={{height: 35, width: 80}} textStyle={{fontSize: 20}} />
          <Button
            title="AUTO-DETECT"
            buttonStyle={{ opacity: 0.8 }}
            containerStyle={{ marginTop: 20, height: 35, width: 180 }}
            onPress={() => this.props.navigation.navigate('Light', {city: this.state.address})}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default CityPicker;
