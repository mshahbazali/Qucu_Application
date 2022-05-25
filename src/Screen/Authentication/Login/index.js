import { View, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, Text } from 'react-native'
import React, { useState, useRef } from 'react'
import { api } from '../../../Config/Api';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Toast from 'react-native-root-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index({ navigation }) {
  const [identifierInput, setIdentifierInput] = useState(false)
  const [passwordInput, setPasswordInput] = useState(false)
  const [identifier, setIdentifier] = useState(undefined)
  const [password, setPassword] = useState(undefined)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [identifierError, setIdentifierError] = useState(undefined)
  const [passwordError, setPasswordError] = useState();

  const loginUser = () => {
    const userData = {
      identifier: identifier,
      password: password
    }
    axios.post(`${api}/auth/login/`, userData)
      .then(async (response) => {
        if (response.data.token) {
          const token = JSON.stringify({ token: response.data.token })
          await AsyncStorage.setItem('token', token)
          let toast = Toast.show(`Your account successfully logged`, {
            duration: Toast.durations.LONG,
            position: Toast.positions.TOP,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
          });
          setTimeout(function () {
            Toast.hide(toast);
          }, 10000);
          navigation.navigate("Bottom")
        }
        else {
          let toast = Toast.show(`Please enter valid login detail`, {
            duration: Toast.durations.LONG,
            position: Toast.positions.TOP,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
          });
          setTimeout(function () {
            Toast.hide(toast);
          }, 10000);
        }
      })
      .catch(function (error) {

      });
  }
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.logoContainer}>
          <Image source={require("../../../Assests/Images/logo.png")} style={styles.logo} />
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <View style={{ marginTop: 20 }}>
            <Text style={{ color: "#fff", marginBottom: 5 }}>Email, Phone or User</Text>
            <TextInput keyboardType='default' onChangeText={(text) => setIdentifier(text)} onFocus={() => {
              setIdentifierInput(true)
              setPasswordInput(false)
              setIdentifierError(undefined)
            }} placeholder="Enter any of above" placeholderTextColor={"#2D344B"} style={{ borderBottomColor: identifierError !== undefined ? "red" : identifierInput == false ? "#323232" : "#175676", borderBottomWidth: 2, color: "#fff", fontWeight: "600", paddingBottom: 10, fontSize: 15 }} />
            <Text style={{ color: "red", marginTop: 5, display: identifierError == undefined ? "none" : "flex" }}>Please Enter Valid Identifier</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ color: "#fff", marginBottom: 5 }}>Password</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: "100%" }}>
                <TextInput keyboardType="default" secureTextEntry={passwordVisible == true ? false : true} onChangeText={(text) => setPassword(text)} onFocus={() => {
                  setIdentifierInput(false)
                  setPasswordInput(true)
                  setPasswordError(undefined)
                }} placeholder="Enter your password" placeholderTextColor={"#2D344B"} style={{ borderBottomColor: passwordError !== undefined ? "red" : passwordInput == false ? "#323232" : "#175676", borderBottomWidth: 2, color: "#fff", fontWeight: "600", paddingBottom: 10, fontSize: 15 }} />
              </View>
              <View style={{ position: 'absolute', right: 0 }}>
                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                  <AntDesign name="eye" size={30} color={passwordVisible == false ? "#2C2D30" : "#fff"} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={{ color: "red", marginTop: 5, display: passwordError == undefined ? "none" : "flex" }}>Please Enter Password</Text>
          </View>
          <View style={styles.loginTextContainer}>
            <TouchableOpacity onPress={() => { navigation.navigate("ForgotPassword") }}>
              <Text style={styles.loginText}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 50 }}>
            <TouchableOpacity onPress={() => {
              identifier === undefined ? setIdentifierError(true) : null
              password === undefined ? setPasswordError(true) : null
              identifier === undefined || password === undefined ? null : loginUser()
            }} style={{ backgroundColor: identifier === undefined || password === undefined ? '#21283F' : "#175676", paddingVertical: 10, borderRadius: 10 }}>
              <Text style={{ textAlign: 'center', color: "#fff", fontSize: 22, fontWeight: '400' }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141927",
    flex: 1
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  logo: {
    width: 340,
    height: 340
  },
  loginTextContainer: {
    marginTop: 50,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginText: {
    color: "#fff",
    textDecorationLine: "underline",
    fontSize: 20
  },
})