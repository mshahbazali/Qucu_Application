import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
export default function Index() {
  const notification = [
    {
      message: "Recibe un postre gratis en la Postrería 77 al comprar un pie."
    },
    {
      message: "Recibe un postre gratis en la Postrería 77 al comprar un pie."
    }
  ]
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 60, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <Text style={{ color: "#fff", fontSize: 40, fontWeight: "600" }}>Notificaciones</Text>
          </View>
        </View>
        {
          notification.length > 0 ? notification.map((e, i) => {
            return (
              <View key={i} style={{ marginTop: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', ...styles.shadow, paddingHorizontal: 10, borderRadius: 10, backgroundColor: '#2D344B', paddingVertical: 14, paddingRight: 40, marginVertical: 1 }}>
                  <View style={{ backgroundColor: "white", borderRadius: 5, ...styles.shadow, padding: 6, marginRight: 10 }}>
                    <Ionicons name="notifications" size={24} color="#F2994A" />
                  </View>
                  <View>
                    <Text style={{ color: "white", fontSize: 18, fontWeight: '400', lineHeight: 25 }}>{e?.message}</Text>
                  </View>
                </View>
              </View>
            )
          })
            :
            <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: '80%' }}>
              <Text style={{ color: '#9597A3', fontSize: 20, fontWeight: '600' }}>No hay notificaciones que mostrar</Text>
            </View>
        }
      </ScrollView >
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141927',
    paddingHorizontal: 20
  },
  shadow: {
    shadowColor: "#175676",
    shadowOffset: {
      width: 20,
      height: 20
    },
    shadowRadius: 20,
  }
});