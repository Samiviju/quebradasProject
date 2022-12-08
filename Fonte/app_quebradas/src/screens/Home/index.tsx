import { styles } from "./styles";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

export function Home() {

  function handleParcipantAdd() {
    console.log("Clicou!");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Quadras
      </Text>
      <Text style={styles.eventDate}>
        Quarta, 7 de Dezembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Quadra a ser cadastrada"
          placeholderTextColor='#6b6b6b'
          keyboardType="default"
        />

        <TouchableOpacity style={styles.button} onPress={handleParcipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}