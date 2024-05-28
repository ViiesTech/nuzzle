import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import theme from '../theme';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather';

const WelcomeHeader = ({headerText}) => {
  return (
    <View
      style={{
        width: wp('100%'),
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
        height: hp('10%'),
      }}>
      <Text style={{color: theme.primaryGreen, fontSize: hp('3%')}}>{headerText}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', width: '30%', justifyContent:'flex-end', alignItems:'center'}}>
        <TouchableOpacity style={{borderWidth: 1, borderRadius: 50, borderColor: theme.primaryGreen, width: 35, height: 35, justifyContent: 'center', alignItems: 'center'}}>
            <AntDesign name={'hearto'} size={20} color={theme.primaryGreen}  />
        </TouchableOpacity>

        <TouchableOpacity style={{borderWidth: 1, borderRadius: 50, borderColor: theme.primaryGreen, marginLeft: 15, width: 35, height: 35, justifyContent: 'center', alignItems: 'center'}}>
            <Feather name={'user'} size={20} color={theme.primaryGreen} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeHeader;

const styles = StyleSheet.create({});
