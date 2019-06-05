import React, { Component } from 'react';
import { Alert, View, Text, Dimensions, ScrollView } from 'react-native';
import { Overlay, Button, Header, Input, Rating, AirbnbRating } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

class Feedback extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: '',
      comment: '',
      isVisible: false,
    }
  }

  ratingCompleted = (rate) => {
    this.setState({ rating: rate });
  }

  submitPress = () => {
    let com = this.state.comment;
    if( this.state.rating > 0 && com.length > 2 ) {
      this.setState({ isVisible: true });
      this.setState({ comment: '' });
    }else {
      Alert.alert("Input all fields correcttly!!");
    }
  }


  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', height: ScreenHeight}}>
          <Header
            leftComponent={ <Button 
              icon={ <Icon name="ios-arrow-round-back" size={30}color="white"/> }
              onPress={() => this.props.navigation.navigate('Home')} />
            }
            rightComponent={{ text: 'FEEDBACK', style: { color: '#fff', fontSize: 15 } }}
            containerStyle={{ position: 'absolute', top: 0, paddingTop: 0, height: 60, width: ScreenWidth }}
          />
          <View style={{ marginVertical: 20 }} >
            <HideWithKeyboard>
              <Text style={{ color: 'white', top: 40, textAlign: 'center', marginBottom: 30, fontSize: 25 }} >Rate us out of 5 </Text>
              <AirbnbRating
                style={{ paddingVertical: 50 }}
                count={5}
                reviews={["Bad", "Meh", "OK", "Good", "Amazing"]}
                defaultRating={0}
                size={30}
                onFinishRating={this.ratingCompleted}
              />
            </HideWithKeyboard>  
          </View>
          <View style={{ marginVertical: 20 }} >
            <Text style={{ color: 'white', fontSize: 20, marginBottom: 20 }} > How Can We Get better ? </Text>
            <Input
              containerStyle={{ backgroundColor: 'white', marginBottom: 20, paddingVertical: 30, width: ScreenWidth-50, borderRadius: 10 }}
              style={{ paddingVertical: 100 }}
              placeholder='Input Feedback'
              maxLength={120}
              onChangeText={(comment) => this.setState({comment})}
              value={this.state.comment}
            />
          </View>
          <Button
            icon={
              <Icon
                name="ios-checkmark-circle"
                size={15}
                color="white"
              />
            }
            iconLeft
            title="Submit"
            onPress={this.submitPress}
          />
          <Overlay 
          isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}
          windowBackgroundColor="rgba(0, 0, 0, .5)"
          overlayBackgroundColor="white"
          borderRadius={5}
          width="auto"
          height="auto"
          >
            <View style={{ height: 200 }} >
              <Text style={{ marginVertical: 20 }} >Your Response is Saved with Us</Text>
              <Text style={{ marginVertical: 20 }} >We appreciate for your time 😃</Text>
              <Button
              style={{ paddingVertical: 20 }}
              title="OK"
              onPress={() => {
                this.props.navigation.navigate('Feedback');
                this.setState({ isVisible: false });
              }}
              />
            </View>
          </Overlay>
      </View>
    );
  }
}

export default Feedback;