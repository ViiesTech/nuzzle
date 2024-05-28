import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import theme from '../theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const CustomButton = ({ style, textStyle, btnText, onPress, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: theme.primaryGreen,
          width: '90%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 6,
          // padding: 16,
          height:55,
          marginTop: hp('5%')
        },
        style
      ]}>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={'white'} />
      ) : (
        <Text style={[{ fontSize: hp('2%'), color: 'white' }, textStyle]}>
          {btnText}
        </Text>
      )}

    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
