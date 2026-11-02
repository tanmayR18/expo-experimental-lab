// import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useRef, useState } from "react";
import {
  Button,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function HomeScreen() {
  // const insets = useSafeAreaInsets();
  const [value, setValue] = useState("");
  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <View style={[styles.container]}>
      <View>
        <Text>Home Screen</Text>
        <Button
          title="Bottomsheet"
          onPress={() => router.push("/bottomsheet")}
        />

        <Pressable
          onPress={() => router.push("/bottomsheet")}
          accessibilityRole="button"
        >
          <Text>bottomsheet</Text>
        </Pressable>

        <Button
          title="counter"
          onPress={() => setValue((prev) => prev + "DDDDDD")}
        />
        <Button title="clear" onPress={() => setValue("")} />
      </View>

      {/* Bottom */}
      <View
        style={{
          flexDirection: "row",
          // backgroundColor: "black",
          alignItems: "flex-end",
        }}
      >
        <View style={{ flex: 1, paddingVertical: 12 }}>
          <ScrollView
            ref={scrollViewRef}
            onContentSizeChange={() => {
              scrollViewRef?.current?.scrollToEnd({ animated: true });
            }}
            style={{ maxHeight: 112 }}
          >
            <View style={{}}>
              <Text style={{ fontSize: 16, lineHeight: 21 }}>{value}</Text>
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            width: 34,
            height: 34,
            backgroundColor: "green",
          }}
        ></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
});
