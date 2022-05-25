import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
export default function Index({ ...props }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity {...props} style={styles.btn}>
                <Text style={styles.btnText}>Register Now</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        backgroundColor: "#175676",
        width: 330,
        paddingVertical: 15,
        borderRadius: 50,
        marginTop: -310,
        marginRight: 30
    },
    btnText: {
        color: "white",
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center'
    }
})


