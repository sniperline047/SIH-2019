import React, {Component} from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';

class Load extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../icons/bulb.gif')} />
        <Text style={styles.title}>
          Smart StreetLight Solutions
        </Text>
        <Button
          title="Getting Started.."
          containerStyle={{ marginTop: 20 }}
          buttonStyle={{ backgroundColor: 'orange' }}
          onPress={() => this.props.navigation.navigate('Nav')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  title: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default Load;