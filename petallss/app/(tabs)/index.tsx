import { SafeAreaView, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Login() {

  const router = useRouter();
  const [password, setPassword] = useState("");

  const handleLogin = () => {

  if (password.trim() === "") {
    Alert.alert("Error", "Please enter a password");
    return;
  }

  if (password === "1234") {
    router.push("/home");
  } else {
    Alert.alert("Login Failed", "Wrong password");
  }

};

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Enter Email"
        style={styles.input}
      />

      <TextInput
        placeholder="Enter Password"
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
      />

      <Button title="LOGIN" onPress={handleLogin} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white"
  },
  title: {
    fontSize: 26,
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15
  }
});