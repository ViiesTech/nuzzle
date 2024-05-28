import axios from "axios";
import { BaseUrl } from "../baseUrl/BaseUrl";
import { ShowToast } from "./ShowToast";
import { ClearToken } from "../redux/Slices";
import { UserLogin } from "../redux/Slices";

 const Signup = async (name, email, password, imageDetails) => {
    let data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('password', password);
    data.append('retypepassword', password);
    data.append('profileImage', {
        uri: imageDetails?.path,
        name: 'Profile',
        type: imageDetails?.mime,
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${BaseUrl}signup`,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        data: data
    };
    try {
        const response = await axios.request(config)
        console.log('response data', response.data)
        return response.data
    } catch (error) {
        console.log('error response', error)
        throw error
    }
}

 const LoginUser = async (dispatch, email, password) => {
    let data = JSON.stringify({
        "email": email,
        "password": password
    });
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${BaseUrl}signin`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    dispatch(UserLogin(config))
}

 const Logout = async (dispatch, token) => {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${BaseUrl}logout`,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };
    try {
        const response = await axios.request(config)
        ShowToast('success', response.data.message)
        if (response.data.success) {
            dispatch(ClearToken())
        }
        console.log('responsessss', response.data)
        return response.data
    } catch (error) {
        ShowToast('error', error.message)
        console.log('error', error)
        throw error
    }

}

export { Signup, LoginUser, Logout }
