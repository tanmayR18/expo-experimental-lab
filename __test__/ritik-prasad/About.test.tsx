import AboutUs from "@/components/ritik-prasad/AboutUs"
import { render, screen } from "@testing-library/react-native"

test('About screen test', async () => {
    await render(<AboutUs/>)
    const text = await screen.getByText('AboutUs')
    expect(text).toBeOnTheScreen()
})