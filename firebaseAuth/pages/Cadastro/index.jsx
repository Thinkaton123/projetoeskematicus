import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function cadastrar() {
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      alert("Cadastro realizado!");
    } catch (error) {
      alert("Erro ao cadastrar");
    }
  }

  return (
    <View>
      <Text>Cadastro</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <Button title="Cadastrar" onPress={cadastrar} />
    </View>
  );
}