import { View, Text, Button } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export default function Logout() {
  async function sair() {
    try {
      await signOut(auth);
      alert("Logout realizado!");
    } catch (error) {
      alert("Erro ao sair");
    }
  }

  return (
    <View>
      <Text>SAIR DA CONTA</Text>

      <Image source={{uri: 'https://img.odcdn.com.br/wp-content/uploads/2020/07/20200707093846.jpg'}} style={{ width: 100, height: 100 }}/>

      <Button title="Sair da conta" onPress={sair} />
    </View>
  );
}