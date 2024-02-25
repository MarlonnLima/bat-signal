import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import logoBatman from "./assets/pictures/batman_logo.png"
import logoBatman32x55 from "./assets/pictures/batman_logo32x55.png"
import FormInput from './src/components/FormInput/FormInput';

export default function App() {
  const [sinalAtivo, setSinalAtivo] = useState(false);
  return (
    <View style={styles.container}>
      {!sinalAtivo ? (
        <>
          <Image style={styles.img} source={logoBatman} />
          <TouchableOpacity>
            <Text style={styles.btnAtivarSinal} onPress={() => setSinalAtivo(!sinalAtivo)}>Ativar Bat-Sinal</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </>
      ) :
        (
          <>
            <View style={styles.cabecalho}>
              <View style={{flexDirection: 'row', alignItems: "center", gap: 10}}>
                <Image source={logoBatman32x55} />
                <Text>Formulário Bat Sinal</Text>
              </View>
              <TouchableOpacity
                onPress={() => setSinalAtivo(!sinalAtivo)}
              ><Text style={styles.botaoClose}>X</Text></TouchableOpacity>
            </View>
            <View style={styles.formulario}>
              <FormInput labelText='Nome:' placeholderTextInput='Digite seu Nome' />
              <FormInput labelText='Telefone:' keyboardType='phone-pad' placeholderTextInput='Digite seu Telefone' />
              <FormInput labelText='Localizacao Atual:' placeholderTextInput='Digite sua Localização para resgate' />
              <FormInput labelText='Observação:' numberOfLines={4} placeholderTextInput='Digite sua observação' />
            </View>
          </>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  img: {
    height: 200,
    width: "87%",
    marginTop: 100,
  },
  btnAtivarSinal: {
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 25,
    marginTop: 100
  },
  cabecalho: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  botaoClose: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    backgroundColor: "lightgray"
  },
  formulario: {
    width: "100%",
    paddingHorizontal: 16
  }
});
