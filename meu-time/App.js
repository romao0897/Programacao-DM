// imports dos componentes e libs
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

// função principal do componente
export default function App() {
  // lógica do meu componente
  const nome = "Arrasca"

  function alerta() {
    alert('Maior Time de todos')
  }

  // retorno é um código JSX (Template) do que vai ser
  // renderizado na tela
  return (
    <ScrollView>

      <View style={styles.container}>
        <StatusBar style="auto" />

        <Text style={{ fontSize: 40 }} >01 do flamengo</Text>
        <Text style={{ fontSize: 40 }} >{nome}</Text>
        <Text style={styles.textoGrande} >Maior time do MUNDO
          Giorgian Daniel De Arrascaeta Benedetti é um futebolista uruguaio que atua como meio-campista. Atualmente, defende o Flamengo e a Seleção Uruguaia.
        </Text>

        <Button title='socio torcedor' onPress={alerta} ></Button>

        <Image
          source={require('./imagem/img.jpg')}
          style={{
            height: 300,
            width: 300,
            padding: 30
          }}
        />
         <Image
          source={require('./imagem/img1.jpg')}
          style={{
            height: 300,
            width: 300,
            padding: 30
            
          }}
        />
         <Image
          source={require('./imagem/img2.jpg')}
          style={{
            height: 250,
            width: 250,
            padding: 30
          }}
        />
         <Image
          source={require('./imagem/img3.jpg')}
          style={{
            height: 280,
            width: 290,
          }}
        />
        <Image
          source={require('./imagem/img4.jpg')}
          style={{
            height: 550,
            width: 300,
            padding: 30
          }}
        />
        


      </View>


    </ScrollView>    
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  textoGrande: {
    fontSize: 50,
    fontWeight: 900,
    fontStyle: 'italic'
  }
});