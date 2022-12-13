import { StyleSheet } from "react-native";

export const stylesLogin = StyleSheet.create({
  backgroud: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9932CC"
  },

  containerLogo: {
    flex: 1,
    justifyContent: "center"
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: '90%',
    paddingBottom: 50
  },

  input: {
    backgroundColor: '#FFF',
    height: 45,
    padding: 8,
    width: '100%',
    marginBottom: 15,
    color: '#222',
    fontSize: 18,
    borderRadius: 7
  },

  btnSubmit: {
    backgroundColor: "#DDA0DD",
    width: "100%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7
  },

  submitText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "900",
  },

  btnRegister: {
    marginTop: 10,
  },

  registerText: {
    color: "#FFF"
  }

})