import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

const Index = ({ name, arr }: any) => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // 5. loading
  const [showLoading, setShowLoading] = useState(false);
  const [data, setData] = useState("");
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <View>
      <Text>Hello, {name}</Text>

      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder="Enter name"
      />

      <Pressable onPress={() => setVisible(true)} accessibilityRole="button">
        <Text>Details</Text>
      </Pressable>

      {visible && <Text>Details are visible</Text>}

      <View>
        {arr?.map((val: any) => (
          <Text testID="test-tech" key={val}>
            {val}
          </Text>
        ))}
      </View>

      {/* 4. FOrms */}
      <View>
        <TextInput
          placeholder="Enter email"
          value={email}
          onChangeText={setEmail}
        />
        {error && <Text>{error}</Text>}
        <Pressable
          onPress={() => {
            if (email.length === 0) {
              setError("Email is required");
            }
          }}
          accessibilityRole="button"
        >
          <Text>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
