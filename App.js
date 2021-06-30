import * as React from 'react';
import * as Speech from 'expo-speech';
import { Text, View, StyleSheet, TextInput, Image,TouchableOpacity, Alert } from 'react-native';
import { Header } from 'react-native-elements';

import {
  AdMobBanner,
  AdMobInterstitial,
  setTestDeviceIDAsync
} from "expo-ads-admob";

import {Card} from 'react-native-paper'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
     name: '',
    };
  }

  speak=()=> {
    var thingToSay = this.state.name
    Speech.speak(thingToSay);
  }




  async componentDidMount(){
    await setTestDeviceIDAsync('EMULATOR');
      AdMobInterstitial.setAdUnitID('ca-app-pub-3976710718218095/5119392050'); 
      await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
     await AdMobInterstitial.showAdAsync();
    
    
     const that = this;
     setTimeout(() => {
     // write your functions    
     that.componentDidMount();
   },20000);
    }








  render(){
  return (
    <View>
      <Header
        backgroundColor={'#00bfff'}
        centerComponent={{
        text: 'WORD PRONOUNCE',
        style: { color: '#fff', fontSize: 15,fontWeight: 'bold' },
        }}/>

      <Image
        style={styles.imageIcon}
        source={require('./assets/textToSpeech.png')}/>

      

      <TextInput
        style={styles.inputBox}
        placeholder="Enter the word"
        onChangeText={text => {
          this.setState({ name:text});
        }}
        value={this.state.text}
      />

      <TouchableOpacity style={styles.button}
        onPress={()=>{this.speak()}}>
        <Text style={styles.buttonText}>Pronounce</Text>
      </TouchableOpacity>




<Card
  style={{
    shadowOffset: { width: 5, height: 5 },
    width: "90%",
    borderRadius: 5,
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  }}
>
<AdMobBanner
    bannerSize="smartBanner"
    adUnitID="ca-app-pub-3976710718218095/2743320784" 
    servePersonalizedAds={(true)}
    onDidFailToReceiveAdWithError={(e) => console.log(e)}
    />
</Card>




    </View>
  )}
}

const styles = StyleSheet.create({
  inputBox: {
    width: 300,
  height: 40,
  borderWidth: 1.5,
  fontSize: 20,
  margin:10,
  paddingLeft:10,
  marginTop:40
  },
  imageIcon: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 15
  },
  title:{
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 17
  },
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:5,
    width : 200,
    height:40,
    backgroundColor:'#18A7B5'
  },
  buttonText:{
    
    
textAlign : 'center',color : 'white', fontWeight: 'bold'    

  }
  
});



const Home = () => {
  React.useEffect(() => {
     setTestDeviceIDAsync("EMULATOR");
  }, []);
}
