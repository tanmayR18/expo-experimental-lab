import {
  BottomSheetFlatList,
  BottomSheetFooter,
  BottomSheetModal,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import React, { useEffect, useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const items = Array.from({ length: 30 }, (_, index) => `Item ${index + 1}`);
function InputFooter() {
  const [value, setValue] = useState("");

  return (
    <View style={styles.footerContent}>
      <BottomSheetTextInput
        value={value}
        onChangeText={setValue}
        multiline
        selectionColor="#287C60"
        placeholder="Write a message"
        placeholderTextColor="#ADB2B0"
        style={styles.input}
      />
      <Pressable onPress={() => {}} style={styles.button}>
        <Text>Send</Text>
      </Pressable>
    </View>
  );
}

export default function BottomSheetScreen() {
  const insets = useSafeAreaInsets();
  const sheetRef = useRef<BottomSheetModal>(null);

  useEffect(() => {
    sheetRef.current?.present();
  }, []);

  const renderFooter = (
    props: React.ComponentProps<typeof BottomSheetFooter>,
  ) => (
    <BottomSheetFooter {...props} bottomInset={insets.bottom}>
      <InputFooter />
    </BottomSheetFooter>
  );

  return (
    <BottomSheetModal
      ref={sheetRef}
      topInset={insets.top}
      snapPoints={["100%"]}
      enableDynamicSizing={false}
      keyboardBehavior="interactive"
      keyboardBlurBehavior="restore"
      footerComponent={renderFooter}
    >
      <View style={styles.header}>
        <Text>Custom bottom sheet header</Text>
      </View>
      <BottomSheetFlatList
        data={items}
        keyExtractor={(item: string) => item}
        renderItem={({ item }: { item: string }) => (
          <View style={styles.listItem}>
            <Text>{item}</Text>
          </View>
        )}
        style={styles.list}
      />
    </BottomSheetModal>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  list: {
    flex: 1,
  },
  listItem: {
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  footerContent: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
    padding: 12,
    backgroundColor: "#ccc",
  },
  input: {
    flex: 1,
    maxHeight: 112,
    // borderWidth: StyleSheet.hairlineWidth,
    // borderRadius: 8,
    fontSize: 16,
    lineHeight: 21,
    paddingTop: 12,
    paddingHorizontal: 12,
    backgroundImage: "white",
  },
  button: {
    width: 34,
    height: 34,
    alignSelf: "flex-end",
    justifyContent: "center",
    // paddingHorizontal: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
  },
});
