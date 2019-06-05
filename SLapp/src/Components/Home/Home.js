import React, {Component} from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import { Icon, Card, Button } from 'react-native-elements'; 
import Swiper from "react-native-web-swiper";

class Home extends Component {
  	render() {
	    return (
	    	<ImageBackground source={require('../icons/back1.jpg')} style={{width: '100%', height: '100%'}}>
	            <View style={styles.container}>
	                <Swiper>
	                    <View style={[styles.slideContainer,styles.slide1]}>
	                    	<Card
							  	title='Street Light Status'
							  	containerStyle={{ opacity: 0.8 }}>
								<Icon
								  name='ios-sunny'
								  type='ionicon'
								  color='blue'
								  size={60}
								/>
							  	<Text style={[styles.text]}>
							    	This is a platform which will provide you with regular updates about street lights nearby your houses.
							  	</Text>
							  	<Button
								    title='VIEW NOW'
								    backgroundColor='blue'
								    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
							  		onPress={() => this.props.navigation.navigate('Live Light')}
							  	/>
							</Card>
	                    </View>
	                    <View style={[styles.slideContainer,styles.slide2]}>
	                    	<Card
							  	title='Report Street Light'
							  	containerStyle={{ opacity: 0.8 }}>
								<Icon
								  name='ios-hammer'
								  type='ionicon'
								  color='blue'
								  size={60}
								/>
							  	<Text style={[styles.text]}>
							    	We provide you the facility to repair the street lights in your neighbourhood within seconds of reporting
							  	</Text>
							  	<Button
								    title='VIEW NOW'
								    backgroundColor='blue'
								    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
							  		onPress={() => this.props.navigation.navigate('Live Light')}
								/>
							</Card>
	                    </View>
	                    <View style={[styles.slideContainer,styles.slide3]}>
	                    	<Card
							  	title='Contact Us'
							  	containerStyle={{ opacity: 0.8, backgroundColor: 'white' }}>
							  	<Icon
								  	name='sc-telegram'
								  	type='evilicon'
								  	color='blue'
								  	size={60}
								/>
							  	<Text style={[styles.text]}>
							    	We all need people who will give us feedback. That’s how we improve and learn.
							  	</Text>
							  	<Button
							  		onPress={() => this.props.navigation.navigate('Contact')}
								    backgroundColor='blue'
								    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
								    title='VIEW NOW' 
								/>
							</Card>
	                    </View>
	                </Swiper>
	            </View>
            </ImageBackground>
	    );
  	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    slideContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    slide1: {
        backgroundColor: "rgba(20,20,200,0.3)"
    },
    slide2: {
        backgroundColor: "rgba(20,200,20,0.3)"
    },
    slide3: {
        backgroundColor: "rgba(200,20,20,0.3)"
    },
    text: {
    	marginBottom: 10, 
    	opacity: 1, 
    	fontSize: 16, 
    	fontWeight: 'bold', 
    	textAlign: 'center'
    }
});

export default Home;