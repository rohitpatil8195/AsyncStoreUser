
import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import { StyleSheet, View, TextInput, Button, Alert, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";
import Toast from "react-native-root-toast"

export default class App extends Component {
  constructor({navigation}) {
    super();
    this.state = {
      textInputData: '',
      pass: '',
      LogtextInputData:'',
      LogPass:'',
      getValue: '',
     
    };
  }

  shortToast = (message) => {
    Toast.show(message, {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
    });
  };

 goBack=()=>{
    this.props.navigation.replace('Signup');
 }
  render() {
    const { email,password,First_name,Last_Name } = this.props.route.params;
    console.log(Last_Name)
    return (
      <View style={styles.MainContainer}>
          <Text style={styles.texts}>Hello.</Text>
          <Text style={styles.texts}>Welcome Back</Text>
       <View>
          <FontAwesome5 name="user-circle" size={60} color="#3498DB" />
        </View>
        <TextInput
          type='email'
          placeholder="email"
          value={this.state.LogtextInputData}
          onChangeText={data => this.setState({ LogtextInputData: data })}
          underlineColorAndroid="transparent"
          style={styles.inputBox}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="password"
          value={this.state.LogPass}
          onChangeText={data => this.setState({ LogPass: data })}
          underlineColorAndroid="transparent"
          style={styles.inputBox}
          autoCapitalize="none"
          secureTextEntry
        />
        <TouchableOpacity 
           onPress={()=>{
            if((this.state.LogtextInputData === email)&&(this.state.LogPass === password) &&(this.state.LogtextInputData != '')&&(this.state.LogPass != ''))
          // alert("Login Success")
           this.props.navigation.replace('Home',{
             user:<Text>{email}</Text>,
             First_name:<Text>{First_name}</Text>,
             Last_Name:<Text>{Last_Name}</Text>
        });
            else{
                this.shortToast("Invalid Email or Password" );
            }
           }
           }
          style={styles.button}>
          <Text style={styles.buttonText}> login </Text>
        </TouchableOpacity>
        <TouchableOpacity
           onPress={this.goBack}>
          <Text  style={{ fontWeight: "bold", fontSize: 16, color: "#3498DB",marginLeft:'10%' }}> Back To SignUp </Text>
        </TouchableOpacity>
        <Text style={styles.text}> {this.state.getValue} </Text>
        <Text style={styles.text}> {this.state.getPass} </Text>
      </View>
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
           marginBottom:30,
       
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
       marginLeft:'10%'
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