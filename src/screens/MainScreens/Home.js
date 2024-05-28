import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import images from '../../assets/images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import theme from '../../theme';
import CustomButton from '../../components/CustomButton';
import WelcomeHeader from '../../components/WelcomeHeader';
import JobCard from '../../components/JobCard';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', alignSelf: 'center'}}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <WelcomeHeader headerText={'Hey Alicia'} />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingVertical: 30,
        }}>
        <Text
          style={{
            color: theme.primaryGreen,
            fontSize: hp('3%'),
            width: '90%',
            alignSelf: 'center',
          }}>
          Find Your Dream Pet Care Job!
        </Text>

        <Text
          style={{
            color: theme.primaryGreen,
            fontSize: hp('2.4%'),
            width: '90%',
            alignSelf: 'center',
            marginTop: 15,
          }}>
          Dog Walking
        </Text>
        <View
          style={{
            alignSelf: 'center',
            width: '90%',
            marginTop: 20,
          }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <JobCard serviceName={'Morning Walk'} />
            <JobCard serviceName={'Morning Walk'} />
          </ScrollView>
        </View>

        <Text
          style={{
            color: theme.primaryGreen,
            fontSize: hp('2.4%'),
            width: '90%',
            alignSelf: 'center',
            marginTop: 15,
          }}>
          House Sitting
        </Text>
        <View
          style={{
            alignSelf: 'center',
            width: '90%',
            marginTop: 20,
          }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <JobCard serviceName={'House Sitting'} />
            <JobCard serviceName={'House Sitting'} />
          </ScrollView>
        </View>

        <Text
          style={{
            color: theme.primaryGreen,
            fontSize: hp('2.4%'),
            width: '90%',
            alignSelf: 'center',
            marginTop: 15,
          }}>
          Drop-In Visits
        </Text>
        <View
          style={{
            alignSelf: 'center',
            width: '90%',
            marginTop: 20,
          }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <JobCard serviceName={'Drop-In Visits'} />
            <JobCard serviceName={'Drop-In Visits'} />
          </ScrollView>
        </View>

        <Text
          style={{
            color: theme.primaryGreen,
            fontSize: hp('2.4%'),
            width: '90%',
            alignSelf: 'center',
            marginTop: 15,
          }}>
          Boarding
        </Text>
        <View
          style={{
            alignSelf: 'center',
            width: '90%',
            marginTop: 20,
          }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <JobCard serviceName={'Boarding'} />
            <JobCard serviceName={'Boarding'} />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

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
});
