import HomeScreen from "@/app/(tabs)";
import { getPlatformMessage } from "@/testing/utils/mock";
import { render, screen, userEvent } from "@testing-library/react-native";
import { router } from "expo-router";
import { Platform } from "react-native";

jest.mock("expo-router", () => ({
  ...jest.requireActual("expo-router"),
  router: {
    ...jest.requireActual("expo-router").router,
    push: jest.fn(),
  },
}));

jest.replaceProperty(Platform, "OS", "ios");

afterEach(() => {
  jest.restoreAllMocks();
});

test("mock navigation", async () => {
  await render(<HomeScreen />);
  const button = await screen.findByRole("button", { name: "bottomsheet" });
  expect(button).toBeOnTheScreen();

  const user = userEvent.setup();
  await user.press(button);

  expect(router.push).toHaveBeenCalled();
  expect(router.push).toHaveBeenCalledWith("/bottomsheet");
});

test("test platform", async () => {
  const device = getPlatformMessage();
  expect(device).toBe("iOS Device");
});
