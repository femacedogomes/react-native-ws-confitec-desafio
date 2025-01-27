import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, Platform } from "react-native";
import useWebSocket from "./hooks/useWebSocket";
import StatusIndicator from "./components/StatusIndicator";
import MessageList from "./components/MessageList";
import MessageInput from "./components/MessageInput";

const App = () => {
  const webSocketURL =
    Platform.OS === "ios" ? "ws://localhost:8080" : "ws://10.0.2.2:8080";

  const { messages, connectionStatus, sendMessage } = useWebSocket(webSocketURL);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      sendMessage("React Native", input);
      setInput("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Bate-Papo </Text>
      <StatusIndicator connected={connectionStatus} />
      <MessageList messages={messages} />
      <MessageInput value={input} onChangeText={setInput} onSend={handleSendMessage} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f9",
    paddingTop: Platform.OS === "android" ? 20 : 0,
    paddingBottom: Platform.OS === "android" ? 20 : 0,
  },
  title: {
    marginTop: 40,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;
