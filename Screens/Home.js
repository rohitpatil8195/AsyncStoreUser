

import React, { Component } from 'react';
import {Text,View,StyleSheet} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

class Home extends Component{
    constructor({navigation}) {
        super();
        
      }
  render(){
  const { user,First_name,Last_Name } = this.props.route.params;
    return(
      <SafeAreaView style={{flex:1,alignContent:'center',justifyContent:'center'}}>
         <View style={styles.MainContainer}>
          <Text style={{fontSize:30, marginTop:10}}>
             Welcome {First_name}
          </Text>
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:18}}>
             Name:{First_name}
          </Text>
          <Text style={{fontSize:18}}>
             surname:{Last_Name}
          </Text>
          <Text style={{fontSize:17}}>
             Email:{user}
          </Text>
          </View>
          </View>
      </SafeAreaView>
    );
}
}
const styles = StyleSheet.create({
    MainContainer: {
      alignItems: 'center',
      flex: 1,
      margin: 10,
      marginTop:10,
      borderWidth:1,
      backgroundColor:'pink',
      borderColor:'black'
    },
    TextInputStyle: {
      textAlign: 'center',
      height: 40,
      width: '100%',
      borderWidth: 1,
      borderColor: '#808000',
    },
    button: {
      width: '100%',
      height: 40,
      padding: 10,
      backgroundColor: '#808000',
      marginTop: 10,
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
    },
    text: {
      fontSize: 20,
      textAlign: 'center',
    },
  });
export default Home;