import { Platform } from "react-native";

export function getName() {
  return "tanmay";
}

export function getAge() {
  return 23;
}

export const op = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
};

export const getPlatformMessage = () => {
  return Platform.OS === "ios" ? "iOS Device" : "Android Device";
};
