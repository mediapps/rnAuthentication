import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

class Welcome extends Component {
    render() {
        return (
            <Text style={styles.welcome}>{this.props.message}</Text>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default Welcome;
