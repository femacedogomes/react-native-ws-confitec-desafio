import React, { useRef, useEffect } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";

interface IMessage {
  id: number;
  sender: string;
  message: string;
  timestamp: string;
}

interface IMessageList {
  messages: IMessage[];
}

const MessageList: React.FC<IMessageList> = ({ messages }) => {
  const flatListRef = useRef<FlatList<IMessage>>(null);

  const renderItem = ({ item }: { item: IMessage }) => (
    <View style={styles.message}>
      <View
        style={styles.messageContainer}
      >
        <Text style={styles.sender}>{item.sender}:</Text>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
      <Text style={styles.text}>{item.message}</Text>
    </View>
  );

  return (
    <FlatList
      ref={flatListRef} // Referência para o FlatList
      data={messages}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.list}
      onContentSizeChange={() =>
        flatListRef.current?.scrollToEnd({ animated: true })
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    borderRadius: 10,
    paddingVertical: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  messageContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  message: {
    maxWidth: "auto",
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    gap: 5,
    padding: 10,
    borderRadius: 4,
    elevation: 2,
  },
  timestamp: {
    fontSize: 12,
    color: "#888",
  },
  sender: {
    fontWeight: "bold",
    fontSize: 14,
  },
  text: {
    fontSize: 14,
  },
});

export default MessageList;
