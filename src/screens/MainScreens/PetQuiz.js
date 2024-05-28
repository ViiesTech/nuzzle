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
  
  
  const PetQuiz = ({navigation}) => {
  
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
              <Text style={{fontSize: hp('2%'), color: 'black'}}>3</Text>
            </View>
            <Text style={{fontSize: hp('3.8%'), fontWeight: 'bold', color: 'black', marginLeft: 10}}>Pet Quiz</Text>
          </View>

          <Text style={{color: 'black', fontWeight:'bold', fontSize: hp('2.4%'), width: '88%', alignSelf:'center'}}>Test Your Pet Care Knowledge</Text>
          <Text style={{color: 'black', fontSize: hp('2%'), width: '88%', alignSelf:'center'}}>Answer Each Question Inn Order To Test Your Knowledge (Required)</Text>
  
          <CustomButton
            onPress={() => navigation.navigate('AllQuestions')}
            btnText={'TAKE A QUIZ'}
          />
        </View>
      </ScrollView>
      </View>
    );
  };
  
  export default PetQuiz;
  
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
  