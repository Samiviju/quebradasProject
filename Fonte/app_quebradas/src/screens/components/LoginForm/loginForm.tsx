import React, { useState, useEffect } from "react";
import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Animated
} from "react-native";
import { stylesHome } from "../HomeForm/stylesHome";
import { stylesLogin } from "./stylesLogin";

export default function LoginForm() {

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 100,
      }),
    ]).start();
  }, []);


  return (
    <KeyboardAvoidingView style={stylesLogin.backgroud}>
      <View style={stylesLogin.containerLogo}>
        <Image source={require('../../../../assets/7046561-removebg-preview.png')} />
      </View>

      <Animated.View
        style={[
          stylesLogin.container,
          {
            opacity: opacity,
            transform: [
              { translateY: offset.y }
            ]
          }
        ]}
      >
        <TextInput
          style={stylesLogin.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <TextInput
          style={stylesLogin.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <TouchableOpacity style={stylesLogin.btnSubmit}>
          <Text style={stylesLogin.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={stylesLogin.btnRegister}>
          <Text style={stylesLogin.registerText}>Criar conta gratuita</Text>
        </TouchableOpacity>

      </Animated.View>

    </KeyboardAvoidingView>
  );
}