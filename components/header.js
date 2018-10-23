import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Header extends React.Component {
    render() {
        <View style={styles.header}>
            <Text>John</Text>
        </View>
    }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#1abc9c',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
