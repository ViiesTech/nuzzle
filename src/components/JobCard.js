import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Feather from 'react-native-vector-icons/Feather'
import images from '../assets/images'
import CustomButton from './CustomButton'

const JobCard = ({serviceName}) => {
  return (
    <View style={{width: wp('75%'), borderWidth: 1, borderRadius: 12, padding: 15, marginRight: 10}}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
            <Text style={{color: 'black', fontSize: hp('3%')}}>{serviceName}</Text>
            <Feather name={'bookmark'} size={25} color={'black'} />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'flex-start', marginTop: 10}}>
            <Text style={{color: 'black', fontSize: hp('2%')}}>10$ Hourly</Text>
            <TouchableOpacity style={{borderWidth: 1, borderRadius: 4, padding: 5, marginLeft: 15}}>
                <Text style={{color: 'black', fontSize: hp('1.6%')}}>FULL TIME</Text>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20, alignItems:'center', justifyContent: 'flex-start'}}>
            <Image source={images.llcName} />
            <View style={{marginLeft: 10}}>
                <Text style={{color: 'black', fontSize: hp('2%')}}>Channel Inc, LLC</Text>
                <Text style={{color: 'black', fontSize: hp('1.5%')}}>San Diago</Text>
            </View>
            <Text style={{color: 'black', fontSize: hp('1.5%'), alignSelf: 'flex-end', position: 'absolute', right: 0}}>4 days ago</Text>
        </View>

        <CustomButton btnText={'Apply Now'} style={{marginTop: 20, width: '100%', paddingVertical: 8}} textStyle={{fontSize: hp('1.6%')}} />
    </View>
  )
}

export default JobCard

const styles = StyleSheet.create({})