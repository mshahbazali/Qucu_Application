import { View, Text } from 'react-native'
import React from 'react'

export default function index({ isLight, selected }) {
    let backgroundColor;
    if (isLight) {
        backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
    } else {
        backgroundColor = selected ? '#4BA3C3' : '#21283F';
    }
    return (
        <View
            style={{
                width: 12,
                height: 12,
                marginHorizontal: 10,
                backgroundColor,
                marginTop: -520,
                borderRadius: 50
            }}
        />
    )
}