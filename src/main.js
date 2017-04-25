import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';


import LoginRedux from './views/login_redux';
import configureStore from './store';

const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store} style={styles.container} >
                <LoginRedux
                    message='About to start log in page'
                />
            </Provider>
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
