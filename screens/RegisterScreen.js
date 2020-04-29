import React from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import {Ionicons} from '@expo/vector-icons';

import * as firebase from 'firebase';


export default class RegisterScreen extends React.Component {

    static navigationOptions = {
        header: null
    };

state = {

name: "",
email: "",
password: "",
errorMessage: null

}



handleSignUp = () => {
    

    firebase
    .auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(userCredentials => {
        return userCredentials.user.updateProfile({
            displayName: this.state.name
        });
    })
   .catch(error => this.setState({ errorMessage: error.message }));

};

    render() {
        return (

        <View style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>

        <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
            <Ionicons name="ios-arrow-round-back" size={32} color="white"></Ionicons>
        </TouchableOpacity>


        <Text style={styles.logo}> munch! </Text>
        <View style={styles.inputView}>
          <TextInput  
            style={styles.inputText}
            placeholder="Name..." 
            autoCapitalize="none"
            placeholderTextColor="#ffffff"
            onChangeText={text => this.setState({name:text})}
            value={this.state.name}/>
        </View>
        <View style={styles.inputView}>
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            autoCapitalize="none"
            placeholderTextColor="#ffffff"
            onChangeText={text => this.setState({email:text})}
            value={this.state.email}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            autoCapitalize="none"
            placeholderTextColor="#ffffff"
            onChangeText={text => this.setState({password:text})}
            value={this.state.password}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} 
           onPress={this.handleSignUp}>
          <Text style={styles.loginText}>Sign Up</Text>
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
      back:{
        position: "absolute",
        top: 48,
        left: 32,
        width: 32,
        backgroundColor:"#9acd32",
        borderRadius: 16,
        height: 32,
        alignItems:"center",
        justifyContent:"center"
      }
});

