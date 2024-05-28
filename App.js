import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Routes from './src/routes';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { store } from './src/redux/Store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routes />
        <Toast />
      </Provider>
    </>
  )
}

export default App

const styles = StyleSheet.create({})