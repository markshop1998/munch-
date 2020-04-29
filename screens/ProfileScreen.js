import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class ProfileScreen extends React.Copmonent {
    render() {
        return (
            <View style={StyleSheet.container}>
                <Text> Profile </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});