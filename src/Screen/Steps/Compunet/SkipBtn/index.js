import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function index({ ...props }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity {...props} style={styles.btn}>
                <Text style={styles.btnText}>Skip</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: "#2D344B",
        width: 330,
        paddingVertical: 15,
        borderRadius: 50,
        marginTop: -150,
        marginLeft: 23
    },
    btnText: {
        color: "white",
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center'
    }
})