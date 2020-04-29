import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class MealsScreen extends React.Copmonent {
    render() {
        return (
            <View style={StyleSheet.container}>
                <Text> Meals </Text>
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