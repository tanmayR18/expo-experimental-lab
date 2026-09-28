import UnitTesting from "@/components/rntl/unit-testing";
import { render, screen } from "@testing-library/react-native"

// test('Unit test text present',async () => {
//     await render(<UnitTesting/>);
//     expect(screen.getByText("First Unit Test")).toBeOnTheScreen()
// })

describe('<HomeScreen />', () => {

  test('CustomText renders correctly', async () => {
    const tree = (await render(<UnitTesting />)).toJSON();

    expect(tree).toMatchSnapshot();
  });

    test('Unit test text present',async () => {
        await render(<UnitTesting/>);
        expect(screen.getByText("First Unit Test1")).toBeOnTheScreen()
    })
});