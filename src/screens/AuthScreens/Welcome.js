import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import images from '../../assets/images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import theme from '../../theme';
import CustomButton from '../../components/CustomButton';

const Welcome = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <Image
        source={require('../../assets/images/logo.png')}
        resizeMode="contain"
        style={{width: wp('60%'), height: hp('25%'), alignSelf: 'center'}}
      />
      <Image
        source={images.puppies}
        resizeMode="contain"
        style={{width: wp('97%'), height: hp('30%'), alignSelf: 'center'}}
      />

      <Text
        style={{
          fontSize: hp('4.5%'),
          marginTop: 20,
          textAlign: 'center',
          width: wp('90%'),
          alignSelf: 'center',
          color: theme.primaryGreen,
        }}>
        <Text style={{fontWeight: 'bold'}}>Take</Text> Better{' '}
        <Text style={{fontWeight: 'bold'}}>Care</Text> of Your{' '}
        <Text style={{fontWeight: 'bold'}}>Pets</Text>
      </Text>

      <Text
        style={{
          width: wp('85%'),
          alignSelf: 'center',
          textAlign: 'center',
          marginTop: 15,
          color: 'grey',
          fontSize: hp('2%'),
        }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <CustomButton onPress={() => navigation.navigate('Signup')} btnText={'GET STARTED'} />

      <View style={{width: wp('90%'), alignSelf: 'center', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <Text
          style={{
            color: 'grey',
            fontSize: hp('2%'),
          }}>
          Already have an account?
        </Text>
        <TouchableOpacity style={{borderBottomWidth: 1, borderColor: theme.primaryGreen, marginLeft: 5, padding: 3}}>
        <Text
          style={{
            color: theme.primaryGreen,
            fontSize: hp('2%'),
          }}>
          Login
        </Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
