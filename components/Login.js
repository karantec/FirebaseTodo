import { View, Text,Button, StyleSheet,TextInput, ActivityIndicator, KeyboardAvoidingView } from 'react-native'
import React,{useState} from 'react'
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
const Login = () => {
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [loading,setLoading]=useState(false);
  const auth=FIREBASE_AUTH;
 
  
  const signIn=async()=>{
    setLoading(true);
    try{
      const response=await signInWithEmailAndPassword(auth,email,password);
      console.log(response);
     alert("Successfull Signiin");
    }catch(error){
      console.log(error);
      alert("sign in failed");
    }finally{
      setLoading(false);
    }
    
    
  }
  const signUp=async()=>{
    setLoading(true);
    try{
      const response=await createUserWithEmailAndPassword(auth,email,password);
      console.log(response);
      alert("Sign up done")
    }catch(error){
      console.log(error);
      alert("sign in failed");
    }finally{
      setLoading(false);
    }
    
    
  }
  return (
    <View style={styles.container}>
    <KeyboardAvoidingView behavior='padding'>
      <Text style={styles.Register}>Register your Todo</Text>
      <TextInput style={styles.input}
      
       value={email} placeholder="Email" autoCapitalize="none"
      onChangeText={(text)=>setEmail(text)}/>
      <TextInput style={styles.input} value={password}  placeholder="password" autoCapitalize="none"
      onChangeText={(text)=>setPassword(text)}/>
      {loading ? <ActivityIndicator size="large" color="#0000ff"/>:
      <>
        <Button style={styles.button}  title="Login" onPress={signIn}/>
        <View style={styles.space} /> 
        <Button style={styles.button} title="Create Account" onPress={signUp}/>
      </>}
      </KeyboardAvoidingView> 
    </View>
  )
}

export default Login

const styles=StyleSheet.create({
  container:{
    marginHorizontal:20,
    flex:1,
    justifyContent:'center'
  },
  Register:{
    textAlign:'center',
    fontSize:20,
    color:'black',
    fontWeight:'bold',
    marginBottom:20
  },
  input:{
    borderWidth:1,borderColor:'black',borderRadius:5,padding:10,marginHorizontal:20,marginVertical:20
  },
  button: {
    marginBottom: 20,
    padding: 30 ,
    borderRadius:10
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
})