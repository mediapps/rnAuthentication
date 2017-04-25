import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { LoginState } from './views';

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LoginState
                    message='About to start log in page'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});


export default App;
