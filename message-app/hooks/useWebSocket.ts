import { useEffect, useRef, useState } from "react";

interface Message {
  id: number;
  sender: string;
  message: string;
  timestamp: string;
}

const useWebSocket = (url: string) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [connectionStatus, setConnectionStatus] = useState(false);
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    ws.current = new WebSocket(url);

    ws.current.onopen = () => setConnectionStatus(true);

    ws.current.onclose = () => setConnectionStatus(false);

    ws.current.onerror = () => setConnectionStatus(false);

    ws.current.onmessage = (event) => {
      const response = JSON.parse(event.data);
      if (response.type === "history") {
        setMessages(response.data);
      } else if (response.type === "message") {
        setMessages((prev) => [...prev, response.data]);
      }
    };

    return () => {
      ws.current?.close();
    };
  }, [url]);

  const sendMessage = (sender: string, message: string) => {
    if (ws.current) {
      ws.current.send(JSON.stringify({ type: "message", sender, message }));
    }
  };

  return { messages, connectionStatus, sendMessage };
};

export default useWebSocket;
