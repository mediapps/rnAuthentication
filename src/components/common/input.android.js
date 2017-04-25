import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';
import { DARK_GREY_3, LIGHT_RED } from '../../styles/color';

const styleText = require('../../styles/text');

class Input extends Component {
    constructor(props, context) {
        super(props, context);
        this.focus = this.focus.bind(this);
    }

    focus() {
        this.refs.input.focus();
    }

    render() {
        const { inputStyle, labelStyle, containerStyle } = styles;

        const {
            label,
            value,
            onChangeText,
            placeholder,
            secureTextEntry,
            keyboardType = 'default',
            returnKeyType = 'next',
            onSubmitEditing,
            autoFocus
        } = this.props;

        return (
            <View style={containerStyle} >
                <TextInput
                    ref="input"
                    value={value}
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    autoCorrect={false}
                    style={[inputStyle, styleText.bodyTwo]}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    autoCapitalize='none'
                    autoFocus={autoFocus}
                    onSubmitEditing={onSubmitEditing}
                    autoCorrect={false}
                    returnKeyType={returnKeyType}
                    selectTextOnFocus
                    underlineColorAndroid={DARK_GREY_3}
                    selectionColor={LIGHT_RED}
                />
                <Text style={[styleText.label, labelStyle]}>{label}</Text>
            </View>
        );
    }
}

const styles = {
  inputStyle: {
    alignSelf: 'stretch',
    color: DARK_GREY_3,
  },
  labelStyle: {
    color: DARK_GREY_3,
    alignSelf: 'flex-start'
  },
  containerStyle: {
    alignSelf: 'stretch',
    marginLeft: 40,
    marginRight: 40,
  }
};

export { Input };
