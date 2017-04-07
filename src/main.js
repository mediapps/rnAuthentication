import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Welcome from './components/welcome';

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Welcome
                    message='Welcome to React-Native world'
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
