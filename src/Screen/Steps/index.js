import { View, Image, Text, StyleSheet, Button, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { NextBtn, ProgressCircle, SkipBtn, CompleteStep } from './Compunet'
export default function Index({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Onboarding
                    onSkip={() => { navigation.navigate("AuthNavigation") }}
                    onDone={() => { navigation.navigate("AuthNavigation") }}
                    DotComponent={ProgressCircle}
                    NextButtonComponent={NextBtn}
                    DoneButtonComponent={CompleteStep}
                    SkipButtonComponent={SkipBtn}
                    containerStyles={{ marginTop: -60 }}
                    imageContainerStyles={{ marginTop: -200 }}
                    titleStyles={{ display: 'none' }}
                    subTitleStyles={{ fontSize: 17, fontWeight: '600', color: "#A9BEC9", marginTop: -30 }}
                    pages={[
                        {
                            backgroundColor: '#141927',
                            image: <Image source={require('../../Assests/Images/stepOneImg.png')} />,
                            title: '',
                            subtitle: 'Olvídate de cargar con tarjetas y cupones, OOWN tiene todas las promociones al alcance. Aceptadas en miles de establecimientos alrededor del mundo.',
                        },
                        {
                            backgroundColor: '#141927',
                            image: <Image source={require('../../Assests/Images/stepTwoImg.png')} />,
                            title: '',
                            subtitle: 'Cambia tus puntos, cupones, compras por experiencias, comida y viajes.',
                        },
                        {
                            backgroundColor: '#141927',
                            image: <Image source={require('../../Assests/Images/stepThreeImg.png')} />,
                            title: '',
                            subtitle: 'Consumir nunca había sido tan satifactorio.',
                        },
                    ]}
                />
            </ScrollView>

        </View>
    )
}