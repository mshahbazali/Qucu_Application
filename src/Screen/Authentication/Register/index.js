import { View, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, Text } from 'react-native'
import React, { useState } from 'react'
import PhoneInput from "react-native-phone-number-input";
import CheckBox from '@react-native-community/checkbox';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { api } from '../../../Config/Api';
import axios from 'axios';
import Toast from 'react-native-root-toast';
import { useSelector, useDispatch } from 'react-redux';
export default function Index({ navigation }) {
    const [focusInputOne, setFocusInputOne] = useState(false)
    const [focusInputTwo, setsetFocusInputTwoFocus] = useState(false)
    const [focusInputThree, setFocusInputThreeFocus] = useState(false)
    const [focusInputFour, setFocusInputFourFocus] = useState(false)
    const [focusInputFive, setFocusInputFiveFocus] = useState(false)
    const [focusInputSix, setFocusInputSixFocus] = useState(false)
    const [focusInputSeven, setFocusInputSevenFocus] = useState(false)
    const [firstName, setFirstName] = useState(undefined)
    const [lastName, setLastName] = useState(undefined)
    const [userName, setUserName] = useState(undefined)
    const [email, setEmail] = useState(undefined)
    const [phoneNumber, setPhoneNumber] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const [confirmPassword, setConfirmPassword] = useState(undefined)
    const [checked, setChecked] = useState()
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false)
    const [firstNameError, setFirstNameError] = useState()
    const [lastNameError, setLastNameError] = useState()
    const [userError, setUserError] = useState()
    const [emailError, setEmailError] = useState()
    const [phoneError, setPhoneError] = useState()
    const [passwordError, setPasswordError] = useState()
    const [confirmPasswordError, setConfirmPasswordError] = useState()
    const state = useSelector(state => state)
    const [validEmail, setValidEmail] = useState();
    const EmailValidate = (text) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        setValidEmail(reg.test(text))
        if (reg.test(text) == true) {
            setEmail(text)
        }
    };
    const registerUser = () => {
        const userData = {
            firstName: firstName,
            lastName: lastName,
            username: userName,
            email: email,
            phoneNumber: phoneNumber,
            password: password
        }
        state.RegisterMobileNumber = phoneNumber
        axios.post(`${api}/auth/register`, userData)
            .then(function (response) {
                state.UserId = response.data?.user?._id
                if (response.data.message === 'Your phone number is already registered') {
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
                    navigation.navigate("Verification")
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
                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <View style={{ width: "45%" }}>
                            <Text style={{ color: "#fff" }}>First Name</Text>
                            <TextInput keyboardType='default' onChangeText={(text) => setFirstName(text)} onFocus={() => {
                                setFocusInputOne(true)
                                setsetFocusInputTwoFocus(false)
                                setFocusInputThreeFocus(false)
                                setFocusInputFourFocus(false)
                                setFocusInputFiveFocus(false)
                                setFocusInputSixFocus(false)
                                setFocusInputSevenFocus(false)
                                setFirstNameError(undefined)
                            }} placeholder="Your First Name" placeholderTextColor={"#2D344B"} style={{ borderBottomColor: firstNameError !== undefined ? "red" : focusInputOne == false ? "#323232" : "#175676", borderBottomWidth: 2, color: "#fff", fontWeight: "600", paddingBottom: 10, fontSize: 15 }} />
                            <Text style={{ color: "red", marginTop: 5, display: firstNameError == undefined ? "none" : "flex" }}>Please Enter First Name</Text>
                        </View>
                        <View style={{ width: "45%" }}>
                            <Text style={{ color: "#fff", }}>Last Name</Text>
                            <TextInput keyboardType='default' onChangeText={(text) => setLastName(text)} onFocus={() => {
                                setFocusInputOne(false)
                                setsetFocusInputTwoFocus(true)
                                setFocusInputThreeFocus(false)
                                setFocusInputFourFocus(false)
                                setFocusInputFiveFocus(false)
                                setFocusInputSixFocus(false)
                                setFocusInputSevenFocus(false)
                                setLastNameError(undefined)
                            }} placeholder="Your Last Name" placeholderTextColor={"#2D344B"} style={{ borderBottomColor: lastNameError !== undefined ? "red" : focusInputTwo == false ? "#323232" : "#175676", borderBottomWidth: 2, color: "#fff", fontWeight: "600", paddingBottom: 10, fontSize: 15 }} />
                            <Text style={{ color: "red", marginTop: 5, display: lastNameError == undefined ? "none" : "flex" }}>Please Enter Last Name</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ color: "#fff" }}>User</Text>
                        <TextInput keyboardType='default' onChangeText={(text) => setUserName(text)} onFocus={() => {
                            setFocusInputOne(false)
                            setsetFocusInputTwoFocus(false)
                            setFocusInputThreeFocus(true)
                            setFocusInputFourFocus(false)
                            setFocusInputFiveFocus(false)
                            setFocusInputSixFocus(false)
                            setFocusInputSevenFocus(false)
                            setUserError(undefined)
                        }} placeholder="Create a user" placeholderTextColor={"#2D344B"} style={{ borderBottomColor: userError !== undefined ? "red" : focusInputThree == false ? "#323232" : "#175676", borderBottomWidth: 2, color: "#fff", fontWeight: "600", paddingBottom: 10, fontSize: 15 }} />
                        <Text style={{ color: "red", marginTop: 5, display: userError == undefined ? "none" : "flex" }}>Please Enter User Name</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ color: "#fff" }}>Email</Text>
                        <TextInput keyboardType='email-address' onChangeText={EmailValidate} onFocus={() => {
                            setFocusInputOne(false)
                            setsetFocusInputTwoFocus(false)
                            setFocusInputThreeFocus(false)
                            setFocusInputFourFocus(true)
                            setFocusInputFiveFocus(false)
                            setFocusInputSixFocus(false)
                            setFocusInputSevenFocus(false)
                            setEmailError(undefined)
                        }} placeholder="Your email" placeholderTextColor={"#2D344B"} style={{ borderBottomColor: validEmail == false ? "red" : emailError !== undefined ? "red" : focusInputFour == false ? "#323232" : "#175676", borderBottomWidth: 2, color: "#fff", fontWeight: "600", paddingBottom: 10, fontSize: 15 }} />
                        <Text style={{ color: "red", marginTop: 5, display: validEmail == false ? "flex" : emailError == undefined ? "none" : "flex" }}>Please Enter Valid Email</Text>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ color: "#fff", }}>Phone</Text>
                        <PhoneInput
                            defaultCode="MX"
                            layout="first"
                            onChangeFormattedText={(text) => {
                                setPhoneNumber(text);
                            }}
                            withDarkTheme
                            withShadow
                            textInputProps={{ placeholderTextColor: "#2D344B" }}
                            containerStyle={{ marginTop: -5, borderBottomColor: phoneError !== undefined ? "red" : focusInputFive == false ? "#323232" : "#175676", borderBottomWidth: 2, color: "#fff", fontWeight: "600", width: '100%', fontSize: 15, backgroundColor: "#141927" }}
                            textContainerStyle={{ color: "#fff", fontWeight: "600", fontSize: 15, backgroundColor: "#141927" }}
                            textInputStyle={{ color: "#fff", fontWeight: "600", fontSize: 15, backgroundColor: "#141927" }}
                            codeTextStyle={{ color: phoneNumber == undefined ? "#2D344B" : "#fff", fontWeight: "600", fontSize: 15, backgroundColor: "#141927" }}
                        />
                        <Text style={{ color: "red", marginTop: 5, display: phoneError == undefined ? "none" : "flex" }}>Please Enter Phone Number</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ color: "#fff" }}>Password</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: "100%" }}>
                                <TextInput keyboardType="default" secureTextEntry={passwordVisible == true ? false : true} onChangeText={(text) => setPassword(text)} onFocus={() => {
                                    setFocusInputOne(false)
                                    setsetFocusInputTwoFocus(false)
                                    setFocusInputThreeFocus(false)
                                    setFocusInputFourFocus(false)
                                    setFocusInputFiveFocus(false)
                                    setFocusInputSixFocus(false)
                                    setFocusInputSevenFocus(true)
                                    setPasswordError(undefined)
                                }} placeholder="Create a Password" placeholderTextColor={"#2D344B"} style={{ borderBottomColor: passwordError !== undefined ? "red" : focusInputSeven == false ? "#323232" : "#175676", borderBottomWidth: 2, color: "#fff", fontWeight: "600", paddingBottom: 10, fontSize: 15 }} />
                            </View>
                            <View style={{ position: 'absolute', right: 0 }}>
                                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                                    <AntDesign name="eye" size={30} color={passwordVisible == false ? "#2C2D30" : "#fff"} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={{ color: "red", marginTop: 5, display: passwordError == undefined ? "none" : "flex" }}>Please Enter Password</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ color: "#fff" }}>Confirm Password</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: "100%" }}>
                                <TextInput keyboardType="default" secureTextEntry={passwordConfirmVisible == true ? false : true} onChangeText={(text) => setConfirmPassword(text)} onFocus={() => {
                                    setFocusInputOne(false)
                                    setsetFocusInputTwoFocus(false)
                                    setFocusInputThreeFocus(false)
                                    setFocusInputFourFocus(false)
                                    setFocusInputFiveFocus(false)
                                    setFocusInputSixFocus(false)
                                    setFocusInputSevenFocus(true)
                                    setConfirmPasswordError(undefined)
                                }} placeholder="Please Confirm Password" placeholderTextColor={"#2D344B"} style={{ borderBottomColor: confirmPasswordError !== undefined ? "red" : focusInputSeven == false ? "#323232" : "#175676", borderBottomWidth: 2, color: "#fff", fontWeight: "600", paddingBottom: 10, fontSize: 15 }} />
                            </View>
                            <View style={{ position: 'absolute', right: 0 }}>
                                <TouchableOpacity onPress={() => setPasswordConfirmVisible(!passwordConfirmVisible)}>
                                    <AntDesign name="eye" size={30} color={passwordConfirmVisible == false ? "#2C2D30" : "#fff"} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={{ color: "red", marginTop: 5, display: confirmPasswordError == undefined ? "none" : "flex" }}>Please Enter Valid Confirm Password</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "flex-start", marginTop: 20 }}>
                        <View >
                            <CheckBox
                                value={checked}
                                onValueChange={(value) => setChecked(value)}
                                tintColors={{ true: '#175676', false: "red" }}
                                tintColor={checked == true ? '#175676' : checked == false ? "red" : undefined}
                            />
                        </View>
                        <View style={{ marginLeft: 10, marginTop: 5.5 }}>
                            <Text style={{ color: "#fff", fontWeight: "400", fontSize: 13, textDecorationLine: "underline" }}>I accept Terms and Conditions</Text>
                        </View>

                    </View>
                    <View style={{ marginVertical: 20 }}>
                        <TouchableOpacity onPress={() => {
                            validEmail == false ? setEmailError(true) : null
                            firstName === undefined ? setFirstNameError(true) : null
                            lastName === undefined ? setLastNameError(true) : null
                            userName === undefined ? setUserError(true) : null
                            email === undefined ? setEmailError(true) : null
                            phoneNumber === undefined ? setPhoneError(true) : null
                            password === undefined ? setPasswordError(true) : null
                            confirmPassword === undefined ? setConfirmPasswordError(true) : null
                            checked !== true ? setChecked(false) : null
                            firstName === undefined || lastName === undefined || userName === undefined || email === undefined || phoneNumber === undefined || password == undefined || confirmPassword == undefined || checked == false ? null : password !== confirmPassword ? setConfirmPasswordError(true) : registerUser()
                        }} style={{ backgroundColor: firstName == undefined || lastName === undefined || userName === undefined || email === undefined || phoneNumber === undefined || password === undefined || confirmPassword === undefined || checked == false ? '#21283F' : "#175676", paddingVertical: 10, borderRadius: 10 }}>
                            <Text style={{ textAlign: 'center', color: "#fff", fontSize: 22, fontWeight: '400' }}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView >
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
        width: 150,
        height: 150
    }
})