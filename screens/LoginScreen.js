import React from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar, LayoutAnimation } from 'react-native'

import * as firebase from 'firebase';


export default class LoginScreen extends React.Component {
  static navigationOptions = {
      header: null
  };

    state = {

    email: "",
    password: "",
    errorMessage: null

     }

    handleLogin = () => {
    const {email, password} = this.state

    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(error => this.setState({ errorMessage: error.message }));
}

    render(){
        return (
         

        <View style={styles.container}>

        <StatusBar barStyle="light-content"></StatusBar>

        <Image>
        
        </Image>

        <Text style={styles.logo}>munch!</Text>
        <View style={styles.inputView}>
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            autoCapitalize="none"
            placeholderTextColor="#ffffff"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            autoCapitalize="none"
            placeholderTextColor="#ffffff"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} 
           onPress={this.handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>



        <TouchableOpacity>
          <Text style={styles.signUpText} 
          onPress={() => this.props.navigation.navigate("Register")}>
          New to munch? <Text style={{ color: "#465881"}}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffafa',
        alignItems: 'center',
        justifyContent: 'center',
      },
      errorMessage: {
          height: 72,
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 38
      },
      error: {
       color: "#E9446A",
       fontSize: 13,
       fontWeight: "600",
       textAlign: "center"
      },
      logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#9acd32",
        marginBottom:40
      },
      inputView:{
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
      inputText:{
        height:50,
        color:"white"
      },
      forgot:{
        color:"white",
        fontSize:11
      },
      loginBtn:{
        width:"80%",
        backgroundColor:"#9acd32",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      },
      loginText:{
        color:"black"
      },
      signUpText:{
        color:"black",
        marginTop: 22
      }
      
});

