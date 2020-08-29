import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Test() {
    return (
        <View style={styles.container}>
            <Text style={styles.textColor}>Hurrar my first react app</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textColor: {
        color: 'green',
        fontSize: 30

    }
});
