import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface IStatusIndicator {
  connected: boolean;
}

const StatusIndicator: React.FC<IStatusIndicator> = ({ connected }) => (
  <View style={styles.container}>
    <Text style={connected ? styles.onlineText : styles.offlineText}>
      {connected ? "Conectado" : "Desconectado"}
    </Text>
    <View style={[styles.indicator, { backgroundColor: connected ? "green" : "red" }]} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 10,
  },
  onlineText: {
    color: "green",
    fontSize: 14,
    marginRight: 8,
  },
  offlineText: {
    color: "red",
    fontSize: 14,
    marginRight: 8,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

export default StatusIndicator;
