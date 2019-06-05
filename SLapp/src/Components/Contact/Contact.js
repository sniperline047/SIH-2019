import React, { Component } from 'react';
import { View, Text, Dimensions, Linking, Alert } from 'react-native';
import { PricingCard, Button, Header, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Mailer from 'react-native-mail';

let ScreenWidth = Dimensions.get("window").width;

class Contact extends React.Component {

  handleEmail = () => {
    Mailer.mail({
      subject: 'Troubleshooting',
      recipients: ['cmsniperline@gmail.com'],
      ccRecipients: [''],
      bccRecipients: [''],
      body: `<b>I am having problem with...</b>`,
      isHTML: true,
    }, (error, event) => {
      Alert.alert(
        error,
        event,
        [
          {text: 'Ok', onPress: () => console.log('OK')},
          {text: 'Cancel', onPress: () => console.log('CANCEL')}
        ],
        { cancelable: true }
      )
    });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'black' }}>
        <Header
          leftComponent={ <Button 
            icon={ <Icon name="ios-arrow-round-back" size={30} color="white"/> }
            onPress={() => this.props.navigation.navigate('Home')} />
          }
          rightComponent={{ text: 'Contact', style: { color: '#fff', fontSize: 15 } }}
          containerStyle={{ position: 'absolute', top: 0, paddingTop: 0, height: 60, width: ScreenWidth, marginBottom: 3  }}
        />
        <View style={{top: 120, flex: 1, flexDirection: 'row'}}>
          <PricingCard
            color="#4f9deb"
            title="Call"
            price="9am-6pm"
            info={['Direct Assistance','Complain','Installation']}
            button={{ title: ' Call Now', icon: 'call' }}
            onButtonPress={() => Linking.openURL('tel:+917607119944')}
            containerStyle={{height: 320, width: 180}}
            pricingStyle={{fontSize: 20}}
          />
          <PricingCard
            color="#4f9deb"
            title="Email"
            price="24 x 7"
            info={['Troubleshooting','App','Website']}
            button={{ title: ' Go To Email', icon: 'mail' }}
            onButtonPress={() => this.handleEmail()}
            containerStyle={{height: 320, width: 180}}
            pricingStyle={{fontSize: 20}}
          />
        </View>
        <Text style={{marginTop:10, fontSize:12, color: 'white'}} >Made 💙 by sniperline047</Text>
      </View>
    );
  }
}

export default Contact;