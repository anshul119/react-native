import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TextInput, Button, Headline} from 'react-native-paper';

const styles = StyleSheet.create({
    Heading: {
        marginTop: 20
    },
    LoginContainer: {
        alignItems: 'center',
        paddingHorizontal: 20
    },
    TextInput: {
        backgroundColor: '#fff',
        width: '100%'
    },
    Button: {
        marginTop: 30,
        width: 150
    }
})

export default class Login extends React.Component {
    render() {
        return (
            <View style={styles.LoginContainer}>
                <Headline style={styles.Heading}>Login</Headline>
                <TextInput style={styles.TextInput} label='Username' />
                <TextInput style={styles.TextInput} secureTextEntry={true} label='Password' />
                <Button style={styles.Button} mode="outlined" onPress={() => console.log('pressed')}>
                    Login
                </Button>
            </View>
        );
    }
}