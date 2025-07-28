import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";

export default function TabTwoScreen() {
  const [qrUrl, setQrUrl] = useState<string | null>(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7g4S6hxQZ8NZlsSgE3vP0e77hTJUpg0DitA&s"
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchQRCode = async () => {
      try {
        // Replace with your actual backend URL
        // const response = await axios.get(
        //   "https://your-backend.com/api/user/qr"
        // );
        setQrUrl(
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7g4S6hxQZ8NZlsSgE3vP0e77hTJUpg0DitA&s"
        ); // if it's a URL
        // or setQrUrl(`data:image/png;base64,${response.data.qrCode}`); if base64
      } catch (error) {
        console.error("Failed to load QR Code:", error);
      } finally {
        setLoading(false);
      }
    };

    // fetchQRCode();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Your QR Code</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : qrUrl ? (
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7g4S6hxQZ8NZlsSgE3vP0e77hTJUpg0DitA&s",
          }}
          style={styles.qrImage}
        />
      ) : (
        <Text style={styles.error}>Failed to load QR code.</Text>
      )}
      {/* 
      <Text style={styles.description}>
        This QR code is unique to your account. Show it to scan and verify.
      </Text> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingBottom: 40,
    paddingHorizontal: 24,
    alignItems: "center",
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
  },
  qrImage: {
    width: "500",
    height: "500",
    backgroundColor: "#fefefe",
    padding: 10,
    borderRadius: 30,
    objectFit: "contain",
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 16,
  },
  error: {
    fontSize: 16,
    color: "red",
    marginVertical: 20,
  },
});
