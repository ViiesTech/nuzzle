import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import CustomButton from '../../components/CustomButton';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Congrats = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.interalCont}>
        <Text
          style={styles.textCont}>
          <Text style={{fontWeight:'bold'}}>Congrats</Text> you passed the <Text style={{fontWeight:'bold'}}>quiz!</Text>
        </Text>
        <Feather name={'check-circle'} size={125} color={'green'} />
        <CustomButton btnText={'Continue'} style={{marginTop: 0}} onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
};

export default Congrats;

const styles = StyleSheet.create({
    interalCont: {
        backgroundColor: 'white',
        width: '85%',
        height: '45%',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
        borderRadius: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
      },
      textCont: {
        fontSize: hp('3.5%'),
        color: 'black',
        textAlign: 'center',
        width: '90%',
        alignSelf: 'center',
      }

});
