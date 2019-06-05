import React from 'react';
import { Alert, YellowBox, ActivityIndicator, ScrollView, View, Text, Dimensions, StyleSheet, RefreshControl } from 'react-native';
import * as firebase from 'firebase';
import _ from 'lodash';
import { Avatar, Button, Overlay, Header, ListItem, Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import PTRView from 'react-native-pull-to-refresh';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};
                                      
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
//firebase info
const firebaseConfig = {
  apiKey: 'AIzaSyCrNdv4elIJo-foi3M65H7cieqyBHvcxn4',
  authDomain: 'street-light-project.firebaseapp.com',
  databaseURL: 'https://street-light-project.firebaseio.com',
  projectId: 'street-light-project',
  storageBucket: 'street-light-project.appspot.com',
  messagingSenderId: '369012790657',
  appId: '1:369012790657:web:e21c5e67ed45d1b3'
};
firebase.initializeApp(firebaseConfig);

class Light extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      isOverlay: 1,
      cityId: this.props.navigation.state.params.city,
      city: '',
      status: [],
      loader: true,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.firebaseCall();
  }

  firebaseCall = () => {
    let database;
    if (this.state.cityId === 3) {
      database = firebase.database().ref().child('Patiala');
      this.setState({ city: 'Patiala' });
    } else if (this.state.cityId === 0) {
      database = firebase.database().ref().child('Model');
      this.setState({ city: 'Model City' })
    }
    database.on('value', snap => {
      if (snap.val()) {
        this.setState({ status: snap.val() });
        this.setState({ loader: false });          
      } else {
          Alert.alert(
            'No Internet',
            'Unable to retrieve data at the moment',
            [
              { text: 'Ask me later', onPress: () => this.props.navigation.navigate('City') },
            ],
            { cancelable: false },
          );
      }
    });   
  }

  overlayVisible = (value) => {
    this.setState({ isVisible: true });
    if (value === false) {
      this.setState({ isOverlay: 0 });
    } else if (value === true) {
      this.setState({ isOverlay: 1 });
    } else {
      this.setState({ isOverlay: 2 });
    }
  }

  callOverlay = () => {
    if (this.state.isOverlay === 2) {
      return (
        <View style={styles.overlayView} >
          <Text style={styles.titleText} >⚠ FAULTY!</Text>
          <Text style={styles.titleText} >Report to repair</Text>
          <Button
            title="Report" 
            icon={<Icon name='ios-construct' size={30}color='white' />}
            onPress={() => this.props.navigation.navigate('Report')}
          />
        </View>
      );
    } else if (this.state.isOverlay === 1) {
      return (
        <View style={styles.overlayView} >
          <Text style={styles.titleText} >Light is currently:</Text>
          <Badge value="ON!" status="success" />
        </View>
      );
    } else if (this.state.isOverlay === 0) {
      return (
        <View style={styles.overlayView} >
          <Text style={styles.titleText} >Light is currently:</Text>
          <Badge value="OFF!" status="warning" />
        </View>
      );                
    }
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.firebaseCall();
    this.setState({refreshing: false});
  }

  render() {
    return (
      <View style={styles.container} >
        <Header
          leftComponent={
            <Button 
              icon={<Icon name='ios-arrow-round-back' size={30}color='white' />}
              onPress={() => this.props.navigation.navigate('City')}
            />
          }
          centerComponent={{ text: `${this.state.city}`, style: { color: '#fff', fontSize: 15 } }}
          rightComponent={{ text: 'STATUS', style: { color: '#fff', fontSize: 15 } }}
          containerStyle={{ position: 'absolute', top: 0, paddingTop: 0, height: 70, width: ScreenWidth }}
        />
        {
          this.state.loader 
          ? <View style={{ width: ScreenWidth }}>
              <ActivityIndicator size={100} color='#0000ff' />
              <Text style={{color: 'white',textAlign: 'center',fontSize: 30}} >Loading</Text>
            </View>
          : <View style={{ top: 20, height: 400 }}>
              <Text style={{color: 'white',textAlign: 'center',fontSize: 24, marginBottom: 10}} >Smart Street Lights in your City:</Text>
              <ScrollView
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh}
                  />
                }
              >
              {
                this.state.status.map((item, i) => (
                    <ListItem
                      key={i}
                      leftAvatar={() => {
                        if (item === true) {
                          return <Badge value='   ' status='success' />;
                        } else if (item === false) {
                          return <Badge value='   ' status='warning' />;
                        } else {
                          return <Badge value='   ' status='error' />;
                        }
                      }}
                      title={`Street Light ${i + 1}`}
                      rightAvatar={
                        <Avatar
                          rounded
                          size={40}
                          icon={{ name: 'ios-information-circle', color: 'blue', type: 'ionicon', size: 40 }}
                          onPress={() => this.overlayVisible(item)}
                        />
                      }
                      containerStyle={{ height: 70, width: ScreenWidth, margin: 1 }}
                    />
                ))
              }
              </ScrollView>
              <Overlay 
                isVisible={this.state.isVisible}
                onBackdropPress={() => this.setState({ isVisible: false })}
                windowBackgroundColor="rgba(0, 0, 0, .8)"
                overlayBackgroundColor="white"
                borderRadius={5}
                width={200}
                height={300}
              >
                {this.callOverlay()}
              </Overlay>
            </View>
        }
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
  },
  overlayView: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'space-around',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Light;
