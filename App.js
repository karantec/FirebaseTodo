import { useState,useEffect } from "react"
import {View,TextInput,StyleSheet} from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import {onAuthStateChanged } from "firebase/auth";
import {FIREBASE_AUTH} from "./FirebaseConfig"
import Home from "./components/Home";

// import Home from "./components/Home";
const Stack=createNativeStackNavigator();
const InsideStack=createNativeStackNavigator();


export default function App() {
  
  const [user, setUser] = useState(null);

  
  useEffect(()=>{
    onAuthStateChanged(FIREBASE_AUTH,(user)=>{
      console.log('user',user);
      setUser(user);

    })
  },[])

  
  
  return (
  
      <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
            {user ?(
              <Stack.Screen name="MyTodo" component={Home} options={{headerShown:true}} />
            ):(
              <Stack.Screen name="Login" component={Login} options={{headerShown:true}} />
              )}
            
            </Stack.Navigator>
        </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
