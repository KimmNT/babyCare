import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import Routing from "./router/Routing";
import Loading from "./screens/Loading";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 3000);
  }, [isLoading]);

  return <>{isLoading ? <Loading /> : <Routing />}</>;
}

const styles = StyleSheet.create({});
