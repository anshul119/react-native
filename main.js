import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import Home from './components/home.js';
import Login from './components/login.js';

export default class Main extends React.Component {
    state = {
        isLoggedIn: false
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                <View>
                    {
                        this.state.isLoggedIn ? <Home /> : <Login />
                    }
                </View>
            </SafeAreaView>
        );
    }
}