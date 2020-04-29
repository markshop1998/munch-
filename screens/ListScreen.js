import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class ListScreen extends React.Copmonent {
    render() {
        return (
            <View style={StyleSheet.container}>
                <Text> Shopping List </Text>
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