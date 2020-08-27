
import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import { StyleSheet, View, TextInput, Button, Alert, Text, TouchableOpacity,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from "@expo/vector-icons";
import Toast from "react-native-root-toast"
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      textInputData: '',
      pass: '',
      LogtextInputData:'',
      LogPass:'',
      First_name:'',
      Last_Name:'',
    
    };
  }
    shortToast = (message) => {
    Toast.show(message, {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
    });
  };
  saveValueFunction = () => {
     var {textInputData,pass,First_name,Last_Name} = false;
    
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.state.First_name.length >= 1) {
         First_name = true;
      if (this.state.Last_Name.length >= 1) {
        Last_Name = true;
        if ( reg.test(this.state.textInputData) === true ) {
            textInputData = true;
            if (this.state.pass.length >= 8 ) {
                pass = true; 
              } else {
                this.shortToast("Password is too short" );
              }
          } else {
            this.shortToast("Enter Correct Email");
          }
      } else {
        this.shortToast("Enter Last Name");
      }
    } else {
      this.shortToast("Enter First Name");
    }
    
    if(this.state.textInputData && this.state.pass && textInputData && pass && First_name && Last_Name){

      AsyncStorage.setItem('any_key_here', this.state.textInputData);
      AsyncStorage.setItem('any_key',  this.state.pass);
      AsyncStorage.setItem('First_name',  this.state.First_name);
      AsyncStorage.setItem('Last_Name',  this.state.Last_Name);
    
      alert('User Created Succesfully');

      console.log( this.state.Last_Name)
 
    }else{
     
    }
  };

  getValueFunction = () => {
   
    AsyncStorage.getItem('any_key_here').then(value =>
      this.setState({ getValue: value })
    );
    AsyncStorage.getItem('any_key').then(value =>
      this.setState({ getPass: value })
 
    );
    AsyncStorage.getItem('any_key').then(value =>
        this.setState({ getPass: value })
  
        
      );
      AsyncStorage.getItem('any_key').then(value =>
 
        this.setState({ getPass: value })
        
      );
  
  };
   
  LoginAuth=()=>{
        
      this.props.navigation.replace("Login",
      {
          email:this.state.textInputData,
          password:this.state.pass,
          First_name:this.state.First_name,
           Last_Name:this.state.Last_Name
      });
     
    } 

  render() {
    return (
         <SafeAreaView style={styles.MainContainer}>
          <View style={styles.Welcome}>
         <Text style={styles.texts}>Create New Account Here</Text>
         <View>
          <FontAwesome5 name="user-plus" style={{alignItems:'center',marginLeft:'45%'}} size={40} color="#3498DB" />
         </View>
         <TextInput
          placeholder="First Name"
          value={this.state.First_name}
          onChangeText={data => this.setState({ First_name: data })}
          underlineColorAndroid="transparent"
          style={styles.inputBox}
        />
         <TextInput
          placeholder="First Name"
          value={this.state.Last_Name}
          onChangeText={data => this.setState({ Last_Name: data })}
          underlineColorAndroid="transparent"
          style={styles.inputBox}
        />
        <TextInput
          placeholder="email"
          value={this.state.textInputData}
          onChangeText={data => this.setState({ textInputData: data })}
          underlineColorAndroid="transparent"
          style={styles.inputBox}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="password"
          value={this.state.pass}
          onChangeText={data => this.setState({ pass: data })}
          underlineColorAndroid="transparent"
          style={styles.inputBox}
          autoCapitalize="none"
          secureTextEntry
        />
        <TouchableOpacity
          onPress={this.saveValueFunction}
          style={styles.button}>
          <Text style={styles.buttonText}> signup </Text>
        </TouchableOpacity>
       
        <TouchableOpacity
          onPress={this.LoginAuth}>
          <Text  style={{ fontWeight: "bold", fontSize: 20, color: "#3498DB",marginLeft:'38%' }}> login </Text>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
  
     flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Welcome: {
        width:"95%",
        height:'90%',
        marginBottom:45,
    
      },
      texts: {
        fontSize: 25,
        color: "black",
        fontWeight: "bold",
      },
        inputBox: {
           
    width: "90%",
    margin: 5,
    marginLeft:15,
    padding: 10,
    fontSize: 16,
    borderColor: "#3498DB",
    borderBottomWidth: 2,
    textAlign: "center",
  },
  button: {
    marginTop: 20,
    marginBottom: 15,
    paddingVertical: 5,
    alignItems: "center",
    backgroundColor: "#3498DB",
    borderColor: "#3498DB",
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    marginLeft:'18%'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
    buttonLogin: {
    fontSize: 12,
  },

});