import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from "react-native";
import { stylesLogin } from "./stylesLogin";
import { StatusBar } from "expo-status-bar";



export default function TemplateLogin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={stylesLogin.container}>
      <View style={stylesLogin.inputView}>
        <TextInput
          style={stylesLogin.textInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={stylesLogin.inputView}>
        <TextInput
          style={stylesLogin.textInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={stylesLogin.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={stylesLogin.loginBtn}>
        <Text style={stylesLogin.loginText}>LOGIN</Text>
      </TouchableOpacity>

    </View>
  );
}
