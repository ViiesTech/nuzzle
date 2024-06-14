import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const CustomInput = ({style, value, placeholder, onChange,secureTextEntry,keyboardType,width}) => {
  return (
    <TextInput
    secureTextEntry={secureTextEntry}
    keyboardType={keyboardType}
      value={value}
      placeholder={placeholder}
      onChangeText={onChange}
      style={[{borderWidth: 1, width: width ? width : '90%', alignSelf: 'center', borderRadius: 6, padding: 10}, style]}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
