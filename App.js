import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [opponent, setOpponent] = useState(null);
  const [result, setResult] = useState(null);
  const hands = {
  pedra: "✊",
  papel: "✋",
  tesoura: "✌"
  }; // obj

  const choices = Object.keys(hands); // array

  function move(choice) {
     const index = Math.floor(Math.random() * choices.length);


     const pc = choices[index];

     const win1 = choice == 'pedra' && pc == 'tesoura'
     const win2 = choice == 'papel' && pc == 'pedra'
     const win3 = choice == 'tesoura' && pc == 'papel'

     if (choice == pc) {
      setResult("empate");
     } else if (win1 || win2 || win3) {
      setResult("vitória");
     } else {
      setResult("derrota");
     }

     setOpponent(pc);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jankenpon</Text>
    <View>
      <View>
       <text style={styles.player}>Oponente</text>
       <text style={styles.emoji}></text>
        <text>{opponent == null ? "?" : hands[opponent]}</text>
      </View>

      <View>
       <text style={styles.text}>X</text>
      </View>

      <View>
        <text style={styles.player}>Você</text>
        <View style={styles.emojiBox}>
      {choices.map((item) => (
        <TouchableOpacity key={item} onPress={()  => move(item)} >
        <text>{hands[item]}</text>
        </TouchableOpacity>
      ))}
      </View>
      </View>
      </View>
       
      <text style={styles.text}></text>
      <text style={styles.text}>Resultado: {result}</text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60, //top bottom
    paddingHorizontal: 20  , //left right
  },
  title: {
    fontSize: 24,
    fontWeight:"700",
  },
  content:{
    flex: 1,
    justifyContent: "space-around",
    paddingVertical: "40%",

  },
  player: {
    fontSize: 20,
  }, 
  emoji:{
    fontSize: 32,
  },
  emojiBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 18,
  },
  bold: {
    fontWeight: "800",
  }
});
