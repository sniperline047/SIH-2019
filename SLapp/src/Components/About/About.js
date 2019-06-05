import React from 'react';
import { View, Text, Dimensions, ScrollView, Linking, StyleSheet, Alert } from 'react-native';
import { Button, Header, Avatar, SocialIcon, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from "react-native-web-swiper";

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;

class About extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Header
          leftComponent={ <Button 
            icon={ <Icon name="ios-arrow-round-back" size={25} color="white"/> }
            onPress={() => this.props.navigation.navigate('Home')} />
          }
          rightComponent={{ text: 'About', style: { color: '#fff', fontSize: 15 } }}
          containerStyle={{ position: 'absolute', top: 0, paddingTop: 0, height: 60, width: ScreenWidth, marginBottom: 3  }}
        />
        <Text style={{top:80, color: 'white',textAlign: 'center',fontSize: 30}} >SMART STREET LIGHT SOLUTIONS</Text>
        <View style={{top:110, height:320}} >
          <Swiper>
            <View style={[styles.slideContainer,styles.slide1]}>
              <Card
                title='15'
                titleStyle={{ fontSize: 30 }}
                containerStyle={{  alignItems: 'center', opacity: 0.8, width: ScreenWidth-70, height: 220 }}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Icon
                    name='ios-trophy'
                    type='ionicon'
                    color='blue'
                    size={60}
                  />
                  <Text style={[styles.text]}>
                    Smart Cities
                  </Text>
                </View>
              </Card>
            </View>
            <View style={[styles.slideContainer,styles.slide2]}>
              <Card
                title='154'
                titleStyle={{ fontSize: 30 }}
                containerStyle={{  alignItems: 'center', opacity: 0.8, width: ScreenWidth-70, height: 220 }}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Icon
                    name='ios-rocket'
                    type='ionicon'
                    color='blue'
                    size={60}
                  />
                  <Text style={[styles.text]}>
                    Targeted Street Lights
                  </Text>
                </View>
              </Card>
            </View>
            <View style={[styles.slideContainer,styles.slide3]}>
              <Card
                title='60'
                titleStyle={{ fontSize: 30 }}
                containerStyle={{  alignItems: 'center' , opacity: 0.8, width: ScreenWidth-70, height: 220 }}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Icon
                    name='ios-bonfire'
                    type='ionicon'
                    color='blue'
                    size={60}
                  />
                  <Text style={[styles.text]}>
                    Installed Smart Lights
                  </Text>
                </View>
              </Card>
            </View>
            <View style={[styles.slideContainer,styles.slide4]}>
              <Card
                title='15000 KWh'
                titleStyle={{ fontSize: 30 }}
                containerStyle={{  alignItems: 'center' , opacity: 0.8, width: ScreenWidth-70, height: 220 }}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Icon
                    name='ios-flash'
                    type='ionicon'
                    color='blue'
                    size={60}
                  />
                  <Text style={[styles.text]}>
                    Energy Saved
                  </Text>
                </View>
              </Card>
            </View>
          </Swiper>
          <SocialIcon
            button
            light
            type='medium'
            title='Visit Our Webpage'
            onPress={() => Linking.openURL('https://www.medium.com')}
            style={{top:20}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    slideContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    slide1: {
        backgroundColor: "#00C8E4"
    },
    slide2: {
        backgroundColor: "#00E0BA"
    },
    slide3: {
        backgroundColor: "#8FF18A"
    },
    slide4: {
        backgroundColor: "#F9F871"
    },
    text: {
      paddingLeft: 10,
      opacity: 1, 
      fontSize: 22, 
      fontWeight: 'bold', 
    }
});

export default About;