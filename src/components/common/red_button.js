import React, { Component } from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';
import { RED, LIGHT_RED } from '../../styles/color';

const styleText = require('../../styles/text');

class RedButton extends Component {
    render() {
        const { buttonActive, text, onPress } = this.props;
        const {
            button,
            buttonRedTransparent,
            textColorWhite
        } = styles;
        if (buttonActive === false) {
            return (
                <TouchableHighlight
                    style={[button, buttonRedTransparent]}
                    disabled
                >
                    <Text style={[textColorWhite, styleText.button]} >
                        {text}
                    </Text>
                </TouchableHighlight>
            );
        }
        return (
            <TouchableHighlight
                style={button}
                underlayColor={LIGHT_RED}
                onPress={onPress}
            >
                <Text
                    style={[styleText.button, textColorWhite]}
                >
                    {text}
                </Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 45,
        elevation: 2,
        padding: 15,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        backgroundColor: RED
    },
    textColorRed: {
        color: RED
    },
    textColorWhite: {
        color: 'white'
    },
    buttonRedTransparent: {
        elevation: 0,
        backgroundColor: 'rgba(241, 100, 94, 0.5)'
    }
});

export { RedButton };
