import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { LoginMobx } from './views';

import AuthStore from './mobx/auth_store';

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LoginMobx
                    message='About to start log in page'
                    store={AuthStore}
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
