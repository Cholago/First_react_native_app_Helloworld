import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

export default function Test() {
    const [count, setCount] = useState(0);
    return (
        <View style={styles.container}>
            <Text style={styles.textColor}>Hurrar my first react app</Text>
            <Text style={styles.countText}>Number is {count}</Text>
            <Button style={styles.incrementButton} title="Increment"
                onPress={() => setCount(count + 1)} />
            <Button style={styles.decrementButton} title="Decrement"
                onPress={() => setCount(count - 1)} />
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
    },
    countText: {
        color: 'red',
        fontSize: 20
    }
    ,
    incrementButton: {
        margin: 20,
        padding: 20
    },
    decrementButton: {
        margin: 20,
        backgroundColor: 'red'
    }
});
