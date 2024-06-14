import {
    ActivityIndicator,
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
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import { handleImagePicker } from '../../globalFunctions/ImagePicker';
import { ShowToast } from '../../globalFunctions/ShowToast';
import { Signup } from '../../globalFunctions/Auth';
const Registeration = ({ navigation }) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const [isLoading, setIsLoading] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(true)
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true)
    const [imageDetails, setImageDetails] = useState()
    const handleInputChange = (key, value) => {
        setForm(oldForm => ({ ...oldForm, [key]: value }))
    }
    const openPicker = async () => {
        const respose = await handleImagePicker()
        console.log('response', respose)
        setImageDetails(respose)
    }
    const handleRegisteration = async () => {
        const { name, email, password, confirmPassword } = form
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!name || !email || !password || !confirmPassword) {
            return ShowToast('error', 'Plz Fill The Required Fields')
        }
        else if (!email.toLowerCase().match(regexEmail)) {
            return ShowToast('error', 'This Email Is Not Valid')
        }
        else if (password !== confirmPassword) {
            return ShowToast('error', 'Passwords Doesnt Match')
        }
        else if (!imageDetails) {
            return ShowToast('error', 'Plz Select A Profile Picture')

        }
        try {
            setIsLoading(true)
            const response = await Signup(name, email, password, imageDetails)
            setIsLoading(false)
            console.log('response', response)
            if (response.success) {
                ShowToast('success', 'Registeration Successful')
                navigation.navigate('Login')
            } else {
                ShowToast('error', response.message)
            }
        } catch (error) {
            setIsLoading(false)
            ShowToast('error', error.message)
            console.log('error', error)
        }
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingVertical: 30 }}>
            <Text
                style={{
                    fontSize: hp('3.5%'),
                    textAlign: 'center',
                    width: wp('90%'),
                    alignSelf: 'center',
                    color: theme.primaryGreen,
                }}>
                <Text style={{ fontWeight: 'bold' }}>Create Your Account</Text>
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
                <TouchableOpacity onPress={openPicker} style={{ marginTop: 10, height: 120, width: 120, borderRadius: 60, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', backgroundColor: '#dddddd' }}>
                    {imageDetails ? (
                        <Image source={{ uri: imageDetails.path }} style={{ height: '100%', width: "100%", borderRadius: 60 }} />
                    ) : (

                        <Feather name='user' size={50} color={'white'} />
                    )
                    }
                </TouchableOpacity>
                <View style={{paddingHorizontal:20}}>
                <Text style={{ color: 'black', fontSize: hp('2%'), fontWeight: 'bold', marginBottom: 10, marginTop: 20 }}>Name</Text>
                <CustomInput width={'100%'} placeholder='Type Here' value={form.name} onChange={(changedText) => handleInputChange('name', changedText)} />

                <Text style={{ color: 'black', fontSize: hp('2%'), fontWeight: 'bold', marginBottom: 10, marginTop: 20 }}>Email</Text>
                <CustomInput width={'100%'} keyboardType={'email-address'} placeholder='Type Here' value={form.email} onChange={(changedText) => handleInputChange('email', changedText)} />

                <Text style={{ color: 'black', fontSize: hp('2%'), fontWeight: 'bold', marginBottom: 10, marginTop: 20 }}>Password</Text>
                <View style={{}}>

                    <CustomInput width={'100%'} secureTextEntry={passwordVisible} placeholder='Type Here' value={form.password} onChange={(changedText) => handleInputChange('password', changedText)} />
                    <View style={{ position: 'absolute', right: 10, height: '100%', justifyContent: 'center',}}>
                        <TouchableOpacity style={{}} onPress={() => setPasswordVisible(!passwordVisible)}>
                            <Entypo name={passwordVisible ? 'eye-with-line' : 'eye'} size={25} />
                        </TouchableOpacity>
                    </View>
                </View>

                <Text style={{ color: 'black', fontSize: hp('2%'), fontWeight: 'bold', marginBottom: 10, marginTop: 20 }}>Confirm Password</Text>
                <View style={{}}>

                    <CustomInput width={'100%'} secureTextEntry={confirmPasswordVisible} placeholder='Type Here' value={form.confirmPassword} onChange={(changedText) => handleInputChange('confirmPassword', changedText)} />
                    <View style={{ position: 'absolute',right:10, height: '100%', justifyContent: 'center', }}>
                        <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                            <Entypo name={confirmPasswordVisible ? 'eye-with-line' : 'eye'} size={25} />
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
                <CustomButton
                    onPress={handleRegisteration}
                    isLoading={isLoading}
                    btnText={'Signup'}
                />

                <View style={{ width: wp('90%'), alignSelf: 'center', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Text
                        style={{
                            color: 'grey',
                            fontSize: hp('2%'),
                        }}>
                        Already have an account?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ marginLeft: 5, padding: 3 }}>
                        <Text
                            style={{
                                color: theme.primaryGreen,
                                fontSize: hp('2%'),
                            }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default Registeration;

const styles = StyleSheet.create({});
