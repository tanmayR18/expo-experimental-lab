import Form from "@/components/rntl/form";
import { render, screen, userEvent } from "@testing-library/react-native";

describe("Login Form Test cases", () => {
  const mockSubmitHandler = jest.fn();

  // All fields available or not
  test("check initial field present", async () => {
    await render(<Form onSubmit={mockSubmitHandler} />);

    expect(screen.getByTestId("email-input")).toBeOnTheScreen();
    expect(screen.getByTestId("password-input")).toBeOnTheScreen();
    expect(screen.getByTestId("submit-button")).toBeOnTheScreen();
  });

  // Check if inputs are filled with correct test cases
  test("check updated inputs", async () => {
    await render(<Form onSubmit={mockSubmitHandler} />);

    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");

    const user = userEvent.setup();

    await user.type(emailInput, "tanmay@gmail.com");
    await user.type(passwordInput, "tanmay18");

    expect(emailInput.props.value).toBe("tanmay@gmail.com");
    expect(passwordInput.props.value).toBe("tanmay18");
  });

  // Form validation

  // Empty fields
  test("empty field validation", async () => {
    await render(<Form onSubmit={mockSubmitHandler} />);

    const submitButton = screen.getByTestId("submit-button");
    const user = userEvent.setup();
    await user.press(submitButton);

    expect(screen.getByTestId("email-error")).toBeOnTheScreen();
    expect(screen.getByTestId("password-error")).toBeOnTheScreen();

    expect(screen.getByTestId("email-error").props.children).toBe(
      "Enter a valid email address.",
    );
    expect(screen.getByTestId("password-error").props.children).toBe(
      "Password must be at least 8 characters.",
    );
  });

  // Invalid credentials
  test("input text validation", async () => {
    await render(<Form onSubmit={mockSubmitHandler} />);

    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const submitButton = screen.getByTestId("submit-button");

    const user = userEvent.setup();
    await user.type(emailInput, "tanmay");
    await user.type(passwordInput, "tanmay");

    await user.press(submitButton);

    expect(screen.getByTestId("email-error")).toBeOnTheScreen();
    expect(screen.getByTestId("password-error")).toBeOnTheScreen();

    expect(screen.getByTestId("email-error").props.children).toBe(
      "Enter a valid email address.",
    );
    expect(screen.getByTestId("password-error").props.children).toBe(
      "Password must be at least 8 characters.",
    );
  });

  // check if form is submitted removes the error
  test("Submit handle testcase", async () => {
    jest.useFakeTimers();
    await render(<Form onSubmit={mockSubmitHandler} />);

    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const submitButton = screen.getByTestId("submit-button");

    const user = userEvent.setup({
      advanceTimers: jest.advanceTimersByTime,
    });

    // invalid credentials
    await user.type(emailInput, "tanmay");
    await user.type(passwordInput, "tanmay");
    await user.press(submitButton);

    expect(screen.getByTestId("email-error")).toBeOnTheScreen();
    expect(screen.getByTestId("password-error")).toBeOnTheScreen();

    // valid credentials
    await user.type(emailInput, "tanmay@gmail.com");
    await user.type(passwordInput, "tanmay18092003");
    await user.press(submitButton);

    jest.advanceTimersByTime(1000);

    expect(mockSubmitHandler).toHaveBeenCalled();
    expect(() => screen.getByTestId("email-error")).toThrow();
    expect(() => screen.getByTestId("password-error")).toThrow();
  });

  jest.useRealTimers();
});
