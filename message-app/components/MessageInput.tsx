import React from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

interface IMessageInput {
  value: string;
  onChangeText: (text: string) => void;
  onSend: () => void;
}

const MessageInput: React.FC<IMessageInput> = ({ value, onChangeText, onSend }) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Digite sua mensagem"
      value={value}
      onChangeText={onChangeText}
    />
    <TouchableOpacity style={styles.button} onPress={onSend}>
      <Text style={styles.buttonText}>Enviar</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default MessageInput;
