import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import {
    emailChanged,
    passwordChanged,
} from '../actions';

import { Input } from '../components/common';

class LoginRedux extends Component {

    onChangeTextEmail(text) {
        this.props.emailChanged(text);
    }

    onChangeTextPwd(text) {
        this.props.passwordChanged(text);
    }

    render() {
        return (
            <View>
                <Text style={styles.login}>{this.props.message}</Text>
                <Input
                    ref="emailInput"
                    label="Email"
                    placeholder="your.email@mail.com"
                    value={this.props.email}
                    keyboardType='email-address'
                    onChangeText={this.onChangeTextEmail.bind(this)}
                    autoFocus
                />
                <Input
                    label="Password"
                    placeholder="password"
                    value={this.props.password}
                    onChangeText={this.onChangeTextPwd.bind(this)}
                    ref="passwordInput"
                    secureTextEntry
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    login: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    }
});

const mapStateToProps = ( auth ) => {
    console.log('auth is ', auth);
    const {
        email,
        password,
    } = auth;

    return {
        email,
        password,
    };
};


export default connect(mapStateToProps, {
    emailChanged, passwordChanged
})(LoginRedux);

