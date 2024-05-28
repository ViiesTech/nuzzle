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


const WelcomeUser = ({navigation}) => {

  return (
    <View style={{flex: 1, backgroundColor:'white', alignSelf: 'center'}}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        <WelcomeHeader headerText={'Welcome Stephen'}  />
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingVertical: 30,
      }}>

      <View style={styles.internalCont}>
        <View style={{flexDirection: 'row', alignItems: 'center', width:'90%', alignSelf: 'center', marginVertical: 25}}>
          <View style={styles.numberCont}>
            <Text style={{fontSize: hp('2%'), color: 'black'}}>1</Text>
          </View>
          <Text style={{fontSize: hp('3.8%'), fontWeight: 'bold', color: 'black', marginLeft: 10}}>Welcome!</Text>
        </View>

        <Text style={{color: 'rgba(0,0,0,0.7)', width:'90%', fontSize: hp('2.5%'), alignSelf:'center', lineHeight: 30}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</Text>

        <CustomButton
          onPress={() => navigation.navigate('UserAboutQuiz')}
          btnText={'GET STARTED'}
        />
      </View>
    </ScrollView>
    </View>
  );
};

export default WelcomeUser;

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
