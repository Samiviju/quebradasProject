import { stylesHome } from "./stylesHome";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

export function Home() {

  function handleParcipantAdd() {
    console.log("Clicou!");
  }

  return (
    <View style={stylesHome.container}>
      <Text style={stylesHome.eventName}>
        Quadras
      </Text>
      <Text style={stylesHome.eventDate}>
        Quarta, 7 de Dezembro de 2022.
      </Text>

      <View style={stylesHome.form}>
        <TextInput
          style={stylesHome.input}
          placeholder="Quadra a ser cadastrada"
          placeholderTextColor='#6b6b6b'
          keyboardType="default"
        />

        <TouchableOpacity style={stylesHome.button} onPress={handleParcipantAdd}>
          <Text style={stylesHome.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}