import { View, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, Text } from 'react-native'
import React, { useState, useRef } from 'react'
import axios from 'axios'
import { api } from '../../../Config/Api'
import { useSelector } from 'react-redux'
import Toast from 'react-native-root-toast';

export default function Index({ navigation }) {
    const [passwordInput, setPasswordInput] = useState(false)
    const [confirmPasswordInput, setConfirmPasswordInput] = useState(false)
    const [password, setPassword] = useState(undefined)
    const [confirmPassword, setConfirmPassword] = useState(undefined)
    const [passwordError, setPasswordError] = useState(undefined)
    const [confirmPasswordError, setConfirmPasswordError] = useState(undefined)
    const state = useSelector(state => state)
    const resetPassword = () => {
        if (password == confirmPassword) {
            axios.post(`${api}/auth/resetpassword`, { id: state.UserId, password: password }).then((response) => {
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
            })
                .catch((err) => { })
        }
        else {
            setConfirmPasswordError(true)
        }
    }
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.logoContainer}>
                    <Image source={require("../../../Assests/Images/logo.png")} style={styles.logo} />
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ color: "#fff", marginBottom: 5 }}>Enter New Password</Text>
                        <TextInput keyboardType='default' onChangeText={(text) => setPassword(text)} onFocus={() => {
                            setPasswordInput(true)
                            setPasswordError(undefined)
                        }} placeholder="New Passwoerd" placeholderTextColor={"#2D344B"} style={{ borderBottomColor: passwordError !== undefined ? "red" : passwordInput == false ? "#323232" : "#175676", borderBottomWidth: 2, color: "#fff", fontWeight: "600", paddingBottom: 10, fontSize: 15 }} />
                        <Text style={{ color: "red", marginTop: 5, display: passwordError == undefined ? "none" : "flex" }}>Please Enter Valid Password</Text>
                    </View>
                    <View style={{ marginTop: 40 }}>
                        <Text style={{ color: "#fff", marginBottom: 5 }}>Enter Confirm Password</Text>
                        <TextInput keyboardType='default' onChangeText={(text) => setConfirmPassword(text)} onFocus={() => {
                            setConfirmPasswordInput(true)
                            setConfirmPasswordError(undefined)
                        }} placeholder="Confirm Password" placeholderTextColor={"#2D344B"} style={{ borderBottomColor: confirmPasswordError !== undefined ? "red" : confirmPasswordInput == false ? "#323232" : "#175676", borderBottomWidth: 2, color: "#fff", fontWeight: "600", paddingBottom: 10, fontSize: 15 }} />
                        <Text style={{ color: "red", marginTop: 5, display: confirmPasswordError == undefined ? "none" : "flex" }}>Please Enter Valid Confirm Password</Text>
                    </View>
                    <View style={{ marginTop: 70 }}>
                        <TouchableOpacity onPress={() => {
                            password === undefined ? setPasswordError(true) : null
                            confirmPassword === undefined ? setConfirmPasswordError(true) : null
                            password === undefined || confirmPassword === undefined ? null : resetPassword()
                        }} style={{ backgroundColor: password === undefined || confirmPassword === undefined ? '#21283F' : "#175676", paddingVertical: 10, borderRadius: 10 }}>
                            <Text style={{ textAlign: 'center', color: "#fff", fontSize: 22, fontWeight: '400' }}>Send</Text>
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