import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const time = {
  nome: "Flamengo",
  escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
}

export default function EscudoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{time.nome}</Text>
      <Image source={{ uri: time.escudo }} style={styles.escudo} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 20
  },
  nome: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red'
  },
  escudo: {
    width: 300,
    height: 250,
    resizeMode: 'contain'
  }
})