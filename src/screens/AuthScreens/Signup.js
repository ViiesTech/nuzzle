import {
  Image,
  ScrollView,
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
import CustomInput from '../../components/CustomInput';

const Signup = ({navigation}) => {
  const [form, setForm] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phoneNumbers: '' 
  })

  const handleInputChange = (key, value) => {
    setForm(oldForm => ({...oldForm, [key]: value}))
  }
  
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center', paddingVertical: 30}}>
      <Text
        style={{
          fontSize: hp('3.5%'),
          // marginTop: 20,
          textAlign: 'center',
          width: wp('90%'),
          alignSelf: 'center',
          color: theme.primaryGreen,
        }}>
        Please Enter Your Name {'\n'}
        <Text style={{fontWeight: 'bold'}}>As It Appears On Your Id.</Text>
      </Text>
      <View
        style={{
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
        }}>
        <Text style={{color: 'black', fontSize: hp('2%'), fontWeight: 'bold', width: '88%', alignSelf: 'center', marginBottom: 10, marginTop: 20}}>Leagal First Name</Text>
        <CustomInput placeholder='Type Here' value={form.firstName} onChange={(changedText) => handleInputChange( 'firstName', changedText)} />
        
        <Text style={{color: 'black', fontSize: hp('2%'), fontWeight: 'bold', width: '88%', alignSelf: 'center', marginBottom: 10, marginTop: 20}}>Leagal Middle Name</Text>
        <CustomInput placeholder='Type Here' value={form.middleName} onChange={(changedText) => handleInputChange( 'middleName', changedText)} />
        
        <Text style={{color: 'black', fontSize: hp('2%'), fontWeight: 'bold', width: '88%', alignSelf: 'center', marginBottom: 10, marginTop: 20}}>Leagal Last Name</Text>
        <CustomInput placeholder='Type Here' value={form.lastName} onChange={(changedText) => handleInputChange( 'lastName', changedText)} />
        
        <Text style={{color: 'black', fontSize: hp('2%'), fontWeight: 'bold', width: '88%', alignSelf: 'center', marginBottom: 10, marginTop: 20}}>Email Address</Text>
        <CustomInput placeholder='Type Here' value={form.email} onChange={(changedText) => handleInputChange( 'email', changedText)} />

        <Text style={{color: 'black', fontSize: hp('2%'), fontWeight: 'bold', width: '88%', alignSelf: 'center', marginBottom: 10, marginTop: 20}}>Phone Number</Text>
        <CustomInput placeholder='Type Here' value={form.phoneNumbers} onChange={(changedText) => handleInputChange( 'phoneNumbers', changedText)} />

        <CustomButton
          onPress={() => navigation.navigate('MainStack')}
          btnText={'GET STARTED'}
        />
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({});
