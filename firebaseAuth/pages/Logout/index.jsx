import { View, Text, Button, Image } from "react-native"
import { signOut } from "firebase/auth"
import { auth } from "../../firebaseConfig"

export default function Logout({ navigation }) {
  async function sair() {
    try {
      await signOut(auth)

      alert("Logout realizado!")
      navigation.navigate("login")
    } catch (error) {
      alert("Erro ao sair")
    }
  }

  return (
    <View>
      <Text>Logout</Text>

      <Image
        source={{ uri: "https://img.odcdn.com.br/wp-content/uploads/2020/07/20200707093846.jpg" }}
        style={{ width: 200, height: 200 }}
      />

      <Button
        title="Sair da conta"
        onPress={sair}
      />
    </View>
  )
}
