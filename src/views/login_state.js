import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { Input } from '../components/common';

class LoginState extends Component {
    state = {
        email: '',
        password: ''
     }

    onChangeTextEmail(text) {
        this.setState({
            email: text
        });
    }

    onChangeTextPwd(text) {
        this.setState({
            password: text
        });
    }

    render() {
        return (
            <View>
                <Text style={styles.login}>{this.props.message}</Text>
                <Input
                    ref="emailInput"
                    label="Email"
                    placeholder="your.email@mail.com"
                    value={this.state.email}
                    keyboardType='email-address'
                    onChangeText={this.onChangeTextEmail.bind(this)}
                    autoFocus
                />
                <Input
                    label="Password"
                    placeholder="password"
                    value={this.state.password}
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

export { LoginState };
