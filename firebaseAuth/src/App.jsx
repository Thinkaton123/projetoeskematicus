import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Logout from "./pages/Logout"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="login"
          component={Login}
        />

        <Stack.Screen
          name="cadastro"
          component={Cadastro}
        />

        <Stack.Screen
          name="logout"
          component={Logout}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}