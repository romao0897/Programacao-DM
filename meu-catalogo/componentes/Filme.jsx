import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Filme(props) {

  const { nome, ano, diretor, tipo, capa } = props


  return (
    <View style={styles.container}>


      <Text style={styles.texto}>Filme</Text>

      <Text style={styles.texto}>NOME: {nome}</Text>
      <Text style={styles.texto}>ANO: {ano}</Text>
      <Text style={styles.texto}>DIRETOR: {diretor}</Text>
      <Text style={styles.texto}>TIPO: {tipo}</Text>
     

      <Image
        source={{
          uri: capa
        }}
        style={{
          height: 100,
          width: 100
        }}

      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderWidth: 10,
    padding: 20,
    alignItems: 'center',
    flex: 1
  },
  texto: {
    fontSize: 20,
    fontWeight: 600
  }
})