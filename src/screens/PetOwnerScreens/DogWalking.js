import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import images from '../../assets/images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import theme from '../../theme';
import CustomButton from '../../components/CustomButton';
import WelcomeHeader from '../../components/WelcomeHeader';
import JobCard from '../../components/JobCard';
import ServiceProfiderProfile from '../../components/ServiceProfiderProfile';

const DogWalking = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', alignSelf: 'center' }}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <WelcomeHeader headerText={'Hey Alicia'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingVertical: 20,
        }}>
        <Text
          style={{
            color: theme.primaryGreen,
            fontSize: hp('3.5%'),
            width: '90%',
            alignSelf: 'center',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
          Dog Walking
        </Text>

        <View style={{ alignSelf: 'center', marginTop: 15 }}>
          <ServiceProfiderProfile name={'John Doe'} designation={'Dog Walking'} rating={4.9} />
        </View>

        <View style={{ alignSelf: 'center', marginTop: 15 }}>
          <ServiceProfiderProfile name={'John Doe'} designation={'Dog Walking'} rating={4.9} />
        </View>

        <View style={{ alignSelf: 'center', marginTop: 15 }}>
          <ServiceProfiderProfile name={'John Doe'} designation={'Dog Walking'} rating={4.9} />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('EnterDetails')}
          style={{
            borderWidth: 1,
            borderRadius: 12,
            padding: 10,
            backgroundColor: theme.primaryGreen,
            width: wp('88%'),
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
            marginBottom: 20,
          }}>
          <Image source={images.heartPaw} style={{ width: 30, height: 30 }} />
          <Text style={{ color: 'white', fontSize: hp('2%'), marginLeft: 10, fontWeight: 'bold' }}>
            Become A Pet Professional
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default DogWalking;

const styles = StyleSheet.create({
  internalCont: {
    width: wp('90%'),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    paddingBottom: 30,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  numberCont: {
    width: 35,
    height: 35,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  serviceCont: {
    width: '47%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    paddingBottom: 15
  }
});
