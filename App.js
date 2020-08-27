import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Screens/LoginScreen";
import Signup from "./Screens/Signup";
import Home from "./Screens/Home";
import { AsyncStorage } from 'react-native';

const Stack = createStackNavigator();


function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
       <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



