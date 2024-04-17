import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const res = Dimensions.get("window").height;

//IMAGE
import closeBtn from "../assets/closeBtn.png";

export default function ScanQR({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isFlashlightOn, setIsFlashlightOn] = useState(false);
  const [qrData, setQRData] = useState("");
  const scannerRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setQRData(data);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  const toggleFlashlight = () => {
    setIsFlashlightOn(!isFlashlightOn);
    if (scannerRef.current) {
      scannerRef.current.toggleTorch();
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleToDetail = () => {
    navigation.navigate("Detail");
  };

  return (
    <View style={styles.scan__container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
      <TouchableOpacity onPress={handleToDetail} style={styles.scan__success}>
        <Text
          style={{
            color: "#FFF",
            fontWeight: "600",
            fontSize: 20,
            textTransform: "uppercase",
          }}
        >
          scan successfully
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  scan__container: {
    position: "relative",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  scan__close_btn: {
    marginHorizontal: res * 0.04,
    marginVertical: res * 0.07,
  },
  scan__success: {
    position: "absolute",
    bottom: res * 0.07,
    backgroundColor: "#374259",
    paddingHorizontal: res * 0.04,
    paddingVertical: res * 0.02,
    borderRadius: res * 0.01,
  },
});
