import {
  ActivityIndicator,
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
import { useDispatch, useSelector } from 'react-redux';
import { ClearToken } from '../../redux/Slices';
import { Logout } from '../../globalFunctions/Auth';

const OwnerHome = ({ navigation }) => {
  const token = useSelector(state => state.user.token)
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  const handleLogout = async () => {
    try {
      setIsLoading(true)
      const resp = await Logout(dispatch, token)
      console.log('resp', resp)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log('errssssssor', error)
    }
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'white', alignSelf: 'center' }}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <WelcomeHeader headerText={'Hey Alicia'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
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
          Which <Text style={{ fontWeight: 'bold' }}>Service</Text> Do You Need?
        </Text>

        <View
          style={{
            width: wp('90%'),
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 20
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('DogWalking')}
            style={styles.serviceCont}>
            <Image
              source={images.dogWalking}
              style={{ width: 100, objectFit: 'contain' }}
            />
            <Text style={{ color: theme.primaryGreen, fontSize: hp('2%'), marginTop: -20 }}>Dog Walking</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('HouseSitting')}
            style={styles.serviceCont}>
            <Image
              source={images.houseSitting}
              style={{ width: 100, objectFit: 'contain' }}
            />
            <Text style={{ color: theme.primaryGreen, fontSize: hp('2%'), marginTop: -20 }}>House Sitting</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: wp('90%'),
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
          <TouchableOpacity
            style={styles.serviceCont}>
            <Image
              source={images.dropInVisits}
              style={{ width: 100, objectFit: 'contain' }}
            />
            <Text style={{ color: theme.primaryGreen, fontSize: hp('2%'), marginTop: -20 }}>Drop-In Visits</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.serviceCont}>
            <Image
              source={images.Boarding}
              style={{ width: 100, objectFit: 'contain' }}
            />
            <Text style={{ color: theme.primaryGreen, fontSize: hp('2%'), marginTop: -20 }}>Boarding</Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            color: theme.primaryGreen,
            fontSize: hp('3%'),
            width: '88%',
            alignSelf: 'center',
            marginTop: 30
          }}>
          Top <Text style={{ fontWeight: 'bold' }}>Rated</Text> Profiles
        </Text>
        <View
          style={{
            alignSelf: 'center',
            width: '90%',
            marginTop: 20,
          }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ServiceProfiderProfile name={'John Doe'} designation={'Pet Sitter'} rating={4.9} />
            <ServiceProfiderProfile name={'John Doe'} designation={'Pet Sitter'} rating={4.9} />
            <ServiceProfiderProfile name={'John Doe'} designation={'Pet Sitter'} rating={4.9} />
          </ScrollView>
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
          {
            isLoading ?
              (
                <ActivityIndicator size={'large'} color={'white'} />
              )
              :
              (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={images.heartPaw} style={{ width: 30, height: 30 }} />
                  <Text style={{ color: 'white', fontSize: hp('2%'), marginLeft: 10, fontWeight: 'bold' }}>
                    Become A Pet Professional
                  </Text>
                </View>
              )
          }

        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default OwnerHome;

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
