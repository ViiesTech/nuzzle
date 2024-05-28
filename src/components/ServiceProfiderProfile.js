import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import images from '../assets/images';
import CustomButton from './CustomButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import theme from '../theme';

const ServiceProfiderProfile = ({name, designation, rating}) => {
  return (
    <View
      style={{
        width: wp('75%'),
        borderWidth: 1,
        borderRadius: 12,
        padding: 15,
        marginRight: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <Image source={images.userProfile} />
        <View style={{marginLeft: 10}}>
          <Text style={{color: theme.primaryGreen, fontSize: hp('2.2%')}}>
            {name}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: 'grey', fontSize: hp('1.5%')}}>
              {designation}
            </Text>
            <Text style={{color: 'grey', fontSize: hp('1.5%'), marginLeft: 10}}>
              {rating}
            </Text>
            <AntDesign
              name={'star'}
              size={12}
              color={'black'}
              style={{marginLeft: 3}}
            />
          </View>
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 0,
            borderRadius: 60,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          }}>
          <Feather name={'heart'} size={15} color={'black'} />
        </TouchableOpacity>
      </View>

      <Text style={{color: 'grey', fontSize: hp('2.2%'), marginVertical: 12}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <Text style={{color: 'black', fontSize: hp('2%')}}>$ 10.00/w</Text>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 4,
            padding: 5,
            marginLeft: 15,
            backgroundColor: theme.primaryGreen,
          }}>
          <Text style={{color: 'white', fontSize: hp('1.6%')}}>
            View Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ServiceProfiderProfile;

const styles = StyleSheet.create({});
