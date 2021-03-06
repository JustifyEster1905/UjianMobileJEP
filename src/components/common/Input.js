import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, placeholder, secureTextEntry, value, onChangeText }) => {
    const styles = {
        labelStyle: {
            fontSize: 18,
            paddingLeft: 20,
            flex: 1
        },
        inputStyle: {
            color: '#000',
            paddingRight: 5,
            paddingLeft: 5,
            fontSize: 18,
            lineHeight: 23,
            height: 50,
            width: 100,
            flex: 2
        },
        containerStyle: {
            height: 40,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center'
        }
    }

    const { labelStyle, inputStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
            secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
                selectTextOnFocus={true}
            />
        </View>
    )
}

export { Input };