import React from 'react';
import { Alert, StyleSheet, View, Text, Dimensions, YellowBox, ScrollView } from 'react-native';
import { Button, Complain, Badge, Input, Tooltip, Overlay, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Mailer from 'react-native-mail';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

const ScreenWidth = Dimensions.get('window').width;

class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'Patiala',
      slNumber: 6,
      complain: '',
      email: '',
      isVisible: false,
      address: 6,
    };
  }

  submitPress = () => {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(this.state.email.match(mailformat)) {
      this.setState({ isVisible: true });
      this.setState({ comment: '' });
    }else {
      Alert.alert('Invalid Email address');
    }
  }

  handleEmail = () => {
    Mailer.mail({
      subject: 'Repairing of Street Light',
      recipients: ['cmsniperline@gmail.com'],
      ccRecipients: [''],
      bccRecipients: [''],
      body: `<b>Repairing Street Light: ${this.state.slNumber} from ${this.state.city}</b><br>Complain registered by ${this.state.email}<br><b>Complain:</b><br><i>${this.state.complain}</i>`,
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
      <View style={styles.container} >
        <Header
          leftComponent={ <Button 
            icon={ <Icon name="ios-arrow-round-back" size={25} color="white"/> }
            onPress={() => this.props.navigation.navigate('City')} />
          }
          rightComponent={{ text: 'Report', style: { color: '#fff', fontSize: 15 } }}
          containerStyle={{ position: 'absolute', top: 0, paddingTop: 0, height: 60, width: ScreenWidth, marginBottom: 3  }}
        />
        <HideWithKeyboard>
          <Text style={styles.titleText} >Complaint for repair of Street Light:</Text>
          <Text style={{ color: '#7fff00', textAlign: 'center', paddingVertical: 10, marginBottom: 50 }} >{`"${this.state.slNumber} in ${this.state.city} city"`}</Text>
          <Badge value="Complain" status="primary" textStyle={{fontSize: 30}} containerStyle={{paddingVertical: 10}} badgeStyle={{height: 35, width: 200}} />
        </HideWithKeyboard>
          <View>
            <Tooltip popover={<Text>This complain will be added to the mail</Text>}>
              <Input
                containerStyle={styles.input1}
                style={{ paddingVertical: 50 }}
                placeholder='Type your complain here...'
                maxLength={120}
                onChangeText={(complain) => this.setState({complain})}
                value={this.state.complain}
              />
            </Tooltip>
          </View>
        <View>
        <HideWithKeyboard>
          <Badge value="Email" status="primary" textStyle={{fontSize: 30}} containerStyle={{paddingVertical: 10}} badgeStyle={{height: 35, width: 200}} />
        </HideWithKeyboard>
          <Tooltip popover={<Text>This field is required</Text>}>
            <Input
              containerStyle={styles.input2}
              style={{ paddingVertical: 50 }}
              placeholder='Email (Required)'
              maxLength={30}
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
            />
          </Tooltip>
          <Button
            icon={<Icon name="ios-checkmark-circle" size={15} color="white" />}
            iconLeft
            title="Submit"
            containerStyle={{marginTop:5}}
            onPress={this.submitPress}
          />
        </View>
        <Overlay 
          isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}
          windowBackgroundColor="rgba(0, 0, 0, .8)"
          overlayBackgroundColor="white"
          borderRadius={5}
          width="auto"
          height="auto"
        >
          <View style={{ height: 250, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name='ios-send' type='ionicon' color='#517fa4' size={45} />
            <Text style={{ marginVertical: 20 }} >Your complain will be forwarded via mail</Text>
            <Text style={{ marginVertical: 20 }} >We appreciate for your time 😃</Text>
            <Button
              style={{ paddingVertical: 20}}
              containerStyle={{backgroundColor: 'orange' }}
              title="OK"
              onPress={() => {
                this.setState({ isVisible: false });
                this.handleEmail();
                this.props.navigation.navigate('Live');
              }}
            />
          </View>
        </Overlay>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: 'black',
    width: ScreenWidth,
  },
  input1: {
    backgroundColor: 'white', 
    marginBottom: 10, 
    paddingVertical: 10, 
    width: ScreenWidth, 
    borderRadius: 10,
  },
  input2: {
    backgroundColor: 'white', 
    marginBottom: 10, 
    paddingVertical: 10, 
    width: ScreenWidth-50, 
    borderRadius: 10,
  },
  titleText: {
    marginTop: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  overlayText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Report;
