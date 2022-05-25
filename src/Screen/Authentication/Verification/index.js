import { View, ScrollView, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Toast from 'react-native-root-toast';
import { api } from '../../../Config/Api'
import axios from 'axios';
import CountDown from 'react-native-countdown-component';
import { useSelector } from 'react-redux';
export default function ({ navigation }) {
  const [digitOne, setDigitOne] = useState("")
  const [digitTwo, setDigitTwo] = useState("")
  const [digitThree, setDigitThree] = useState("")
  const [digitFour, setDigitFour] = useState("")
  const otp = digitOne + digitTwo + digitThree + digitFour
  const state = useSelector(state => state);
  const verify = () => {
    axios.post(`${api}/auth/register/verify`, { otp: otp }).then((response) => {
      if (response.data.message === "Your One Time Verification is Invalid") {
        let toast = Toast.show(`${response.data.message}`, {
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
      else {
        let toast = Toast.show(`${response.data.message}`, {
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
        navigation.navigate("Login")
      }

    })
      .catch((err) => { })
  }
  const resendOtp = () => {
    axios.post(`${api}/auth/register/resend`, { id: state.UserId, phoneNumber: state.RegisterMobileNumber }).then((response) => {
      if (response.data.message !== "User Not Found" || response.data.message !== undefined) {
        let toast = Toast.show('OTP Sucessfully Resend', {
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
      .catch((err) => { })
  }

  const ref1 = useRef("1");
  const ref2 = useRef("2");
  const ref3 = useRef("3");
  const registerNumber = state?.RegisterMobileNumber.slice(0, 8) + state?.RegisterMobileNumber.slice(7, 20).replace(/.(?=...)/g, '*');
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <View style={{ marginRight: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <MaterialIcons name="keyboard-backspace" size={34} color='#175271' />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ color: '#175271', fontSize: 24, fontWeight: '400' }}>OTP Verification</Text>
          </View>
        </View>
        <View style={{ marginVertical: 27 }}>
          <Text style={{ color: '#F2F2F2', fontSize: 30, fontWeight: '400' }}>Please Enter</Text>
          <Text style={{ color: '#F2F2F2', fontSize: 30, fontWeight: '400' }}>OTP Verification</Text>
          <View style={{ marginVertical: 16 }}>
            <Text style={{ color: '#6D7078', fontSize: 17, fontWeight: '300' }}>Code was sent to {registerNumber}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: '#6D7078', fontSize: 17, fontWeight: '300' }}>This code will expire in </Text>
              <CountDown
                until={300}
                onFinish={() => {
                  let toast = Toast.show('Your otp is expired', {
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
                }
                size={15}
                digitStyle={{ backfaceVisibility: 'hidden', marginLeft: 0, marginTop: -7 }}
                digitTxtStyle={{ color: 'red', fontSize: 18, marginLeft: -5 }}
                timeToShow={['M', 'S']}
                timeLabels={{ m: null, s: null }}
                showSeparator={true}
                separatorStyle={{ color: "red", marginTop: -7, marginLeft: -8 }}
              />
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
          <TextInput keyboardType='numeric' onChangeText={(text) => {
            text.length === 1 ? ref1.current.focus() : null
            setDigitOne(text)
          }} returnKeyType="next" maxLength={1} style={{ backgroundColor: digitOne.length == 0 ? '#2A2F3B' : "#15374E", width: 70, height: 70, borderRadius: 15, textAlign: 'center', fontSize: 34, color: "white", fontWeight: '600' }} />
          <TextInput ref={ref1} returnKeyType="next" keyboardType='numeric' onChangeText={(text) => {
            text.length === 1 ? ref2.current.focus() : null
            setDigitTwo(text)
          }} maxLength={1} style={{ backgroundColor: digitTwo == "" ? '#2A2F3B' : "#15374E", width: 70, height: 70, borderRadius: 15, textAlign: 'center', fontSize: 34, color: "white", fontWeight: '600' }} />
          <TextInput ref={ref2} returnKeyType="next" keyboardType='numeric' onChangeText={(text) => {
            text.length === 1 ? ref3.current.focus() : null
            setDigitThree(text)
          }} maxLength={1} style={{ backgroundColor: digitThree == "" ? '#2A2F3B' : "#15374E", width: 70, height: 70, borderRadius: 15, textAlign: 'center', fontSize: 34, color: "white", fontWeight: '600' }} />
          <TextInput ref={ref3} keyboardType='numeric' onChangeText={(text) => { setDigitFour(text) }} maxLength={1} style={{ backgroundColor: digitFour == "" ? '#2A2F3B' : "#15374E", width: 70, height: 70, borderRadius: 15, textAlign: 'center', fontSize: 34, color: "white", fontWeight: '600' }} />
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 20, justifyContent: 'space-between', }}>
          <View>
            <Text style={{ color: "white", fontSize: 16, letterSpacing: 1, fontWeight: '300' }}>Didn't receive an OTP?</Text>
          </View>
          <View >
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={resendOtp}>
              <AntDesign name="reload1" size={15} color='#175271' style={{ marginRight: 5 }} />
              <Text style={{ color: '#175271', fontSize: 15 }}>Resend</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 180 }}>
          <TouchableOpacity onPress={verify} style={{ backgroundColor: digitOne.length == 0 || digitTwo.length == 0 || digitThree.length == 0 || digitFour.length == 0 ? '#21283F' : '#175271', paddingVertical: 10, borderRadius: 10 }}>
            <Text style={{ textAlign: 'center', color: "#fff", fontSize: 22, fontWeight: '400' }}>Verify and Create Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView >
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141927',
    paddingHorizontal: 20,
    paddingTop: 80
  },
});
