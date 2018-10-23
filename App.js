import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Main from './main.js';

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider theme={DefaultTheme}>
        <Main></Main>
      </PaperProvider>
    );
  }
}