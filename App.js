import React, { useState, useEffect } from 'react'
import { Stack, Bottom } from './src/Config/Navigation'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { RootSiblingParent } from 'react-native-root-siblings';
 import { Provider } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Store from './src/Store';

export default function App() {
  const [token, setToken] = useState();
  const getToken = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('token')
      return jsonValue != null ? setToken(JSON.parse(jsonValue)) : null;
    } catch (e) { }
  }
  useEffect(() => {
    getToken()
  }, [])
  return (
    <Provider store={Store}>
      <RootSiblingParent>
        <NavigationContainer>
          {
            token == undefined ?
              <Stack />
              :
              <Bottom />
          }
        </NavigationContainer>
      </RootSiblingParent>
    </Provider>
  );
}
