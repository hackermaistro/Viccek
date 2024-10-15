import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput,Alert } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {

  const [vicc, setVicc] = useState("")
  const [adatok, setAdatok] = useState([])
  const [szoveg, setSzoveg] = useState("")


  const tomb = [
    {
      "szoveg": "– Hogy jön ki a pap a templomból  ???? – Mintha mise történt volna.",
      "tipus": "favicc",
    },
    {
      "szoveg": "-Minden bajnak a zsidók az okai!-Meg a biciklisták!-Miért éppen a biciklisták?-Na, miért éppen a zsidók?!",
      "tipus": "zsidóviccek",
    },
    {
      "szoveg": "- Miért van a szőke nő monitorján cipőnyom?- Mert megpróbált belépni az internetre.",
      "tipus": "szőkenő",
    },
    {
      "szoveg": "- Mire vár a szőke nő a piramis lábánál?- ??? - Hogy elinduljon a mozgólépcső!",
      "tipus": "szőkenő",
    },
    {
      "szoveg": "Szőke nő a lottózóban:- Ez milyen játék ?- El kell találni 5 számot...- És milyen messziről?",
      "tipus": "szőkenő",
    }
  ]


  const sorsol = () => {
    let veletlen = Math.floor(Math.random() * tomb.length)
    //alert(veletlen)
    setVicc(tomb[veletlen].szoveg)

  }

  const letoltes = async () => {
    let x = await fetch("https://api.chucknorris.io/jokes/random")
    let y = await x.json()
    setAdatok(y)

  }



  useEffect(() => {
    sorsol()
    letoltes()
  }, [])

  function gombnyomas(){
    Alert.alert("Üdvözlet","Hello "+szoveg+" !!!")
  }



  return (
    <ImageBackground source={require("./hatter.jpg")} style={styles.hatterkep}>
      <View style={styles.container}>
        <View style={[
          styles.container,
          {
            flexDirection: 'column',
          },
        ]}>
          <View style={{ flex: 2 }}  >
            <TouchableOpacity style={styles.button} onPress={sorsol}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Új vicc</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 20, fontStyle: 'italic', marginTop: 50 }}>{vicc}</Text>
          </View>

          <View style={{ flex: 2 }} >
            <TouchableOpacity style={styles.button} onPress={letoltes}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Új Chuck Norris poén</Text>
            </TouchableOpacity>
            <Text style={styles.kek}>{adatok.value}</Text>
          </View>

          <View style={{ flex: 1 }} >
            <TextInput
              style={styles.input}
              onChangeText={setSzoveg}
              placeholder='Neved'
              value={szoveg}
            />
            <TouchableOpacity style={styles.button} onPress={gombnyomas}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Üdvözlet</Text>
            </TouchableOpacity>
          </View>


        </View>

      </View>
    </ImageBackground>

  );
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 21,
    padding: 10


  },
  kek: {
    color: "blue",
    fontSize: 20,
  },
  gomb: {
    margin: 20,
  },
  hatterkep: {
    resizeMode: "cover",
    justifyContent: "center",
    flex: 1
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "lightgreen",
    borderRadius:5
  },

});
