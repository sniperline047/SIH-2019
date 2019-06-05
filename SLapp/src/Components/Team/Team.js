import React from 'react';
import { View, Text, Dimensions, ScrollView, Linking } from 'react-native';
import { Button, Header, Avatar, SocialIcon, Image, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;

class Team extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'black' }}>
        <Header
          leftComponent={ <Button 
            icon={ <Icon name="ios-arrow-round-back" size={25} color="white"/> }
            onPress={() => this.props.navigation.navigate('Home')} />
          }
          rightComponent={{ text: 'TEAM', style: { color: '#fff', fontSize: 15 } }}
          containerStyle={{ position: 'absolute', top: 0, paddingTop: 0, height: 60, width: ScreenWidth, marginBottom: 3  }}
        />
        <View style={{ top: 70 }}>
          <Image source={require('../icons/banner_SIH2019.png')} style={{ width: ScreenWidth, height: 100 }} />
          <Text style={{color: 'white',textAlign: 'center',fontSize: 40}} >MEMBERS</Text>
          <Divider style={{ backgroundColor: 'white', marginBottom: 10 }} />
          <View style={{alignItems: 'center', height: ScreenHeight-350}} >
            <ScrollView>
              <Header
                leftComponent={ 
                  <Avatar                  
                    size="medium"
                    title="TA"
                    titleStyle={{fontSize: 25}}
                    overlayContainerStyle={{backgroundColor: 'black'}}
                  /> 
                }
                centerComponent={{ text: 'Leader', style: { color: '#000', fontSize: 25 } }}
                rightComponent={<SocialIcon raised={true} type='instagram' onPress={() => Linking.openURL('https://www.instagram.com')} />}
                containerStyle={{alignItems: 'center' ,marginVertical: 2, height: 90, width: ScreenWidth-30, borderRadius: 4, borderWidth: 0.2, borderColor: '#d6d7da', opacity: 0.8}}
                backgroundColor='#5EB8C2'
              />
              <Header
                leftComponent={ 
                  <Avatar                 
                    size="medium"
                    title="UT"
                    titleStyle={{fontSize: 25}}
                    overlayContainerStyle={{backgroundColor: 'black'}}
                  /> 
                }
                centerComponent={{ text: 'Hardware', style: { color: '#000', fontSize: 25 } }}
                rightComponent={<SocialIcon raised={true} type='instagram' onPress={() => Linking.openURL('https://www.instagram.com')} />}
                containerStyle={{alignItems: 'center' ,marginVertical: 2, height: 90, width: ScreenWidth-30, borderRadius: 4, borderWidth: 0.2, borderColor: '#d6d7da', opacity: 0.8}}
                backgroundColor='#57CAC1'
              />
              <Header
                leftComponent={ 
                  <Avatar
                    size="medium"
                    title="MK"
                    titleStyle={{fontSize: 25}}
                    overlayContainerStyle={{backgroundColor: 'black'}}
                  /> 
                }
                centerComponent={{ text: 'App Dev', style: { color: '#000', fontSize: 25 } }}
                rightComponent={<SocialIcon raised={true} type='instagram' onPress={() => Linking.openURL('https://www.instagram.com')} />}
                containerStyle={{alignItems: 'center' ,marginVertical: 2, height: 90, width: ScreenWidth-30, borderRadius: 4, borderWidth: 0.2, borderColor: '#d6d7da', opacity: 0.8}}
                backgroundColor='#68DBB4'
              />
              <Header
                leftComponent={ 
                  <Avatar
                    size="medium"
                    title="AS"
                    titleStyle={{fontSize: 25}}
                    overlayContainerStyle={{backgroundColor: 'black'}}
                  /> 
                }
                centerComponent={{ text: 'Web Dev', style: { color: '#000', fontSize: 25 } }}
                rightComponent={<SocialIcon raised={true} type='instagram' onPress={() => Linking.openURL('https://www.instagram.com')} />}
                containerStyle={{alignItems: 'center' ,marginVertical: 2, height: 90, width: ScreenWidth-30, borderRadius: 4, borderWidth: 0.2, borderColor: '#d6d7da', opacity: 0.8}}
                backgroundColor='#8FE99E'
              />
              <Header
                leftComponent={ 
                  <Avatar
                    size="medium"
                    title="GK"
                    titleStyle={{fontSize: 25}}
                    overlayContainerStyle={{backgroundColor: 'black'}}
                  /> 
                }
                centerComponent={{ text: 'Hardware', style: { color: '#000', fontSize: 25 } }}
                rightComponent={<SocialIcon raised={false} type='instagram' onPress={() => Linking.openURL('https://www.instagram.com')} />}
                containerStyle={{alignItems: 'center' ,marginVertical: 2, height: 90, width: ScreenWidth-30, borderRadius: 4, borderWidth: 0.5, borderColor: '#d6d7da', opacity: 0.8}}
                backgroundColor='#C0F385'
              />
              <Header
                leftComponent={ 
                  <Avatar
                    size="medium"
                    title="NK"
                    titleStyle={{fontSize: 25}}
                    overlayContainerStyle={{backgroundColor: 'black'}}
                  /> 
                }
                centerComponent={{ text: 'Designer', style: { color: '#000', fontSize: 25 } }}
                rightComponent={<SocialIcon raised={false} type='instagram' onPress={() => Linking.openURL('https://www.instagram.com')} />}
                containerStyle={{alignItems: 'center' ,marginVertical: 2, height: 90, width: ScreenWidth-30, borderRadius: 4, borderWidth: 0.2, borderColor: '#d6d7da', opacity: 0.8}}
                backgroundColor='#F9F871'
              />                                               
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

export default Team;