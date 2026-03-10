import { SafeAreaView, ScrollView, Text, Image, TextInput, Button, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Home() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <Text style={styles.title}>Home Screen</Text>

        <Image
          source={{ uri: "https://picsum.photos/300" }}
          style={styles.image}
        />

        <TextInput
          placeholder="Type something..."
          style={styles.input}
        />

        <Button
          title="Click Me"
          onPress={() => alert("Button Pressed")}
        />

        <Link href="/" style={styles.link}>
          Go Back to Login
        </Link>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "black",
  },

  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "white",
  },

  link: {
    marginTop: 20,
    color: "blue",
  }
});