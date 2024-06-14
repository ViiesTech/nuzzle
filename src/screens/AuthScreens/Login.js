import {
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import theme from '../../theme';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import Entypo from 'react-native-vector-icons/Entypo'
import { ShowToast } from '../../globalFunctions/ShowToast';
import { useDispatch, useSelector } from 'react-redux';
import { LoginUser } from '../../globalFunctions/Auth';
const Login = ({ navigation }) => {
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.user.isLoading)
    const [form, setForm] = useState({
        email: '',
        password: '',
    })
    const [passwordVisible, setPasswordVisible] = useState(true)
    const handleInputChange = (key, value) => {
        setForm(oldForm => ({ ...oldForm, [key]: value }))
    }
    const { email, password, } = form
    const handleLogin = async () => {
        if (!email || !password) {
            return ShowToast('error', 'Plz Fill The Required Fields')
        }
        try {
            const response = await LoginUser(dispatch, email, password)
        } catch (error) {
            ShowToast('error', error.message)
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
                <Text style={{ fontWeight: 'bold' }}>Welcome Back</Text>
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
                    <View style={{paddingHorizontal:20}}>
                <Text style={{ color: 'black', fontSize: hp('2%'), fontWeight: 'bold',   marginBottom: 10, marginTop: 20 }}>Email</Text>
                <CustomInput width={'100%'} keyboardType={'email-address'} placeholder='Type Here' value={email} onChange={(changedText) => handleInputChange('email', changedText)} />
                <Text style={{ color: 'black', fontSize: hp('2%'), fontWeight: 'bold',   marginBottom: 10, marginTop: 20 }}>Password</Text>
                <View style={{}}>
                    <CustomInput width={'100%'} secureTextEntry={passwordVisible} placeholder='Type Here' value={password} onChange={(changedText) => handleInputChange('password', changedText)} />
                    <View style={{ position: 'absolute', right: 10, height: '100%', justifyContent: 'center', }}>
                        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                            <Entypo name={passwordVisible ? 'eye-with-line' : 'eye'} size={25} />
                        </TouchableOpacity>
                    </View>
                </View>
                </View>

                <CustomButton
                    onPress={handleLogin}
                    isLoading={isLoading}
                    btnText={'Login'}
                />
                <View style={{ width: wp('90%'), alignSelf: 'center', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Text
                        style={{
                            color: 'grey',
                            fontSize: hp('2%'),
                        }}>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Registeration')} style={{ marginLeft: 5, padding: 3 }}>
                        <Text
                            style={{
                                color: theme.primaryGreen,
                                fontSize: hp('2%'),
                            }}>
                            Signup
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default Login;
