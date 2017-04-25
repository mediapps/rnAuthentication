import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react/native'

import { Input } from '../components/common';

@observer
class LoginMobx extends Component {
    state = {
        email: '',
        password: ''
     }

    onChangeTextEmail(text) {
        this.props.store.onEmailChanged(text);
    }

    onChangeTextPwd(text) {
        this.props.store.onPasswordChanged(text);
    }

    render() {
        return (
            <View>
                <Text style={styles.login}>{this.props.message}</Text>
                <Input
                    ref="emailInput"
                    label="Email"
                    placeholder="your.email@mail.com"
                    value={this.props.store.email}
                    keyboardType='email-address'
                    onChangeText={this.onChangeTextEmail.bind(this)}
                    autoFocus
                />
                <Input
                    label="Password"
                    placeholder="password"
                    value={this.props.store.password}
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

export { LoginMobx };
