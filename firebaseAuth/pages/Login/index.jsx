import { useState } from "react"
import { View, Text, TextInput, Button } from "react-native"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebaseConfig"

export default function Login({ navigation }) {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  async function entrar() {
    try {
      await signInWithEmailAndPassword(auth, email, senha)

      alert("Login realizado!")
      navigation.navigate("logout")
    } catch (error) {
      alert("E-mail ou senha incorretos")
    }
  }

  return (
    <View>
      <Text>Login</Text>

      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <Button
        title="Entrar"
        onPress={entrar}
      />

      <Button
        title="Criar conta"
        onPress={() => navigation.navigate("cadastro")}
      />
    </View>
  )
}