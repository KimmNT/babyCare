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

  const handleCloseScan = () => {
    console.log("HAA");
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
    </View>
  );
}

const styles = StyleSheet.create({
  scan__container: {
    width: "100%",
    height: "100%",
  },
  scan__close_btn: {
    marginHorizontal: res * 0.04,
    marginVertical: res * 0.07,
  },
});
